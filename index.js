// ===== Materials Database =====
const materialsDB = [
  {
    name: "Stainless Steel 316",
    category: "metals",
    properties: ["high-strength", "corrosion-resistance", "thermal-resistance"],
    maxTemp: 800,
    environments: ["normal", "corrosive", "marine"],
    density: 8.0
  },
  {
    name: "Aluminum 6061",
    category: "metals",
    properties: ["lightweight", "corrosion-resistance"],
    maxTemp: 300,
    environments: ["normal", "marine"],
    density: 2.7
  },
  {
    name: "Titanium Ti-6Al-4V",
    category: "metals",
    properties: ["high-strength", "corrosion-resistance", "lightweight"],
    maxTemp: 400,
    environments: ["normal", "corrosive", "marine"],
    density: 4.43
  },
  {
    name: "Copper C11000",
    category: "metals",
    properties: ["corrosion-resistance"],
    maxTemp: 200,
    environments: ["normal", "marine"],
    density: 8.96
  },
  {
    name: "Gray Cast Iron",
    category: "metals",
    properties: ["high-strength"],
    maxTemp: 300,
    environments: ["normal"],
    density: 7.2
  },
  {
    name: "Inconel 718",
    category: "metals",
    properties: ["high-strength", "corrosion-resistance", "thermal-resistance"],
    maxTemp: 1000,
    environments: ["normal", "corrosive", "high-temperature", "marine"],
    density: 8.19
  },
  {
    name: "Magnesium AZ31",
    category: "metals",
    properties: ["lightweight"],
    maxTemp: 150,
    environments: ["normal"],
    density: 1.77
  },
  {
    name: "HDPE",
    category: "polymers",
    properties: ["lightweight", "corrosion-resistance"],
    maxTemp: 120,
    environments: ["normal", "corrosive"],
    density: 0.95
  },
  {
    name: "PVC",
    category: "polymers",
    properties: ["corrosion-resistance", "lightweight"],
    maxTemp: 60,
    environments: ["normal", "corrosive"],
    density: 1.4
  },
  {
    name: "PTFE (Teflon)",
    category: "polymers",
    properties: ["corrosion-resistance", "thermal-resistance"],
    maxTemp: 260,
    environments: ["normal", "corrosive", "high-temperature"],
    density: 2.2
  },
  {
    name: "Nylon 6/6",
    category: "polymers",
    properties: ["lightweight", "high-strength"],
    maxTemp: 150,
    environments: ["normal"],
    density: 1.14
  },
  {
    name: "Polycarbonate",
    category: "polymers",
    properties: ["lightweight", "high-strength"],
    maxTemp: 120,
    environments: ["normal"],
    density: 1.2
  },
  {
    name: "ABS",
    category: "polymers",
    properties: ["lightweight"],
    maxTemp: 80,
    environments: ["normal"],
    density: 1.05
  },
  {
    name: "PEEK",
    category: "polymers",
    properties: ["high-strength", "thermal-resistance", "corrosion-resistance"],
    maxTemp: 250,
    environments: ["normal", "corrosive", "high-temperature"],
    density: 1.32
  },
  {
    name: "Alumina Ceramic",
    category: "ceramics",
    properties: ["thermal-resistance", "corrosion-resistance"],
    maxTemp: 1600,
    environments: ["normal", "corrosive", "high-temperature"],
    density: 3.9
  },
  {
    name: "Silicon Carbide",
    category: "ceramics",
    properties: ["thermal-resistance", "high-strength"],
    maxTemp: 1900,
    environments: ["normal", "high-temperature", "corrosive"],
    density: 3.2
  },
  {
    name: "Zirconia (ZrO2)",
    category: "ceramics",
    properties: ["high-strength", "thermal-resistance"],
    maxTemp: 2400,
    environments: ["normal", "high-temperature", "corrosive"],
    density: 6.0
  },
  {
    name: "Boron Carbide",
    category: "ceramics",
    properties: ["high-strength", "lightweight"],
    maxTemp: 2000,
    environments: ["normal", "high-temperature"],
    density: 2.52
  },
  {
    name: "Silicon Nitride",
    category: "ceramics",
    properties: ["high-strength", "thermal-resistance"],
    maxTemp: 1800,
    environments: ["normal", "high-temperature", "corrosive"],
    density: 3.2
  },
  {
    name: "Aluminum Nitride",
    category: "ceramics",
    properties: ["thermal-resistance"],
    maxTemp: 2200,
    environments: ["normal", "high-temperature"],
    density: 3.3
  },
  {
    name: "Titanium Carbide",
    category: "ceramics",
    properties: ["high-strength", "thermal-resistance"],
    maxTemp: 3000,
    environments: ["normal", "high-temperature"],
    density: 4.93
  },
  {
    name: "Carbon Fiber Composite",
    category: "composites",
    properties: ["lightweight", "high-strength"],
    maxTemp: 150,
    environments: ["normal", "marine"],
    density: 1.6
  },
  {
    name: "Fiberglass Composite",
    category: "composites",
    properties: ["lightweight", "corrosion-resistance"],
    maxTemp: 200,
    environments: ["normal", "marine", "corrosive"],
    density: 1.9
  },
  {
    name: "Kevlar Composite",
    category: "composites",
    properties: ["lightweight", "high-strength"],
    maxTemp: 200,
    environments: ["normal", "marine"],
    density: 1.44
  },
  {
    name: "Basalt Fiber Composite",
    category: "composites",
    properties: ["lightweight", "corrosion-resistance", "thermal-resistance"],
    maxTemp: 300,
    environments: ["normal", "marine", "corrosive", "high-temperature"],
    density: 1.9
  },
  {
    name: "Metal Matrix Composite (Al-SiC)",
    category: "composites",
    properties: ["high-strength", "thermal-resistance"],
    maxTemp: 350,
    environments: ["normal", "high-temperature"],
    density: 2.9
  },
  {
    name: "Natural Fiber Composite (Flax)",
    category: "composites",
    properties: ["lightweight"],
    maxTemp: 100,
    environments: ["normal"],
    density: 1.3
  },
  {
    name: "Hybrid Carbon-Glass Composite",
    category: "composites",
    properties: ["lightweight", "high-strength"],
    maxTemp: 180,
    environments: ["normal", "marine"],
    density: 1.75
  }
];

