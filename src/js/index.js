apiObj = {
  newsletter: "https://corebiz-test.herokuapp.com/api/v1/newsletter",
  products: "https://corebiz-test.herokuapp.com/api/v1/products",
};
class Home {
  constructor() {
    this.selectors();
    this.events();
  }

  selectors() {
    this.formNewsletter = $("#newsletter");
  }

  events() {
    this.newsletterSubmit();
  }

  newsletterSubmit() {
    this.formNewsletter.submit((e) => {
      e.preventDefault();
      const rawData = $(e.currentTarget).serializeArray();

      const data = {
        name: rawData[0].value,
        email: rawData[1].value,
      };

      fetch(apiObj.newsletter, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((resp) => {
          const successMsg = $("#success_msg");
          $("#success_msg").css("display", "block");

          setTimeout(() => {
            successMsg.css("display", "none");
            $(".form-fields").val("");
          }, 3500);
        })
        .catch((err) => {
          console.log("Error on newsletter post.");
          const errorMsg = $("#error_msg");
          $("#error_msg").css("display", "block");

          setTimeout(() => {
            errorMsg.css("display", "none");
          }, 3500);
        });
    });
  }
}

const homePage = new Home();
const productPage = new Shelf();
