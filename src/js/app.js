class Home {
  constructor() {
    this.selectors();
    this.events();
  }

  selectors() {
    this.teste = $(".btn");
  }

  events() {
    this.teste.on("click", this.clickTeste.bind(this));
  }

  clickTeste() {
    alert("hello world");
  }
}

new Home();