// ===== Grab HTML elements =====

// Grab the category select element
const categoryInput = document.getElementById("category");

// Grab the 4 checkboxes for required properties
const lightInput = document.getElementById("light");
const strengthInput = document.getElementById("strength");
const corrosionInput = document.getElementById("corrosion");
const thermalInput = document.getElementById("thermalResistance");

// Grab the temperature input
const temperatureInput = document.getElementById("temperature");

// Grab the environment select
const environmentInput = document.getElementById("environment");

// Grab the button
const analyzeBtn = document.getElementById("analyzeBtn");

// Grab the elements where we'll display the result
const resultTitle = document.getElementById("resultTitle");
const resultText = document.getElementById("resultText");

// ===== Scoring function =====
// This function takes ONE material and the user's choices,
// and returns a score (a number) that tells us how good the match is.
function scoreMaterial(material, choices) {

  let score = 0;

  // +3 points if the category matches
  if (material.category === choices.category) {
    score += 3;
  }

  // +1 point for each requested property the material actually has
  choices.requiredProperties.forEach(function(prop) {
    if (material.properties.includes(prop)) {
      score += 1;
    }
  });

  // +2 points if the material can handle the requested temperature
  // (only check this if the user actually typed a temperature,
  // meaning choices.temperature is not null — this also works
  // correctly if the user typed 0)
  if (choices.temperature !== null && material.maxTemp >= choices.temperature) {
    score += 2;
  }

  // +1 point if the material fits the selected environment
  
  if (material.environments.includes(choices.environment)) {
    score += 1;
  }

  // Extra points based on density, but ONLY if the user checked "lightweight".
  // We use the actual density number instead of just the "lightweight" tag,
  // so materials are ranked more precisely (not just yes/no).
  if (choices.requiredProperties.includes("lightweight")) {
    if (material.density < 2) {
      score += 2; // very light material
    } else if (material.density <= 5) {
      score += 1; // medium density
    }
    // no extra points if density > 5 (heavy material)
  }
  return score;
}

