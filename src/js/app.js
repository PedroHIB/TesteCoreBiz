class Home {
  constructor() {
    this.selectors();
    this.events();
  }

  selectors() {
    // this.teste = $(".btn");
  }

  events() {
    // this.teste.on("click", this.clickTeste.bind(this));
    this.teste();
  }

  teste() {
    console.log("hello world");
  }
}

new Home();
