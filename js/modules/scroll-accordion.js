export default function initAccordion() {
  const accordionList = document.querySelectorAll(
    '[data-anime="accordion"] dt'
  ); //selecionei todos os dt
  const classActive = "ativo";
  function activeAccordion() {
    //adiciona a classe ativo no dt clicado e no próximo elemento após o dt que é o dl.
    this.classList.toggle(classActive);
    this.nextElementSibling.classList.toggle(classActive);
  }
  if (accordionList.length) {
    //insere a classe ativo no primeiro dt e no primeiro dl.
    accordionList[0].classList.add(classActive);
    accordionList[0].nextElementSibling.classList.add(classActive);

    //evento de click no dt.
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
