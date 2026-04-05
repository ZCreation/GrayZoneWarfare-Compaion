if (!Array.isArray(lootItems)) {
  throw new Error("lootData.js did not load correctly.");
}

const vultureWeeks = {
  "Current Rotation": [
    {
      zone: "TITAN",
      coords: "153, 121",
      note: "Active vulture location this week. Sweep outer structures first, then center areas.",
      risk: "Low",
    },
    {
      zone: "WINCHESTER",
      coords: "202, 148",
      note: "Active vulture location this week. Check hidden corners and lockable loot rooms.",
      risk: "High",
    },
  ],
};

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
    extractionTip: "Complete mission turn-in at Vulture Outpost, then claim your weapon.",
  },
];

const medicalSituations = {
  "Light Bleeding": {
    identify: ["Bloodied vision", "Slow blood drain", "Status shows Light Bleeding"],
    likelyCause: "Light wounds",
    treatment: [
      "Move to cover.",
      "Use bandage on wounded body part.",
      "If multiple wounds stack bleed, use a tourniquet first then patch wounds.",
    ],
  },
  "Medium Bleeding": {
    identify: ["Bloodied vision", "Noticeable blood drain", "Status shows Medium Bleeding"],
    likelyCause: "Medium wound or multiple light wounds",
    treatment: [
      "Apply tourniquet immediately to stop active bleed.",
      "After stabilizing, treat wounds with bandages.",
      "Monitor blood level and restore with blood bag if needed.",
    ],
  },
  "Severe Bleeding": {
    identify: ["Heavy bloodied vision", "Very fast blood drain", "Risk of coma"],
    likelyCause: "Severe wound or many stacked wounds",
    treatment: [
      "Tourniquet first, no delay.",
      "Treat wound sources after bleed is stopped.",
      "Use blood bag if blood pool is critically low.",
      "Extract if vital organs are also damaged.",
    ],
  },
  Limping: {
    identify: ["Cannot sprint/jump", "Leg mobility penalty", "Status shows Limping"],
    likelyCause: "Leg bone destruction",
    treatment: [
      "Apply splint to damaged leg.",
      "Use painkillers only as support, not as a full fix.",
      "Reduce movement exposure until leg status is restored.",
    ],
  },
  Coughing: {
    identify: ["Audible coughing", "Breathing issues", "Status shows Coughing"],
    likelyCause: "Lung damage",
    treatment: [
      "Use surgery kit to restore lung damage.",
      "Avoid long sprints and breath-hold actions until stable.",
      "If combat pressure is high, regroup and heal before re-engage.",
    ],
  },
  Nauseous: {
    identify: ["Hazy/double vision", "Nausea status", "Often paired with organ/radiation issues"],
    likelyCause: "Liver damage, radiation, or intoxication",
    treatment: [
      "If liver/organ damage exists, use surgery kit.",
      "Treat radiation/intoxication with the appropriate pills.",
      "Recheck panel after treatment to confirm status clears.",
    ],
  },
  Dehydrated: {
    identify: ["Hazy/double vision", "Hydration critically low", "Status shows Dehydrated"],
    likelyCause: "Hydration at critical level",
    treatment: [
      "Consume water/electrolyte items immediately.",
      "Pause sprinting until hydration recovers.",
      "Keep hydration above 50% to maintain blood regeneration.",
    ],
  },
  Starving: {
    identify: ["Hazy/double vision", "Energy critically low", "Status shows Starving"],
    likelyCause: "Energy at critical level",
    treatment: [
      "Consume food immediately.",
      "Keep energy above 50% to allow blood regeneration.",
      "Pair food with hydration if both pools are low.",
    ],
  },
  Dazed: {
    identify: ["Hazy/double vision", "Status shows Dazed"],
    likelyCause: "Brain damage",
    treatment: [
      "Use surgery kit to restore brain damage.",
      "Take cover until vision and control normalize.",
      "Avoid pushing open fights while dazed is active.",
    ],
  },
  "Hurt / In Pain / Suffering": {
    identify: ["Heartbeat/breathing audio", "Groaning", "Pain status escalates with more injuries"],
    likelyCause: "Wounds, bruises, organ damage, or bone damage",
    treatment: [
      "Treat root causes first: bleeding, fractures, organ damage.",
      "Use painkillers to reduce symptoms while you stabilize.",
      "Re-check all limbs and organs for missed damage markers.",
    ],
  },
  Coma: {
    identify: ["Loss of control and collapse", "Teammate sees coma state", "Bleed-out timer active"],
    likelyCause: "Major blood loss or severe organ destruction",
    treatment: [
      "Teammate must treat underlying cause quickly.",
      "Prioritize stopping bleed and restoring critical organ state.",
      "If recoverable, stabilize and extract immediately.",
    ],
  },
};

