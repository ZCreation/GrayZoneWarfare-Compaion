const missionTabsEl = document.getElementById("missionTabs");
const missionSearchEl = document.getElementById("missionSearch");
const missionResultsEl = document.getElementById("missionResults");
const missionCountEl = document.getElementById("missionCount");
const missionDetailPanelEl = document.getElementById("missionDetailPanel");

let activeGiverId = missionGivers[0]?.id || "handshake";
let selectedMissionName = "";
let detailRequestToken = 0;

const missionDetailCache = new Map();

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalize(value) {
  return value.toLowerCase().trim();
}

function getMissionApiUrl(missionName) {
  const pageName = encodeURIComponent(missionName).replace(/%20/g, "_");
  return `https://gray-zone-warfare.fandom.com/api.php?action=parse&page=${pageName}&prop=text&format=json&origin=*`;
}

function getTextContent(element) {
  return element?.textContent?.replace(/\s+/g, " ").trim() || "";
}

function absolutizeUrl(url) {
  if (!url) {
    return "";
  }

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  if (url.startsWith("//")) {
    return `https:${url}`;
  }

  if (url.startsWith("/")) {
    return `https://gray-zone-warfare.fandom.com${url}`;
  }

  return url;
}

function getSectionNodes(documentRoot, sectionId) {
  const marker = documentRoot.querySelector(`#${CSS.escape(sectionId)}`);
  const heading = marker?.closest("h2, h3");
  if (!heading) {
    return [];
  }

  const nodes = [];
  let current = heading.nextElementSibling;

  while (current && !/^H2$/i.test(current.tagName)) {
    nodes.push(current);
    current = current.nextElementSibling;
  }

  return nodes;
}

function extractBriefing(nodes) {
  const tabber = nodes.find((node) => node.matches?.(".tabber, .wds-tabber"));
  if (tabber) {
    const labels = Array.from(tabber.querySelectorAll(".wds-tabs__tab-label")).map((element) => getTextContent(element));
    const contents = Array.from(tabber.querySelectorAll(".wds-tab__content")).map((element) => getTextContent(element));

    return contents
      .map((text, index) => ({
        label: labels[index] || `Briefing ${index + 1}`,
        text,
      }))
      .filter((entry) => entry.text);
  }

  return nodes
    .map((node, index) => ({
      label: index === 0 ? "Briefing" : `Briefing ${index + 1}`,
      text: getTextContent(node),
    }))
    .filter((entry) => entry.text);
}

function extractListItems(nodes) {
  const items = [];

  nodes.forEach((node) => {
    if (node.matches?.("ul, ol")) {
      node.querySelectorAll(":scope > li").forEach((item) => {
        const text = getTextContent(item);
        if (text) {
          items.push(text);
        }
      });
      return;
    }

    if (node.matches?.("li")) {
      const text = getTextContent(node);
      if (text) {
        items.push(text);
      }
    }
  });

  return items;
}

function extractGuide(nodes) {
  const paragraphs = [];
  const galleryItems = [];

  nodes.forEach((node) => {
    if (node.matches?.("p, blockquote")) {
      const text = getTextContent(node);
      if (text) {
        paragraphs.push(text);
      }
    }

    node.querySelectorAll?.(".wikia-gallery-item").forEach((item) => {
      const image = item.querySelector("img");
      const caption = item.querySelector(".lightbox-caption");
      const imageUrl = absolutizeUrl(image?.getAttribute("data-src") || image?.getAttribute("src") || "");
      const captionText = getTextContent(caption);

      if (imageUrl) {
        galleryItems.push({ imageUrl, caption: captionText });
      }
    });
  });

  return { paragraphs, galleryItems };
}

function parseMissionDetailHtml(missionName, html) {
  const parser = new DOMParser();
  const documentRoot = parser.parseFromString(html, "text/html");
  const infobox = documentRoot.querySelector(".portable-infobox");
  const title = getTextContent(infobox?.querySelector(".pi-title")) || missionName;
  const vendor = getTextContent(infobox?.querySelector('[data-source="vendor"] .pi-data-value'));
  const location = getTextContent(infobox?.querySelector('[data-source="location"] .pi-data-value'));
  const next = Array.from(infobox?.querySelectorAll('[data-source="next"] a') || []).map((link) => getTextContent(link)).filter(Boolean);
  const bannerImage = absolutizeUrl(infobox?.querySelector(".pi-image-thumbnail")?.getAttribute("src") || "");

  const briefing = extractBriefing(getSectionNodes(documentRoot, "Briefing"));
  const objectives = extractListItems(getSectionNodes(documentRoot, "Objectives"));
  const rewards = extractListItems(getSectionNodes(documentRoot, "Rewards"));
  const guide = extractGuide(getSectionNodes(documentRoot, "Guide"));

  return {
    title,
    vendor,
    location,
    next,
    bannerImage,
    briefing,
    objectives,
    rewards,
    guide,
  };
}

