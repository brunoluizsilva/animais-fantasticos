export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.classActive = "ativo";
  }

  toggleAccordion(item) {
    item.classList.toggle(this.classActive);
    item.nextElementSibling.classList.toggle(this.classActive);
  }
  // adiciona os eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }
  //  iniciar função
  init() {
    if (this.accordionList.length) {
      // ativar primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