const vendorFilterEl = document.getElementById("vendorFilter");
const itemSearchEl = document.getElementById("itemSearch");
const sortByEl = document.getElementById("sortBy");
const lootTableBodyEl = document.getElementById("lootTableBody");
const weekSelectEl = document.getElementById("weekSelect");
const vultureCardsEl = document.getElementById("vultureCards");
const resetCountdownEl = document.getElementById("resetCountdown");
const blueprintListEl = document.getElementById("blueprintList");
const conditionSelectEl = document.getElementById("conditionSelect");
const medicalGuideEl = document.getElementById("medicalGuide");

const sellers = [...new Set(lootItems.map((entry) => entry.preferredSeller))].sort();

function formatCash(value) {
  return `$${value.toLocaleString()}`;
}

function parseWeightKg(weight) {
  const numeric = Number.parseFloat(String(weight).replace("kg", "").trim());
  return Number.isFinite(numeric) ? numeric : Number.POSITIVE_INFINITY;
}

function compareEntries(a, b, sortBy) {
  if (sortBy === "weight") {
    return parseWeightKg(a.weight) - parseWeightKg(b.weight);
  }

  if (sortBy === "baseValue") {
    const valueA = typeof a.baseValue === "number" ? a.baseValue : Number.POSITIVE_INFINITY;
    const valueB = typeof b.baseValue === "number" ? b.baseValue : Number.POSITIVE_INFINITY;
    return valueA - valueB;
  }

  return String(a[sortBy]).localeCompare(String(b[sortBy]));
}

function getTimeZoneParts(date, timeZone) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    weekday: "short",
    hourCycle: "h23",
  });

  const parts = formatter.formatToParts(date);
  const value = (type) => parts.find((part) => part.type === type)?.value;

  return {
    year: Number.parseInt(value("year"), 10),
    month: Number.parseInt(value("month"), 10),
    day: Number.parseInt(value("day"), 10),
    hour: Number.parseInt(value("hour"), 10),
    minute: Number.parseInt(value("minute"), 10),
    second: Number.parseInt(value("second"), 10),
    weekday: value("weekday"),
  };
}

function makeDateInTimeZone(timeZone, year, month, day, hour, minute, second) {
  const utcGuess = new Date(Date.UTC(year, month - 1, day, hour, minute, second));
  const guessParts = getTimeZoneParts(utcGuess, timeZone);

  const desiredAsUtc = Date.UTC(year, month - 1, day, hour, minute, second);
  const guessAsUtc = Date.UTC(
    guessParts.year,
    guessParts.month - 1,
    guessParts.day,
    guessParts.hour,
    guessParts.minute,
    guessParts.second,
  );

  return new Date(utcGuess.getTime() + (desiredAsUtc - guessAsUtc));
}

function getNextMondayResetEdt() {
  const now = new Date();
  const ny = getTimeZoneParts(now, "America/New_York");
  const weekdays = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  const dayIndex = weekdays[ny.weekday] ?? 0;

  let daysUntilMonday = (1 - dayIndex + 7) % 7;
  const passedResetToday =
    dayIndex === 1 && (ny.hour > 8 || (ny.hour === 8 && (ny.minute > 0 || ny.second > 0)));

  if (daysUntilMonday === 0 && passedResetToday) {
    daysUntilMonday = 7;
  }

  const baseDate = new Date(Date.UTC(ny.year, ny.month - 1, ny.day));
  baseDate.setUTCDate(baseDate.getUTCDate() + daysUntilMonday);

  return makeDateInTimeZone(
    "America/New_York",
    baseDate.getUTCFullYear(),
    baseDate.getUTCMonth() + 1,
    baseDate.getUTCDate(),
    8,
    0,
    0,
  );
}

