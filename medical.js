const medicalSituations = {
  // --- BLEEDING ---
  "Light Bleeding": {
    identify: [
      "Bloodied vision",
      "Slow blood drain",
      "Status shows Light Bleeding",
    ],
    likelyCause: "Light wounds from projectile or melee hits",
    treatment: [
      "Move to cover.",
      "Apply a bandage to the wounded body part.",
      "If multiple bleeds are stacking, apply a tourniquet first, then patch wounds.",
    ],
  },
  "Medium Bleeding": {
    identify: [
      "Bloodied vision",
      "Noticeable blood drain",
      "Status shows Medium Bleeding",
    ],
    likelyCause: "Medium wound or multiple stacked light wounds",
    treatment: [
      "Apply tourniquet immediately to stop active bleed.",
      "After stabilizing, treat all wounds with bandages.",
      "Monitor blood level and use a blood bag if critically low.",
    ],
  },
  "Severe Bleeding": {
    identify: [
      "Heavy bloodied vision",
      "Very fast blood drain",
      "Risk of entering coma",
    ],
    likelyCause: "Severe wound or many stacked medium and light wounds",
    treatment: [
      "Tourniquet first — no delay.",
      "Treat wound sources after bleed is stopped.",
      "Use a blood bag if blood pool is critically low.",
      "Extract if vital organs are also damaged.",
    ],
  },

  // --- VISION ---
  "Dizzy": {
    identify: [
      "Hazy/double vision",
      "Dizzy icon active",
    ],
    likelyCause: "Light blood loss, dehydration, or starvation",
    treatment: [
      "Identify the root cause: blood loss, hydration, or energy.",
      "Use a blood bag to restore blood if bleeding was the cause.",
      "Eat and drink to bring hydration and energy above 50%.",
    ],
  },
  "Confused": {
    identify: [
      "Hazy/double vision",
      "Confused icon active",
    ],
    likelyCause: "Moderate blood loss",
    treatment: [
      "Stop any active bleeding immediately with a tourniquet.",
      "Use a blood bag to replenish lost blood.",
      "Move to cover and stabilize before continuing.",
    ],
  },
  "Disorientated": {
    identify: [
      "Hazy/double vision",
      "Disorientated icon active",
      "Severe visual impairment",
    ],
    likelyCause: "Immense blood loss",
    treatment: [
      "Emergency tourniquet application required immediately.",
      "Use a blood bag — immense blood loss is critical.",
      "This is life-threatening; extract or have a teammate assist.",
    ],
  },
  "Dazed": {
    identify: [
      "Hazy/double vision",
      "Status shows Dazed",
    ],
    likelyCause: "Brain damage",
    treatment: [
      "Use a surgery kit to restore brain damage.",
      "Take cover until vision and control normalize.",
      "Avoid open fights while dazed is active.",
    ],
  },
  "Nauseous": {
    identify: [
      "Hazy/double vision",
      "Nausea status active",
      "Often paired with organ or radiation issues",
    ],
    likelyCause: "Liver damage, radiation exposure, or intoxication",
    treatment: [
      "If liver damage is present, use a surgery kit — this is the most likely cause.",
      "Treat radiation with radiation pills.",
      "Treat intoxication with the appropriate pills.",
    ],
  },

  // --- PAIN & DISCOMFORT ---
  "Hurt / In Pain / Suffering": {
    identify: [
      "Audible heartbeat/breathing",
      "Groaning sounds",
      "Pain status escalates with more injuries",
    ],
    likelyCause: "Wounds, bruises, organ damage, or bone damage",
    treatment: [
      "Treat root causes first: bleeding, fractures, organ damage.",
      "Use painkillers to reduce symptoms while stabilizing.",
      "Re-check all limbs and organs for missed damage markers.",
    ],
  },
  "Tremors": {
    identify: [
      "Visible weapon shake",
      "Tremor status icon active",
    ],
    likelyCause: "Being dazed, suffering from many injuries, or arm bone destruction",
    treatment: [
      "If brain damage is causing it, use a surgery kit.",
      "If arm bones are broken, apply a splint.",
      "Use painkillers to temporarily reduce pain-related tremors.",
    ],
  },
  "Upset Stomach": {
    identify: [
      "Audible groaning",
      "Upset Stomach status active",
    ],
    likelyCause: "Organ damage",
    treatment: [
      "Use a surgery kit to address the organ damage.",
      "Check the health panel to identify which organ is affected.",
      "Do not ignore — organ damage can escalate quickly.",
    ],
  },

  // --- MOVEMENT ---
  "Limping": {
    identify: [
      "Cannot sprint or jump",
      "Leg mobility penalty",
      "Status shows Limping",
    ],
    likelyCause: "Leg bone destruction",
    treatment: [
      "Apply a splint to the damaged leg.",
      "Use painkillers only as support — they do not fix the fracture.",
      "Reduce movement exposure until leg status is restored.",
    ],
  },
  "Encumbered": {
    identify: [
      "Encumbered icon active",
      "Cannot sprint or jump",
      "Slower ADS speed",
      "Reduced leg stamina regeneration",
    ],
    likelyCause: "Carrying 54kg or more total weight",
    treatment: [
      "Drop non-essential gear to bring carry weight below 54kg.",
      "Prioritize high-value items and leave the rest.",
      "Check carry weight in inventory before looting to avoid the threshold.",
    ],
  },
  "Fatigued": {
    identify: [
      "Audible heartbeat/breathing",
      "Leg stamina below 40%",
      "Slowed leg stamina regeneration",
    ],
    likelyCause: "Leg stamina dropped below 40%",
    treatment: [
      "Stop sprinting and allow leg stamina to recover.",
      "Crouch or stay still to speed up recovery.",
      "Treat any leg injuries to restore maximum stamina capacity.",
    ],
  },
  "Exhausted": {
    identify: [
      "Audible heartbeat/breathing",
      "Visible weapon shake",
      "Cannot sprint, jump, or vault",
      "Leg stamina critically at 1%",
    ],
    likelyCause: "Leg stamina critically depleted to 1%",
    treatment: [
      "Stop all movement immediately and rest.",
      "Do not sprint, jump, or vault until stamina recovers.",
      "Treat leg injuries to restore the stamina cap.",
    ],
  },

  // --- ARMS & BREATHING ---
  "Sore Arms": {
    identify: [
      "Increased weapon sway",
      "Arm stamina below 40%",
    ],
    likelyCause: "Arm stamina dropped below 40%",
    treatment: [
      "Lower your weapon and stop aiming to allow arm stamina to recover.",
      "Treat any arm bone injuries to restore maximum stamina capacity.",
      "Consider switching to a lighter weapon to reduce arm stamina drain.",
    ],
  },
  "Cramps": {
    identify: [
      "Increased weapon sway",
      "Cannot perform melee attacks",
      "Arm stamina critically at 1%",
    ],
    likelyCause: "Arm stamina critically depleted to 1%",
    treatment: [
      "Stop aiming immediately to allow arm stamina to recover.",
      "Avoid melee attacks until cramps clear.",
      "Treat arm bone injuries to restore maximum arm stamina.",
    ],
  },
  "Out of Breath": {
    identify: [
      "Audible heartbeat/breathing",
      "Cannot hold breath for aiming",
      "Breath meter fully depleted",
    ],
    likelyCause: "Sustained sprinting, prolonged breath-holding, or lung damage",
    treatment: [
      "Stop sprinting and rest to allow the breath meter to recover.",
      "If lung damage is the cause, use a surgery kit.",
      "Avoid breath-hold aiming until the status clears.",
    ],
  },
  "Coughing": {
    identify: [
      "Audible coughing",
      "Breathing issues",
      "Status shows Coughing",
    ],
    likelyCause: "Lung damage",
    treatment: [
      "Use a surgery kit to restore lung damage.",
      "Avoid long sprints and breath-hold actions until stable.",
      "Regroup and heal before re-engaging if under combat pressure.",
    ],
  },

  // --- HYDRATION & NUTRITION ---
  "Thirsty": {
    identify: [
      "Thirsty icon active",
      "Hydration below 50%",
      "Blood regeneration is prevented",
    ],
    likelyCause: "Hydration level dropped below 50%",
    treatment: [
      "Drink water or electrolyte items to bring hydration above 50%.",
      "Keep water stocked in your kit at all times.",
      "Blood regeneration resumes automatically once hydration exceeds 50%.",
    ],
  },
  "Hungry": {
    identify: [
      "Hungry icon active",
      "Energy below 50%",
      "Blood regeneration is prevented",
    ],
    likelyCause: "Energy level dropped below 50%",
    treatment: [
      "Eat food to bring energy above 50%.",
      "Pair with hydration items if both pools are low.",
      "Blood regeneration resumes automatically once energy exceeds 50%.",
    ],
  },
  "Dehydrated": {
    identify: [
      "Hazy/double vision",
      "Hydration critically low",
      "Status shows Dehydrated",
    ],
    likelyCause: "Hydration at critically low level (1%)",
    treatment: [
      "Consume water or electrolyte items immediately.",
      "Pause sprinting until hydration recovers.",
      "Keep hydration above 50% at all times to maintain blood regeneration.",
    ],
  },
  "Starving": {
    identify: [
      "Hazy/double vision",
      "Energy critically low",
      "Status shows Starving",
    ],
    likelyCause: "Energy at critically low level (1%)",
    treatment: [
      "Consume food immediately.",
      "Keep energy above 50% to allow blood regeneration.",
      "Pair food with hydration if both pools are low.",
    ],
  },

  // --- FLASHBANG ---
  "Vision Black-Out": {
    identify: [
      "Complete blindness",
      "Vision Black-Out icon active",
    ],
    likelyCause: "Flashbang grenade",
    treatment: [
      "Take immediate cover — you are completely blind for 2 seconds.",
      "Do not move into open areas until vision returns.",
      "No treatment required; the effect ends automatically.",
    ],
  },
  "Blind Spot": {
    identify: [
      "White spots obscuring vision",
      "Blind Spot icon active",
    ],
    likelyCause: "Flashbang grenade",
    treatment: [
      "Take cover and wait 4 seconds for the effect to clear.",
      "Avoid engaging while affected.",
      "No treatment required; the effect ends automatically.",
    ],
  },

  // --- CRITICAL ---
  "Coma": {
    identify: [
      "Loss of all control",
      "Character collapses to the ground",
      "Labored breathing",
      "Teammate sees coma state",
    ],
    likelyCause: "Majority blood loss, or liver/lung destruction",
    treatment: [
      "A teammate must treat the underlying cause quickly — roughly 2 minutes to act.",
      "Prioritize stopping the bleed and restoring critical organ function.",
      "If recoverable, stabilize and extract immediately.",
    ],
  },
};

