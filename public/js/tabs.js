const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");
const tabCount = buttons.length;

function activateTab(buttonToActivate, moveFocus = false) {
  buttons.forEach((button) => {
    const isActive = button === buttonToActivate;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  contents.forEach((content) => {
    const isActive = content.id === buttonToActivate.dataset.target;
    content.classList.toggle("active", isActive);
    content.hidden = !isActive;
  });

  if (moveFocus) {
    buttonToActivate.focus();
  }
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => activateTab(button));

  button.addEventListener("keydown", (event) => {
    let nextIndex = null;

    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % tabCount;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + tabCount) % tabCount;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = tabCount - 1;
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      activateTab(button);
    }

    if (nextIndex !== null) {
      event.preventDefault();
      activateTab(buttons[nextIndex], true);
    }
  });
});
