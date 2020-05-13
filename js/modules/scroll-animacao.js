export default class ScrollAnimacao {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      //percorre cada section
      const sectionTop = section.getBoundingClientRect().top; //pega a distancia do topo de cada section
      const isSectionVisible = sectionTop - this.windowMetade < 0;
      if (isSectionVisible) {
        // se a altura da section for menor que 0 adiciona em cada section a classe ativo = .js-scroll.ativo
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }
  init() {
    this.animaScroll();
    window.addEventListener("scroll", this.animaScroll); //cria o evento de scroll
  }
}
