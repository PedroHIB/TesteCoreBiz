class Shelf {
  createProductStructure(data) {
    const structure = `
            <div class="product">
                <div class="product-flags">
                    ${data.listPrice > 0 ? "OFF" : ""}
                </div>
                <div class="product-image">
                    <div class="image-principal">
                        <img src="${data.imageUrl}" />
                    </div>
                </div>
                <div class="product-infos">
                    <div class="infos-name">${data.productName}</div>
                    <div class="infos-star">${data.stars}</div>
                </div>
                <div class="product-price">
                    <div class="price-list"> ${
                      data.listPrice ? data.listPrice : ""
                    }</div>
                    <div class="price-principal">por R$ ${data.price}</div>
                    <div class="price-installment">ou em ${
                      data.installments[0]?.quantity
                    }x de R$ ${data.installments[0]?.value}</div>
                </div>
                <div class="product-buy">
                    <button class="buy-btn">
                        Comprar
                    </button>
                </div>
            </div>
            ${(() => {
              if (data.available) {
                return ` <div class="unavailable">
                    <span class="product-error">Produto indisponível.</span>
                </div>`;
              } else {
                return "";
              }
            })()}
        `;

    $(".shelf__container").append(structure);
  }

  async getProducts() {
    const request = await fetch(apiObj.products);

    request.json().then((products) => {
      products.forEach((product) => {
        this.createProductStructure(product);
      });

      $(".shelf__container").slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        lazyLoad: "ondemand",
        responsive: [
          {
            breakpoint: 768,
            settings: {
              dots: true,
              arrows: false,
            },
          },
        ],
      });
    });
  }

  constructor() {
    this.getProducts();
  }
}
