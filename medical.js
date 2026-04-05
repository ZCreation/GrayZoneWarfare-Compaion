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

const conditionSelectEl = document.getElementById("conditionSelect");
const medicalGuideEl = document.getElementById("medicalGuide");

function setupMedicalSelector() {
  if (!conditionSelectEl) {
    return;
  }

  Object.keys(medicalSituations).forEach((condition) => {
    const option = document.createElement("option");
    option.value = condition;
    option.textContent = condition;
    conditionSelectEl.append(option);
  });
}

function renderMedicalGuide() {
  if (!conditionSelectEl || !medicalGuideEl) {
    return;
  }

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
  setupMedicalSelector();

  if (conditionSelectEl) {
    conditionSelectEl.selectedIndex = 0;
  }

  renderMedicalGuide();
  conditionSelectEl?.addEventListener("change", renderMedicalGuide);
}

init();
