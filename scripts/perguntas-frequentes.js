const pergunta = document.querySelectorAll(".perguntas-frequentes__pergunta");
const seta = document.querySelectorAll(".perguntas-frequentes__seta");

/*
pergunta.forEach((pergunta) => {
  pergunta.onclick = function () {
    let content = this.nextElementSibling;
    content.classList.toggle("is-open");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }

    seta.forEach((seta) => {
      seta.onclick = function () {
        seta.classList.toggle("seta-rotate");
    
      };
    });
  };
});
*/

seta.forEach((seta) => {
  seta.onclick = function () {
    seta.classList.toggle("seta-rotate");

    let content = this.nextElementSibling;
    content.classList.toggle("is-open");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };
});