function formatCountdown(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function updateResetCountdown() {
  if (!resetCountdownEl) {
    return;
  }

  const nextReset = getNextMondayResetEdt();
  const diff = nextReset.getTime() - Date.now();

  if (diff <= 0) {
    resetCountdownEl.textContent = "Reset happening now";
    return;
  }

  resetCountdownEl.textContent = `Next reset in ${formatCountdown(diff)}`;
}

function startResetCountdown() {
  updateResetCountdown();
  setInterval(updateResetCountdown, 1000);
}

function renderLootItemCell(entry) {
  const imageMarkup = entry.image
    ? `<img class="loot-thumb" src="${entry.image}" alt="${entry.item}" loading="lazy" referrerpolicy="no-referrer" />`
    : '<div class="loot-thumb loot-thumb--empty" aria-hidden="true">N/A</div>';

  return `
    <div class="loot-item-cell">
      ${imageMarkup}
      <span>${entry.item}</span>
    </div>
  `;
}

function renderLootTable() {
  const query = itemSearchEl.value.trim().toLowerCase();
  const preferredSeller = vendorFilterEl.value;
  const sortBy = sortByEl.value;

  const rows = lootItems
    .filter((entry) => {
      const passesSearch = entry.item.toLowerCase().includes(query);
      const passesSeller =
        preferredSeller === "all" || entry.preferredSeller === preferredSeller;
      return passesSearch && passesSeller;
    })
    .sort((a, b) => compareEntries(a, b, sortBy))
    .map((entry) => {
      const baseValueLabel =
        typeof entry.baseValue === "number" ? formatCash(entry.baseValue) : "Unknown";
      return `
        <tr>
          <td data-label="Item">${renderLootItemCell(entry)}</td>
          <td data-label="Category">${entry.category}</td>
          <td data-label="Weight">${entry.weight}</td>
          <td data-label="Base Value">${baseValueLabel}</td>
          <td data-label="Preferred Seller"><strong>${entry.preferredSeller}</strong></td>
        </tr>
      `;
    })
    .join("");

  lootTableBodyEl.innerHTML =
    rows ||
    '<tr><td colspan="5">No items match your filter. Try a broader search.</td></tr>';
}

function setupVendorFilter() {
  sellers.forEach((seller) => {
    const option = document.createElement("option");
    option.value = seller;
    option.textContent = seller;
    vendorFilterEl.append(option);
  });
}

function setupWeekFilter() {
  Object.keys(vultureWeeks).forEach((week) => {
    const option = document.createElement("option");
    option.value = week;
    option.textContent = week;
    weekSelectEl.append(option);
  });
}

function renderVultureCards() {
  const currentWeek = weekSelectEl.value;
  const locations = vultureWeeks[currentWeek] || [];

  vultureCardsEl.innerHTML = locations
    .map(
      (spot) => `
        <article class="card">
          <h3>${spot.zone}</h3>
          <p><strong>Coords:</strong> ${spot.coords}</p>
          <p>${spot.note}</p>
          <span class="tag">Risk: ${spot.risk}</span>
        </article>
      `,
    )
    .join("");
}

function renderBlueprints() {
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

function setupMedicalSelector() {
  Object.keys(medicalSituations).forEach((condition) => {
    const option = document.createElement("option");
    option.value = condition;
    option.textContent = condition;
    conditionSelectEl.append(option);
  });
}

function renderMedicalGuide() {
  const key = conditionSelectEl.value;
  const situation = medicalSituations[key];

  if (!situation) {
    medicalGuideEl.innerHTML = "";
    return;
  }

  const identifyHtml = situation.identify
    .map((symptom) => `<li>${symptom}</li>`)
    .join("");
  const treatmentHtml = situation.treatment
    .map((step) => `<li>${step}</li>`)
    .join("");

  medicalGuideEl.innerHTML = `
    <h3>${key}</h3>
    <p><strong>Likely Cause:</strong> ${situation.likelyCause}</p>
    <p><strong>How to Identify It:</strong></p>
    <ul>${identifyHtml}</ul>
    <p><strong>How to Deal With It:</strong></p>
    <ol>${treatmentHtml}</ol>
  `;
}

function init() {
  setupVendorFilter();
  setupWeekFilter();
  setupMedicalSelector();

  weekSelectEl.selectedIndex = 0;
  conditionSelectEl.selectedIndex = 0;

  renderLootTable();
  renderVultureCards();
  renderBlueprints();
  renderMedicalGuide();
  startResetCountdown();

  itemSearchEl.addEventListener("input", renderLootTable);
  vendorFilterEl.addEventListener("change", renderLootTable);
  sortByEl.addEventListener("change", renderLootTable);
  weekSelectEl.addEventListener("change", renderVultureCards);
  conditionSelectEl.addEventListener("change", renderMedicalGuide);
}

init();