function renderDetailLoading(missionName) {
  if (!missionDetailPanelEl) {
    return;
  }

  missionDetailPanelEl.innerHTML = `
    <div class="mission-detail-panel__state">
      <h3>${escapeHtml(missionName)}</h3>
      <p>Loading mission details...</p>
    </div>
  `;
}

function renderDetailError(missionName) {
  if (!missionDetailPanelEl) {
    return;
  }

  missionDetailPanelEl.innerHTML = `
    <div class="mission-detail-panel__state">
      <h3>${escapeHtml(missionName)}</h3>
      <p>Mission details could not be loaded right now.</p>
    </div>
  `;
}

function renderLabeledList(items, emptyText) {
  if (!items.length) {
    return `<p class="mission-detail-panel__muted">${escapeHtml(emptyText)}</p>`;
  }

  return `
    <ul class="mission-detail-list">
      ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
    </ul>
  `;
}

function renderBriefings(entries) {
  if (!entries.length) {
    return `<p class="mission-detail-panel__muted">No briefing text available.</p>`;
  }

  return entries
    .map(
      (entry) => `
        <article class="mission-briefing-card">
          <h4>${escapeHtml(entry.label)}</h4>
          <p>${escapeHtml(entry.text)}</p>
        </article>
      `
    )
    .join("");
}

function renderGuide(detail) {
  const guideParagraphs = detail.guide.paragraphs
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");

  const galleryMarkup = detail.guide.galleryItems.length
    ? `
      <div class="mission-gallery">
        ${detail.guide.galleryItems
          .map(
            (item) => `
              <figure class="mission-gallery__item">
                <img src="${item.imageUrl}" alt="${escapeHtml(item.caption || detail.title)}" loading="lazy" />
                ${item.caption ? `<figcaption>${escapeHtml(item.caption)}</figcaption>` : ""}
              </figure>
            `
          )
          .join("")}
      </div>
    `
    : "";

  if (!guideParagraphs && !galleryMarkup) {
    return `<p class="mission-detail-panel__muted">No guide details available.</p>`;
  }

  return `${guideParagraphs}${galleryMarkup}`;
}

function renderMissionDetail(detail) {
  if (!missionDetailPanelEl) {
    return;
  }

  missionDetailPanelEl.innerHTML = `
    <article class="mission-detail-view">
      ${detail.bannerImage ? `<img class="mission-detail-view__banner" src="${detail.bannerImage}" alt="${escapeHtml(detail.title)} banner" loading="lazy" />` : ""}
      <div class="mission-detail-view__header">
        <div>
          <h3>${escapeHtml(detail.title)}</h3>
          <p>${escapeHtml(detail.vendor || "Unknown vendor")}</p>
        </div>
        ${detail.location ? `<span class="tag">${escapeHtml(detail.location)}</span>` : ""}
      </div>

      ${detail.next.length ? `
        <div class="mission-detail-meta">
          <strong>Next Missions</strong>
          <span>${escapeHtml(detail.next.join(", "))}</span>
        </div>
      ` : ""}

      <section class="mission-detail-section">
        <h4>Briefing</h4>
        ${renderBriefings(detail.briefing)}
      </section>

      <section class="mission-detail-section">
        <h4>Objectives</h4>
        ${renderLabeledList(detail.objectives, "No objectives listed.")}
      </section>

      <section class="mission-detail-section">
        <h4>Rewards</h4>
        ${renderLabeledList(detail.rewards, "No rewards listed.")}
      </section>

      <section class="mission-detail-section">
        <h4>Guide</h4>
        ${renderGuide(detail)}
      </section>
    </article>
  `;
}

async function loadMissionDetail(missionName) {
  selectedMissionName = missionName;
  renderMissions();

  if (missionDetailCache.has(missionName)) {
    renderMissionDetail(missionDetailCache.get(missionName));
    return;
  }

  const requestToken = ++detailRequestToken;
  renderDetailLoading(missionName);

  try {
    const response = await fetch(getMissionApiUrl(missionName));
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    const html = data?.parse?.text?.["*"];
    if (!html) {
      throw new Error("Mission detail payload was empty");
    }

    const detail = parseMissionDetailHtml(missionName, html);
    missionDetailCache.set(missionName, detail);

    if (requestToken !== detailRequestToken) {
      return;
    }

    renderMissionDetail(detail);
  } catch {
    if (requestToken !== detailRequestToken) {
      return;
    }

    renderDetailError(missionName);
  }
}

