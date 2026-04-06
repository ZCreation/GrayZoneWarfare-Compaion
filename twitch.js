async function fetchTopStreamers() {
  const container = document.getElementById("streamers-container");
  const directoryUrl = "https://www.twitch.tv/directory/category/gray-zone-warfare?sort=VIEWER_COUNT";

  try {
    const response = await window.grayZoneApp?.getTopTwitchStreams?.();
    const topStreamers = response?.ok ? response.streams || [] : [];

    if (topStreamers.length === 0) {
      container.innerHTML = `
        <p class="error">No live Gray Zone streams were found.</p>
        <p class="loading"><a href="${directoryUrl}" target="_blank" rel="noopener noreferrer">Open the full Twitch directory</a></p>
      `;
      return;
    }

    container.innerHTML = topStreamers.map((streamer, index) => `
      <article class="streamer-card">
        <div class="streamer-rank">#${index + 1}</div>
        <a href="${streamer.url}" target="_blank" rel="noopener noreferrer" class="streamer-link">
          <img src="${streamer.avatar}" alt="${streamer.name}" class="streamer-avatar" />
          <div class="streamer-info">
            <h3>${streamer.name}</h3>
            <p class="streamer-viewer-count">${formatViewCount(streamer.viewers)} viewers</p>
            <p class="streamer-game">${streamer.title || "Live on Gray Zone Warfare"}</p>
          </div>
          <div class="streamer-action">Open Stream</div>
        </a>
      </article>
    `).join("");
  } catch (error) {
    console.error("Error fetching streamers:", error);
    container.innerHTML = `
      <p class="error">Failed to load Twitch streams.</p>
      <p class="loading"><a href="${directoryUrl}" target="_blank" rel="noopener noreferrer">Open the full Twitch directory</a></p>
    `;
  }
}

function formatViewCount(count) {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + "M";
  }
  if (count >= 1000) {
    return (count / 1000).toFixed(1) + "K";
  }
  return count.toString();
}

document.addEventListener("DOMContentLoaded", fetchTopStreamers);
