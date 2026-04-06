const directoryUrl = "https://www.twitch.tv/directory/category/gray-zone-warfare?sort=VIEWER_COUNT";

function formatViewCount(count) {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M viewers`;
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K viewers`;
  }
  return `${count} viewers`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function createStreamCard(stream, rankLabel) {
  const safeName = escapeHtml(stream.name);
  const safeTitle = escapeHtml(stream.title || "Live on Gray Zone Warfare");
  const safeAvatar = escapeHtml(stream.avatar || "assets/gray-zone-logo.png");
  const safeUrl = escapeHtml(stream.url || directoryUrl);

  return `
    <article class="streamer-card">
      ${rankLabel ? `<div class="streamer-rank">${rankLabel}</div>` : ""}
      <a href="${safeUrl}" target="_blank" rel="noopener noreferrer" class="streamer-link">
        <img src="${safeAvatar}" alt="${safeName}" class="streamer-avatar" />
        <div class="streamer-info">
          <h3>${safeName}</h3>
          <p class="streamer-viewer-count">${formatViewCount(stream.viewers)}</p>
          <p class="streamer-title" title="${safeTitle}">${safeTitle}</p>
        </div>
        <div class="streamer-action">Open</div>
      </a>
    </article>
  `;
}

function renderStreamGroup(container, streams, options = {}) {
  const { showRank = false, emptyMessage } = options;

  if (!Array.isArray(streams) || streams.length === 0) {
    container.innerHTML = `<p class="empty-state">${escapeHtml(emptyMessage || "No streams found.")}</p>`;
    return;
  }

  container.innerHTML = streams
    .map((stream, index) => createStreamCard(stream, showRank ? `#${index + 1}` : ""))
    .join("");
}

async function fetchStreams() {
  const featuredContainer = document.getElementById("featured-streams");
  const lowerContainer = document.getElementById("lower-streams");

  try {
    const response = await window.grayZoneApp?.getTwitchStreamGroups?.();

    if (!response?.ok) {
      throw new Error(response?.message || "Could not load Twitch streams.");
    }

    renderStreamGroup(featuredContainer, response.featured, {
      showRank: true,
      emptyMessage: "No live Gray Zone streams were found.",
    });

    renderStreamGroup(lowerContainer, response.lowerViewer, {
      emptyMessage: "No live Gray Zone streams under 20 viewers were found right now.",
    });
  } catch (error) {
    console.error("Failed to load Twitch streams:", error);

    const errorMarkup = `
      <p class="error">Failed to load Twitch streams.</p>
      <p class="loading"><a href="${directoryUrl}" target="_blank" rel="noopener noreferrer">Open the Twitch directory instead</a></p>
    `;

    featuredContainer.innerHTML = errorMarkup;
    lowerContainer.innerHTML = errorMarkup;
  }
}

document.addEventListener("DOMContentLoaded", fetchStreams);
