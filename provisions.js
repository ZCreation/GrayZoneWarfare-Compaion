const provisionsItemsData =
  typeof provisionsItems !== "undefined" && Array.isArray(provisionsItems)
    ? provisionsItems
    : [];

const provisionsSearchEl = document.getElementById("provisionsSearch");
const provisionsSortEl = document.getElementById("provisionsSort");
const provisionsTableBodyEl = document.getElementById("provisionsTableBody");

function formatProvisionValue(value) {
  return typeof value === "number" ? `${value}` : "N/A";
}

function compareProvisionStatAsc(a, b, key) {
  const valueA = typeof a[key] === "number" ? a[key] : Number.POSITIVE_INFINITY;
  const valueB = typeof b[key] === "number" ? b[key] : Number.POSITIVE_INFINITY;

  if (valueA !== valueB) {
    return valueA - valueB;
  }

  return a.name.localeCompare(b.name);
}

function renderProvisionItemCell(entry) {
  const imageMarkup = entry.image
    ? `<img class="loot-thumb" src="${entry.image}" alt="${entry.name}" loading="lazy" referrerpolicy="no-referrer" />`
    : '<div class="loot-thumb loot-thumb--empty" aria-hidden="true">N/A</div>';

  return `
    <div class="loot-item-cell">
      ${imageMarkup}
      <span>${entry.name}</span>
    </div>
  `;
}

function renderProvisionsTable() {
  if (!provisionsTableBodyEl || !provisionsSortEl) {
    return;
  }

  const query = (provisionsSearchEl?.value || "").trim().toLowerCase();
  const sortBy = provisionsSortEl.value;
  const sortedItems = provisionsItemsData.filter((entry) =>
    entry.name.toLowerCase().includes(query),
  );

  if (sortBy === "hydrationAsc") {
    sortedItems.sort((a, b) => compareProvisionStatAsc(a, b, "hydration"));
  } else if (sortBy === "energyAsc") {
    sortedItems.sort((a, b) => compareProvisionStatAsc(a, b, "energy"));
  } else {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  }

  const rows = sortedItems
    .map(
      (entry) => `
        <tr>
          <td data-label="Item">${renderProvisionItemCell(entry)}</td>
          <td data-label="Type">${entry.type || "Unknown"}</td>
          <td data-label="Hydration">${formatProvisionValue(entry.hydration)}</td>
          <td data-label="Energy">${formatProvisionValue(entry.energy)}</td>
          <td data-label="Where to Get">${entry.source || "Unknown"}</td>
        </tr>
      `,
    )
    .join("");

  provisionsTableBodyEl.innerHTML =
    rows ||
    '<tr><td colspan="5">No provisions available right now.</td></tr>';
}

function init() {
  renderProvisionsTable();
  provisionsSortEl?.addEventListener("change", renderProvisionsTable);
  provisionsSearchEl?.addEventListener("input", renderProvisionsTable);
}

init();
