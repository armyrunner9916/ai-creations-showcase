document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.createElement("button");
  toggleButton.innerText = "Toggle Theme";
  toggleButton.classList.add("toggle-theme");
  document.body.appendChild(toggleButton);

  toggleButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
  });
});
