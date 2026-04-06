const vultureWeeks = {
  "Current Rotation": [
    {
      zone: "BRONCO",
      coords: "142, 134",
      note: "Active vulture location this week. Sweep outer structures first, then center areas.",
      risk: "Low",
    },
    {
      zone: "HARRISON",
      coords: "197, 125",
      note: "Active vulture location this week. Check hidden corners and lockable loot rooms.",
      risk: "High",
    },
  ],
};

const vultureCardsEl = document.getElementById("vultureCards");
const resetCountdownEl = document.getElementById("resetCountdown");

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

function renderVultureCards() {
  if (!vultureCardsEl) {
    return;
  }

  const locations = vultureWeeks["Current Rotation"] || [];

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

function init() {
  renderVultureCards();
  startResetCountdown();
}

init();
