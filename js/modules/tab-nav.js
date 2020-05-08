export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li'); //seleciono todos os li
  const tabContent = document.querySelectorAll('[data-tab="content"] section'); //seleciono todas as section
  function activeTab(index) {
    tabContent.forEach((section) => {
      //percorre cada section e remove classe ativo.
      section.classList.remove("ativo");
    });
    const animeShow = tabContent[index].dataset.anime;
    tabContent[index].classList.add("ativo", animeShow); //insere em cada section com o respectivo index da li a classe ativo e o atributo contido em animeShow.
  }
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    //evento de click
    tabMenu.forEach((li, index) => {
      //percorre cada li
      li.addEventListener("click", function () {
        activeTab(index); //passa o index da li clicada para a função.
      });
    });
  }
}
