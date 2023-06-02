// Optional: Change the yellow segment's width dynamically





function generateProductCards(data) {
    const productContainer = document.getElementById("allContent");
    data.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `
              <img src="${product.thumbnail}" alt="${product.name}" />
              <h2>${product.title}</h2>
              <div class='productPrice'>
              <p>${product.price}</p>
              <button>ADD TO CART</button>
              </div>
          `;
      productContainer.appendChild(card);
    });
  }
  function fetchProducts() {
    fetch("https://dummyjson.com/products?limit100")
      .then((response) => response.json())
      .then((data) => {
        const returnedData = data.products.slice(0, 8);
        generateProductCards(returnedData);
      });
  }
  fetchProducts()


 const line = document.querySelector('.line');
const yellowSegment = document.querySelector('.line:before');
yellowSegment.style.width = '100px';