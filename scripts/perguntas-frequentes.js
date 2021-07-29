const pergunta = document.querySelectorAll(".pergunta");

pergunta.forEach((pergunta) => {
  pergunta.onclick = function () {
    this.classList.toggle("is-open");

    let content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };
});