const text = "Hello! This is a typing effect.";
  const typeTextElement = document.getElementById("type-text");
  let index = 0;

  function type() {
    if (index <= text.length) {
      typeTextElement.textContent = text.slice(0, index);
      index++;
      setTimeout(type, 150); // adjust typing speed here
    }
  }