// ===== Event listener on Analyze button =====

analyzeBtn.addEventListener("click", function() {

  // Read the selected category (select -> .value)
  const selectedCategory = categoryInput.value;

  // Read each checkbox (.checked returns true or false)
  const wantsLight = lightInput.checked;
  const wantsStrength = strengthInput.checked;
  const wantsCorrosion = corrosionInput.checked;
  const wantsThermal = thermalInput.checked;

  // Read the temperature.
  // We first check if the field was left empty (value is "").
  // If it's empty, we store null (meaning "no temperature given").
  // If the user typed something (even 0), we convert it to a real number.
  const selectedTemperature =
    temperatureInput.value === "" ? null : Number(temperatureInput.value);

  // Read the selected environment
  const selectedEnvironment = environmentInput.value;

  // Build an array of the properties the user actually checked
  // (only include a property name if its checkbox is checked)
  const requiredProperties = [];
  if (wantsLight) requiredProperties.push("lightweight");
  if (wantsStrength) requiredProperties.push("high-strength");
  if (wantsCorrosion) requiredProperties.push("corrosion-resistance");
  if (wantsThermal) requiredProperties.push("thermal-resistance");

  // Group everything the user chose into one object
  // (easier to pass around than 6 separate variables)
  const choices = {
    category: selectedCategory,
    requiredProperties: requiredProperties,
    temperature: selectedTemperature,
    environment: selectedEnvironment
  };

  // Score every material in the database using our scoring function.
  // .map() creates a new array, same length as materialsDB,
  // where each material is paired with its score.
  const scoredMaterials = materialsDB.map(function(material) {
    return {
      material: material,
      score: scoreMaterial(material, choices)
    };
  });

  // Sort the scored materials from highest score to lowest score
  scoredMaterials.sort(function(a, b) {
    return b.score - a.score;
  });

  // Log the full ranking so we can check the scoring makes sense
  console.log(scoredMaterials);

  // The best match is simply the first one after sorting
  const bestMatch = scoredMaterials[0];
  console.log("Best match:", bestMatch.material.name, "with score", bestMatch.score);

  // ===== Display the result on the page =====

  // Put the material name in the title
  resultTitle.textContent = bestMatch.material.name;

  // Build a readable sentence with the material's key info
  resultText.textContent =
    "Category: " + bestMatch.material.category +
    " | Max temperature: " + bestMatch.material.maxTemp + "°C" +
    " | Density: " + bestMatch.material.density + " g/cm³" +
    " | Match score: " + bestMatch.score;

});






// ===== 3D Animated Background: Mechanical Parts (Three.js) =====
// Instead of abstract shapes, this builds recognizable mechanical
// pieces (bolt, nut, gear, spring, pipe) out of Three.js primitives,
// and scatters several of them, slowly rotating, in the background.

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 15;

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("bg3d").appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

function metalMaterial() {
  return new THREE.MeshStandardMaterial({
    color: 0x94a3b8,
    metalness: 0.8,
    roughness: 0.3,
    transparent: true,
    opacity: 0.55
  });
}

function createBolt() {
  const group = new THREE.Group();
  const headGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.25, 6);
  const head = new THREE.Mesh(headGeometry, metalMaterial());
  head.position.y = 0.6;
  group.add(head);
  const shaftGeometry = new THREE.CylinderGeometry(0.15, 0.15, 1.2, 16);
  const shaft = new THREE.Mesh(shaftGeometry, metalMaterial());
  shaft.position.y = -0.1;
  group.add(shaft);
  return group;
}

function createNut() {
  const hexShape = new THREE.Shape();
  const hexRadius = 0.45;
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    const x = Math.cos(angle) * hexRadius;
    const y = Math.sin(angle) * hexRadius;
    if (i === 0) hexShape.moveTo(x, y);
    else hexShape.lineTo(x, y);
  }
  hexShape.closePath();
  const holePath = new THREE.Path();
  holePath.absarc(0, 0, 0.22, 0, Math.PI * 2, false);
  hexShape.holes.push(holePath);
  const extrudeSettings = { depth: 0.3, bevelEnabled: false };
  const geometry = new THREE.ExtrudeGeometry(hexShape, extrudeSettings);
  const nut = new THREE.Mesh(geometry, metalMaterial());
  nut.rotation.x = Math.PI / 2;
  return nut;
}

