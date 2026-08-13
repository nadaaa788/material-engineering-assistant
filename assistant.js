// ===== Ask Material Assistant =====

const assistantInput = document.getElementById("assistantInput");
const assistantBtn = document.getElementById("assistantBtn");
const assistantResult = document.getElementById("assistantResult");


// ===== Keywords that suggest a MATERIAL FAILURE =====
// The user is describing something that already happened to a material.

const diagnosisKeywords = [
  "broke",
  "broken",
  "break",
  "crack",
  "cracked",
  "fracture",
  "fractured",
  "fail",
  "failed",
  "failure",
  "damaged",
  "damage",
  "corrosion",
  "corroded",
  "rust",
  "rusted",
  "fatigue",
  "wear",
  "worn",
  "deform",
  "deformed",
  "deformation",
  "bent",
  "bending",
  "snapped",
  "fractured",
  "delamination",
  "failure happened",
  "stopped working",
  "failed after",
  "broke after",
  "cracked after",
  "problem with",
  "problem happened",
  "what caused"
];


// ===== Keywords that suggest MATERIAL SELECTION =====
// The user wants to find a suitable material for a project.

const selectorKeywords = [
  "choose",
  "select",
  "recommend",
  "recommendation",
  "which material",
  "what material",
  "suitable material",
  "best material",
  "material for",
  "looking for a material",
  "need a material",
  "i need",
  "i want",
  "should i use",
  "what should i use",
  "lightweight",
  "light",
  "strong",
  "high strength",
  "corrosion resistant",
  "heat resistant",
  "thermal resistant",
  "high temperature",
  "low cost",
  "cheap",
  "durable"
];


assistantBtn.addEventListener("click", function() {

  // Get the user's question
  const query = assistantInput.value.toLowerCase().trim();


  // ===== Empty question =====

  if (query === "") {

    assistantResult.textContent =
      "Please describe what you need help with.";

    return;
  }


  // ===== Calculate diagnosis score =====

  let diagnosisScore = 0;

  diagnosisKeywords.forEach(function(keyword) {

    if (query.includes(keyword)) {

      diagnosisScore += 1;

    }

  });


  // ===== Calculate selector score =====

  let selectorScore = 0;

  selectorKeywords.forEach(function(keyword) {

    if (query.includes(keyword)) {

      selectorScore += 1;

    }

  });


  // ===== Decide what the user wants =====

  // If the user is describing a failure,
  // diagnosis has priority.

  if (diagnosisScore > 0 && diagnosisScore >= selectorScore) {

    assistantResult.textContent =
      "This sounds like a material failure problem. Redirecting to Failure Diagnosis...";

    setTimeout(function() {

      window.location.href = "diagnosis.html";

    }, 1000);

    return;
  }


  // If the user is looking for a material,
  // send them to the Material Selector.

  if (selectorScore > 0 && selectorScore > diagnosisScore) {

    assistantResult.textContent =
      "This sounds like a material selection question. Redirecting to Material Selector...";

    setTimeout(function() {

      window.location.href = "selector.html";

    }, 1000);

    return;
  }


  // ===== If the assistant cannot understand the question =====

  assistantResult.textContent =
    "I'm not sure whether you need material selection or failure diagnosis. Please describe your problem or material requirements more clearly.";

});