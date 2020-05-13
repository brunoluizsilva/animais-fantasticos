export default class Funcionamento {
  constructor(funcionamento, activeClass, desactiveClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
    this.desactiveClass = desactiveClass;
  }
  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(",")
      .map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAtual = this.dataAgora.getDay();
    this.horarioAtual = this.dataAgora.getUTCHours() - 3;
  }
  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAtual) !== -1;
    const horarioAberto =
      this.horarioAtual >= this.horarioSemana[0] &&
      this.horarioAtual < this.horarioSemana[1];
    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    } else {
      this.funcionamento.classList.add(this.desactiveClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
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
