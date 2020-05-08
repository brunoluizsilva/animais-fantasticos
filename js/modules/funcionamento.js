export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);


  const dataAgora = new Date();
  const diaAtual = dataAgora.getDay();
  const horarioAtual = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAtual) !== -1;

  const horarioAberto = (horarioAtual >= horarioSemana[0] && horarioAtual < horarioSemana[1]);


  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  } else {
    funcionamento.classList.add('fechado');
  }

}





























// const agora = new Date();
// const natal = new Date('Dec 25 2020 00:00');
// console.log(agora)
// console.log(agora.getDate())
// console.log(agora.getMonth())


// function tranformarDias(tempo) {
//   return tempo / (24 * 60 * 60 * 1000);
// }

// const diasAgora = tranformarDias((agora.getTime()));
// const diaNatal = tranformarDias((natal.getTime()));


// console.log(Math.floor(diaNatal - diasAgora));
