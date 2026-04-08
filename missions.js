const missionTabsEl = document.getElementById("missionTabs");
const missionSearchEl = document.getElementById("missionSearch");
const missionResultsEl = document.getElementById("missionResults");
const missionCountEl = document.getElementById("missionCount");

let activeGiverId = missionGivers[0]?.id || "handshake";

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
        <li class="mission-card">
          <strong>${escapeHtml(mission)}</strong>
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
    return;
  }

  missionResultsEl.innerHTML = groups.map(renderGiverSection).join("");
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
