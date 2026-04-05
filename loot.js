const lootItemsData =
  typeof lootItems !== "undefined" && Array.isArray(lootItems) ? lootItems : [];

const vendorFilterEl = document.getElementById("vendorFilter");
const itemSearchEl = document.getElementById("itemSearch");
const sortByEl = document.getElementById("sortBy");
const lootTableBodyEl = document.getElementById("lootTableBody");

const sellers = [...new Set(lootItemsData.map((entry) => entry.preferredSeller))].sort();

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

  if (sortBy === "baseValueAsc" || sortBy === "baseValue") {
    const valueA = typeof a.baseValue === "number" ? a.baseValue : Number.POSITIVE_INFINITY;
    const valueB = typeof b.baseValue === "number" ? b.baseValue : Number.POSITIVE_INFINITY;
    return valueA - valueB;
  }

  if (sortBy === "baseValueDesc") {
    const valueA = typeof a.baseValue === "number" ? a.baseValue : Number.NEGATIVE_INFINITY;
    const valueB = typeof b.baseValue === "number" ? b.baseValue : Number.NEGATIVE_INFINITY;
    return valueB - valueA;
  }

  return String(a[sortBy]).localeCompare(String(b[sortBy]));
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
  if (!lootTableBodyEl || !itemSearchEl || !vendorFilterEl || !sortByEl) {
    return;
  }

  const query = itemSearchEl.value.trim().toLowerCase();
  const preferredSeller = vendorFilterEl.value;
  const sortBy = sortByEl.value;

  const rows = lootItemsData
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
  if (!vendorFilterEl) {
    return;
  }

  sellers.forEach((seller) => {
    const option = document.createElement("option");
    option.value = seller;
    option.textContent = seller;
    vendorFilterEl.append(option);
  });
}

function init() {
  setupVendorFilter();
  renderLootTable();

  itemSearchEl?.addEventListener("input", renderLootTable);
  vendorFilterEl?.addEventListener("change", renderLootTable);
  sortByEl?.addEventListener("change", renderLootTable);
}

init();
