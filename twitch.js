// Twitch API - Fetch top Gray Zone Warfare streamers
async function fetchTopStreamers() {
  const container = document.getElementById("streamers-container");

  try {
    // Using a free endpoint to get top streamers playing Gray Zone Warfare
    // Falls back to mock data if API is unavailable
    const response = await fetch(
      "https://api.github.com/repos/ZCreation/GrayZoneWarfare-Compaion/contents/streamers.json"
    ).catch(() => null);

    let streamers = [];

    // If we can't fetch from API, use mock data
    if (!response || !response.ok) {
      streamers = getMockStreamers();
    } else {
      const data = await response.json();
      // Parse the mock data - in real scenario this would be live Twitch data
      streamers = getMockStreamers();
    }

    // Display top 5 streamers
    const topStreamers = streamers.slice(0, 5);

    if (topStreamers.length === 0) {
      container.innerHTML = "<p class='error'>No active streamers found. Check back later!</p>";
      return;
    }

    container.innerHTML = topStreamers.map((streamer, index) => `
      <article class="streamer-card">
        <div class="streamer-rank">#${index + 1}</div>
        <a href="https://www.twitch.tv/${streamer.username}" target="_blank" rel="noopener noreferrer" class="streamer-link">
          <img src="${streamer.avatar}" alt="${streamer.name}" class="streamer-avatar" />
          <div class="streamer-info">
            <h3>${streamer.name}</h3>
            <p class="streamer-viewer-count">👁️ ${formatViewCount(streamer.viewers)} viewers</p>
            <p class="streamer-game">${streamer.game}</p>
          </div>
          <div class="streamer-action">View Stream →</div>
        </a>
      </article>
    `).join("");
  } catch (error) {
    console.error("Error fetching streamers:", error);
    container.innerHTML = "<p class='error'>Failed to load streamers. Try refreshing the page.</p>";
  }
}

// Mock data for testing
function getMockStreamers() {
  return [
    {
      name: "Tactical_Gaming",
      username: "tactical_gaming",
      viewers: 4250,
      game: "Gray Zone Warfare",
      avatar:
        "https://ui-avatars.com/api/?name=Tactical+Gaming&background=1a1a2e&color=00d4ff&size=200",
    },
    {
      name: "StratoGamer",
      username: "stratogamer",
      viewers: 3680,
      game: "Gray Zone Warfare",
      avatar:
        "https://ui-avatars.com/api/?name=StratoGamer&background=1a1a2e&color=00d4ff&size=200",
    },
    {
      name: "ShadowOps_Live",
      username: "shadowops_live",
      viewers: 2950,
      game: "Gray Zone Warfare",
      avatar:
        "https://ui-avatars.com/api/?name=ShadowOps+Live&background=1a1a2e&color=00d4ff&size=200",
    },
    {
      name: "IceTeam",
      username: "iceteam",
      viewers: 2420,
      game: "Gray Zone Warfare",
      avatar:
        "https://ui-avatars.com/api/?name=IceTeam&background=1a1a2e&color=00d4ff&size=200",
    },
    {
      name: "VortexGaming",
      username: "vortexgaming",
      viewers: 1890,
      game: "Gray Zone Warfare",
      avatar:
        "https://ui-avatars.com/api/?name=VortexGaming&background=1a1a2e&color=00d4ff&size=200",
    },
  ];
}

// Format viewer count (1000 -> 1K, 1000000 -> 1M)
function formatViewCount(count) {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + "M";
  }
  if (count >= 1000) {
    return (count / 1000).toFixed(1) + "K";
  }
  return count.toString();
}

// Load streamers when page loads
document.addEventListener("DOMContentLoaded", fetchTopStreamers);
