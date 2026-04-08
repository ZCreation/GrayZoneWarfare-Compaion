const weaponSelectEl = document.getElementById("weaponSelect");
const creatorViewEl = document.getElementById("creatorView");

const statMeta = [
  { key: "accuracyMoa",             label: "Accuracy",                  suffix: " MOA", isMoa: true },
  { key: "fireRatePercent",         label: "Fire Rate",                 suffix: "%" },
  { key: "recoilControl",           label: "Recoil Control",            suffix: "%" },
  { key: "muzzleDeviceEfficiency",  label: "Muzzle Device Efficiency",  suffix: "%" },
  { key: "muzzleVelocity",          label: "Muzzle Velocity",           suffix: "%" },
  { key: "ergonomics",              label: "Ergonomics",                suffix: "%" },
  { key: "reloadSpeed",             label: "Reload Speed",              suffix: "%" },
];

function formatNumber(value, decimals = 2) {
  return Number(value).toFixed(decimals);
}

function formatDelta(value) {
  if (value === 0 || value === undefined || value === null) {
    return `<span class="is-neutral">0%</span>`;
  }

  const isPositive = value > 0;
  const className = isPositive ? "is-positive" : "is-negative";
  const sign = isPositive ? "+" : "";

  return `<span class="${className}">${sign}${Number(value).toFixed(1)}%</span>`;
}

function getSelectedOption(slot) {
  return slot.options.find((option) => option.id === slot.selected) || slot.options[0];
}

function getWeaponById(id) {
  return weaponCreatorData.weapons.find((weapon) => weapon.id === id) || weaponCreatorData.weapons[0];
}

function calculateTotals(weapon) {
  const totals = { ...weapon.baseStats };

  weapon.slots.forEach((slot) => {
    const selected = getSelectedOption(slot);
    if (!selected || !selected.stats) {
      return;
    }

    Object.entries(selected.stats).forEach(([key, value]) => {
      if (typeof value !== "number") {
        return;
      }

      totals[key] = (totals[key] || 0) + value;
    });
  });

  return totals;
}

function renderStatRows(weapon, totals) {
  return statMeta
    .map(({ key, label, suffix }) => {
      const value = totals[key] ?? 0;

      if (key === "accuracyMoa") {
        return `
          <li>
            <span>${label}</span>
            <strong>${formatNumber(value)}${suffix}</strong>
          </li>
        `;
      }

      return `
        <li>
          <span>${label}</span>
          <strong>${formatDelta(value)}</strong>
        </li>
      `;
    })
    .join("");
}

function renderSlotCards(weapon) {
  return weapon.slots
    .map((slot) => {
      const selected = getSelectedOption(slot);
      const optionMarkup = slot.options
        .map((option) => {
          const isSelected = option.id === selected.id ? "selected" : "";
          return `<option value="${option.id}" ${isSelected}>${option.name}</option>`;
        })
        .join("");

      return `
        <article class="slot-card">
          <p class="slot-card__label">${slot.label}</p>
          <select class="slot-select" data-slot-id="${slot.id}">
            ${optionMarkup}
          </select>
        </article>
      `;
    })
    .join("");
}

function renderCreator(weaponId) {
  const weapon = getWeaponById(weaponId);
  const totals = calculateTotals(weapon);

  if (!creatorViewEl) {
    return;
  }

  creatorViewEl.innerHTML = `
    <section class="panel weapon-layout">
      <div class="weapon-topline">
        <div>
          <h2>${weapon.name} <span>${weapon.caliber}</span></h2>
          <p>${weapon.weaponType}</p>
        </div>
        <p class="weapon-weight">${formatNumber(totals.weightKg, 3)} kg</p>
      </div>

      <div class="weapon-preview">
        <img src="${weapon.imageUrl}" alt="${weapon.name} preview" />
        <p class="mag-count">${weapon.magStatus.current} / ${weapon.magStatus.max}</p>
      </div>

      <ul class="weapon-stats">
        ${renderStatRows(weapon, totals)}
      </ul>

      <div class="weapon-meta-grid">
        <p><strong>Weapon Type</strong><span>${weapon.weaponType}</span></p>
        <p><strong>Fire Mode</strong><span>${weapon.fireMode}</span></p>
        <p><strong>Fire Rate</strong><span>${weapon.baseStats.fireRateRpm} rpm</span></p>
        <p><strong>Manufacturer</strong><span>${weapon.manufacturer}</span></p>
      </div>

      <div class="slot-grid">
        ${renderSlotCards(weapon)}
      </div>

      <p class="weapon-description">${weapon.description}</p>
    </section>
  `;

  creatorViewEl.querySelectorAll(".slot-select").forEach((select) => {
    select.addEventListener("change", (event) => {
      const slotId = event.target.dataset.slotId;
      const nextValue = event.target.value;
      const slot = weapon.slots.find((entry) => entry.id === slotId);

      if (!slot) {
        return;
      }

      slot.selected = nextValue;
      renderCreator(weapon.id);
    });
  });
}

function initCreator() {
  if (!weaponSelectEl || !creatorViewEl) {
    return;
  }

  weaponCreatorData.weapons.forEach((weapon) => {
    const option = document.createElement("option");
    option.value = weapon.id;
    option.textContent = `${weapon.name} (${weapon.caliber})`;
    weaponSelectEl.append(option);
  });

  weaponSelectEl.selectedIndex = 0;
  renderCreator(weaponSelectEl.value);

  weaponSelectEl.addEventListener("change", () => {
    renderCreator(weaponSelectEl.value);
  });
}

initCreator();