function createGear() {
  const teeth = 10;
  const outerRadius = 0.5;
  const innerRadius = 0.38;
  const holeRadius = 0.15;
  const gearShape = new THREE.Shape();
  for (let i = 0; i < teeth; i++) {
    const angle1 = (i / teeth) * Math.PI * 2;
    const angle2 = ((i + 0.5) / teeth) * Math.PI * 2;
    const angle3 = ((i + 1) / teeth) * Math.PI * 2;
    const xOuter1 = Math.cos(angle1) * outerRadius;
    const yOuter1 = Math.sin(angle1) * outerRadius;
    const xOuter2 = Math.cos(angle2) * outerRadius;
    const yOuter2 = Math.sin(angle2) * outerRadius;
    const xInner = Math.cos(angle3) * innerRadius;
    const yInner = Math.sin(angle3) * innerRadius;
    if (i === 0) gearShape.moveTo(xOuter1, yOuter1);
    else gearShape.lineTo(xOuter1, yOuter1);
    gearShape.lineTo(xOuter2, yOuter2);
    gearShape.lineTo(xInner, yInner);
  }
  gearShape.closePath();
  const holePath = new THREE.Path();
  holePath.absarc(0, 0, holeRadius, 0, Math.PI * 2, false);
  gearShape.holes.push(holePath);
  const extrudeSettings = { depth: 0.2, bevelEnabled: false };
  const geometry = new THREE.ExtrudeGeometry(gearShape, extrudeSettings);
  const gear = new THREE.Mesh(geometry, metalMaterial());
  return gear;
}

function createSpring() {
  const points = [];
  const turns = 5;
  const pointsPerTurn = 12;
  const totalPoints = turns * pointsPerTurn;
  const coilRadius = 0.3;
  const coilHeight = 1.2;
  for (let i = 0; i <= totalPoints; i++) {
    const angle = (i / pointsPerTurn) * Math.PI * 2;
    const x = Math.cos(angle) * coilRadius;
    const z = Math.sin(angle) * coilRadius;
    const y = (i / totalPoints) * coilHeight - coilHeight / 2;
    points.push(new THREE.Vector3(x, y, z));
  }
  const curve = new THREE.CatmullRomCurve3(points);
  const geometry = new THREE.TubeGeometry(curve, 200, 0.05, 8, false);
  const spring = new THREE.Mesh(geometry, metalMaterial());
  return spring;
}

function createPipe() {
  const geometry = new THREE.CylinderGeometry(0.35, 0.35, 1.2, 24, 1, true);
  const pipe = new THREE.Mesh(geometry, metalMaterial());
  return pipe;
}

const partGenerators = [createBolt, createNut, createGear, createSpring, createPipe];

const parts = [];
const partCount = 16;

for (let i = 0; i < partCount; i++) {
  const generator = partGenerators[Math.floor(Math.random() * partGenerators.length)];
  const part = generator();
  part.position.x = (Math.random() - 0.5) * 40;
  part.position.y = (Math.random() - 0.5) * 25;
  part.position.z = (Math.random() - 0.5) * 15 - 15;
  const scale = 0.8 + Math.random() * 1.4;
  part.scale.set(scale, scale, scale);
  part.rotation.x = Math.random() * Math.PI;
  part.rotation.y = Math.random() * Math.PI;
  part.userData.rotationSpeedX = (Math.random() - 0.5) * 0.006;
  part.userData.rotationSpeedY = (Math.random() - 0.5) * 0.006;
  scene.add(part);
  parts.push(part);
}

function animate3DBackground() {
  requestAnimationFrame(animate3DBackground);
  parts.forEach(function(part) {
    part.rotation.x += part.userData.rotationSpeedX;
    part.rotation.y += part.userData.rotationSpeedY;
  });
  renderer.render(scene, camera);
}
animate3DBackground();

window.addEventListener("resize", function() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

