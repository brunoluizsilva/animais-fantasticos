export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]'); //selecionei todas as sections
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      //percorre cada section
      const sectionTop = section.getBoundingClientRect().top; //pega a distancia do topo de cada section
      const isSectionVisible = sectionTop - windowMetade < 0;
      if (isSectionVisible) {
        // se a altura da section for menor que 0 adiciona em cada section a classe ativo = .js-scroll.ativo
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }
  if (sections.length) {
    animaScroll();

    window.addEventListener("scroll", animaScroll); //cria o evento de scroll
  }
}