const medicalCategories = [
  {
    label: "Bleeding",
    conditions: ["Light Bleeding", "Medium Bleeding", "Severe Bleeding"],
  },
  {
    label: "Vision",
    conditions: ["Dizzy", "Confused", "Disorientated", "Dazed", "Nauseous"],
  },
  {
    label: "Pain & Discomfort",
    conditions: ["Hurt / In Pain / Suffering", "Tremors", "Upset Stomach"],
  },
  {
    label: "Movement",
    conditions: ["Limping", "Encumbered", "Fatigued", "Exhausted"],
  },
  {
    label: "Arms & Breathing",
    conditions: ["Sore Arms", "Cramps", "Out of Breath", "Coughing"],
  },
  {
    label: "Hydration & Nutrition",
    conditions: ["Thirsty", "Hungry", "Dehydrated", "Starving"],
  },
  {
    label: "Flashbang",
    conditions: ["Vision Black-Out", "Blind Spot"],
  },
  {
    label: "Critical",
    conditions: ["Coma"],
  },
];

const medicalIconFiles = {
  "Light Bleeding": "LightBleedIcon.png",
  "Medium Bleeding": "MediumBleedingIcon.png",
  "Severe Bleeding": "SevereBleedingIcon.png",
  "Dizzy": "DizzyIcon.png",
  "Confused": "OrangeBrainIcon.png",
  "Disorientated": "Disorientated Status Icon.jpg",
  "Dazed": "OrangeBrainIcon.png",
  "Nauseous": "NauseousIcon.png",
  "Hurt / In Pain / Suffering": "PainIcon.png",
  "Tremors": "TremorsIcon.png",
  "Upset Stomach": "missing_icon.png",
  "Limping": "LimpingIcon.png",
  "Encumbered": "EncumberedIcon.png",
  "Fatigued": "FatiguedIcon.png",
  "Exhausted": "ExhaustedIcon.png",
  "Sore Arms": "SoreArmsIcon.png",
  "Cramps": "CrampsIcon.png",
  "Out of Breath": "OutOfBreathIcon.png",
  "Coughing": "CoughingIcon.png",
  "Thirsty": "ThirstyIcon.png",
  "Hungry": "HungryIcon.png",
  "Dehydrated": "DehydratedIcon.png",
  "Starving": "StarvingIcon.png",
  "Vision Black-Out": "VisionBlackOutIcon.png",
  "Blind Spot": "BlindSpotIcon.png",
  "Coma": "VisionBlackOutIcon.png",
};

function getIconUrl(conditionName) {
  const fileName = medicalIconFiles[conditionName];
  if (!fileName) {
    return "";
  }

  return `https://gray-zone-warfare.fandom.com/wiki/Special:FilePath/${encodeURIComponent(fileName)}`;
}

const conditionSelectEl = document.getElementById("conditionSelect");
const medicalGuideEl = document.getElementById("medicalGuide");

function setupMedicalSelector() {
  if (!conditionSelectEl) {
    return;
  }

  medicalCategories.forEach(({ label, conditions }) => {
    const group = document.createElement("optgroup");
    group.label = label;
    conditions.forEach((condition) => {
      const option = document.createElement("option");
      option.value = condition;
      option.textContent = condition;
      group.append(option);
    });
    conditionSelectEl.append(group);
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

  const iconUrl = getIconUrl(key);

  medicalGuideEl.innerHTML = `
    <div class="condition-header">
      ${iconUrl ? `<img class="condition-icon" src="${iconUrl}" alt="${key} icon" loading="lazy" />` : ""}
      <h3>${key}</h3>
    </div>
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
