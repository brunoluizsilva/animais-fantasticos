export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu); //seleciono todos os li
    this.tabContent = document.querySelectorAll(content); //seleciono todas as section
    this.activeClass = "ativo";
  }
  // ativa a tab de acordo com o index da mesma
  activeTab(index) {
    this.tabContent.forEach((section) => {
      //percorre cada section e remove classe ativo.
      section.classList.remove(this.activeClass);
    });
    const animeShow = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, animeShow); //insere em cada section com o respectivo index da li a classe ativo e o atributo contido em animeShow.
  }
  // adiciona os eventos nas tabs
  addTabNavEvent() {
    this.tabMenu.forEach((li, index) => {
      //percorre cada li
      li.addEventListener("click", () => this.activeTab(index)); //passa o index da li clicada para a função.
    });
  }
  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      //ativar primeiro item
      this.activeTab(0);
      this.addTabNavEvent();
    }
  }
}
