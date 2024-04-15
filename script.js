function toggleExplanation(id) {
  var explanation = document.getElementById(id);
  if (explanation.style.display === "block") {
    explanation.style.display = "none";
  } else {
    explanation.style.display = "block";
    explanation.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

