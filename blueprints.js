const blueprintLocations = [
  {
    name: "DDM4 (Phantom Lance)",
    location: "Fort Narith",
    coords: "141, 131",
    danger: "High",
    missionTip:
      "Interact with the magazine to start the mission, collect the item, then return to base camp or outpost.",
    weaponPrice: "$17,000 from Gunny",
    ammoType: "5.56x45mm",
    extractionTip: "Complete mission turn-in, then claim your new weapon from Gunny.",
  },
  {
    name: "Buran's AK-74N",
    location: "Fort Narith",
    coords: "143, 129",
    danger: "High",
    missionTip: "Retrieve the flash drives and report back to Turncoat (x4).",
    weaponPrice: "N/A",
    ammoType: "5.45x39mm",
    extractionTip: "Complete all 4 hand-ins to Turncoat, then proceed with weapon unlock flow.",
  },
  {
    name: "MP7A2",
    location: "Ransacked Tourist Shelter",
    coords: "188, 131",
    danger: "High",
    missionTip:
      "Interact with the magazine to start the mission, collect the item, then return to base camp or outpost.",
    weaponPrice: "N/A",
    ammoType: "N/A",
    extractionTip: "Complete mission turn-in, then claim your new weapon from Gunny.",
  },
  {
    name: "AK-308",
    location: "Fort Narith",
    coords: "142, 130",
    danger: "High",
    missionTip:
      "Interact with the magazine to start the mission, collect the item, then return to Vulture Outpost.",
    weaponPrice: "$17,800",
    ammoType: "N/A",
    extractionTip: "Complete mission turn-in at Vulture Outpost, then claim your weapon.",
  },
  {
    name: "MCX",
    location: "Midnight Sapphire",
    coords: "171, 166",
    danger: "High",
    missionTip:
      "Interact with the magazine to start the mission, collect the item, then return to Banshee.",
    weaponPrice: "$13,200 from Banshee",
    ammoType: "N/A",
    extractionTip: "Complete mission turn-in with Banshee, then continue weapon unlock flow.",
  },
  {
    name: "MOSSBERG 590 (Raven Team)",
    location: "Remote Campsite",
    coords: "149, 111",
    danger: "High",
    missionTip:
      "Interact with the magazine to start the mission, collect the item, then return to Gunny.",
    weaponPrice: "N/A",
    ammoType: "N/A",
    extractionTip: "Complete mission turn-in with Gunny, then continue weapon unlock at Vendor.",
  },
];

const blueprintListEl = document.getElementById("blueprintList");
const blueprintPrevEl = document.getElementById("blueprintPrev");
const blueprintNextEl = document.getElementById("blueprintNext");

function renderBlueprints() {
  if (!blueprintListEl) {
    return;
  }

  blueprintListEl.innerHTML = blueprintLocations
    .map((bp) => {
      const coordsLine = bp.coords ? `<p><strong>Coords:</strong> ${bp.coords}</p>` : "";
      const missionLine = bp.missionTip ? `<p><strong>Mission:</strong> ${bp.missionTip}</p>` : "";
      const priceLine = bp.weaponPrice ? `<p><strong>Claim Price:</strong> ${bp.weaponPrice}</p>` : "";
      const ammoLine = bp.ammoType ? `<p><strong>Ammo Type:</strong> ${bp.ammoType}</p>` : "";

      return `
        <article class="list-item">
          <h3>${bp.name}</h3>
          <p><strong>Location:</strong> ${bp.location}</p>
          ${coordsLine}
          <p><strong>Danger:</strong> ${bp.danger}</p>
          ${missionLine}
          ${priceLine}
          ${ammoLine}
          <p><strong>Extraction:</strong> ${bp.extractionTip}</p>
        </article>
      `;
    })
    .join("");
}

function setupBlueprintCarousel() {
  if (!blueprintListEl || !blueprintPrevEl || !blueprintNextEl) {
    return;
  }

  const scrollAmount = () => Math.max(260, Math.floor(blueprintListEl.clientWidth * 0.8));

  blueprintPrevEl.addEventListener("click", () => {
    blueprintListEl.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
  });

  blueprintNextEl.addEventListener("click", () => {
    blueprintListEl.scrollBy({ left: scrollAmount(), behavior: "smooth" });
  });
}

function init() {
  renderBlueprints();
  setupBlueprintCarousel();
}

init();