function getVisibleMissionNames(groups) {
  return groups.flatMap((giver) => giver.missions);
}

function getFilteredData(searchTerm) {
  const query = normalize(searchTerm || "");

  if (!query) {
    return missionGivers.filter((giver) => giver.id === activeGiverId);
  }

  return missionGivers
    .map((giver) => {
      const giverMatch = normalize(giver.name).includes(query);
      const missions = giver.missions.filter((mission) => normalize(mission).includes(query));

      if (!giverMatch && missions.length === 0) {
        return null;
      }

      return {
        ...giver,
        missions: giverMatch ? giver.missions : missions,
      };
    })
    .filter(Boolean);
}

function renderTabs() {
  if (!missionTabsEl) {
    return;
  }

  missionTabsEl.innerHTML = missionGivers
    .map((giver) => {
      const isCurrent = giver.id === activeGiverId;
      return `
        <button class="mission-tab ${isCurrent ? "is-current" : ""}" type="button" data-giver-id="${giver.id}">
          <img src="${giver.imageUrl}" alt="${escapeHtml(giver.name)} portrait" loading="lazy" />
          <span>${escapeHtml(giver.name)}</span>
        </button>
      `;
    })
    .join("");

  missionTabsEl.querySelectorAll(".mission-tab").forEach((button) => {
    button.addEventListener("click", () => {
      activeGiverId = button.dataset.giverId;
      renderTabs();
      renderMissions();
    });
  });
}

function renderGiverSection(giver) {
  const missionsMarkup = giver.missions
    .map(
      (mission) => `
        <li class="mission-card ${mission === selectedMissionName ? "is-selected" : ""}">
          <button class="mission-card__link" type="button" data-mission-name="${escapeHtml(mission)}">
            <strong>${escapeHtml(mission)}</strong>
            <span>Load mission details</span>
          </button>
        </li>
      `
    )
    .join("");

  return `
    <article class="panel mission-group">
      <div class="mission-group__head">
        <img src="${giver.imageUrl}" alt="${escapeHtml(giver.name)} portrait" loading="lazy" />
        <div>
          <h3>${escapeHtml(giver.name)}</h3>
          <p>${giver.missions.length} mission${giver.missions.length === 1 ? "" : "s"}</p>
        </div>
      </div>
      <ul class="mission-list">
        ${missionsMarkup}
      </ul>
    </article>
  `;
}

function renderMissions() {
  if (!missionResultsEl) {
    return;
  }

  const searchTerm = missionSearchEl?.value || "";
  const groups = getFilteredData(searchTerm);
  const totalMissions = groups.reduce((sum, giver) => sum + giver.missions.length, 0);

  if (missionCountEl) {
    missionCountEl.textContent = `${totalMissions} result${totalMissions === 1 ? "" : "s"}`;
  }

  if (groups.length === 0) {
    missionResultsEl.innerHTML = `
      <article class="panel">
        <p class="update-note">No missions matched that search. Try a different mission or giver name.</p>
      </article>
    `;

    if (missionDetailPanelEl) {
      missionDetailPanelEl.innerHTML = `
        <div class="mission-detail-panel__empty">
          <h3>No Mission Selected</h3>
          <p>Adjust the search or choose a different giver to load mission details.</p>
        </div>
      `;
    }

    return;
  }

  let missionToAutoLoad = "";
  const visibleMissionNames = getVisibleMissionNames(groups);
  if (!visibleMissionNames.includes(selectedMissionName)) {
    selectedMissionName = visibleMissionNames[0] || "";
    missionToAutoLoad = selectedMissionName;
  }

  missionResultsEl.innerHTML = groups.map(renderGiverSection).join("");

  missionResultsEl.querySelectorAll(".mission-card__link").forEach((button) => {
    button.addEventListener("click", () => {
      const missionName = button.dataset.missionName;
      if (!missionName) {
        return;
      }

      loadMissionDetail(missionName);
    });
  });

  if (missionToAutoLoad) {
    loadMissionDetail(missionToAutoLoad);
  }
}

function initMissions() {
  if (!missionTabsEl || !missionResultsEl || !missionSearchEl) {
    return;
  }

  renderTabs();
  renderMissions();

  missionSearchEl.addEventListener("input", () => {
    renderMissions();
  });
}

initMissions();
