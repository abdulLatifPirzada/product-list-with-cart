fetch('./data.json')
  .then(response => response.json())
  .then(products => {
    const container = document.querySelector('.products-list'); // changed to class

    if (!container) {
      console.error('Container with class "product-list" not found.');
      return;
    }

    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');

      card.innerHTML = `
        <div class="image-wrapper">
          <picture>
            <source media="(max-width: 767px)" srcset="${product.image.mobile}">
            <source media="(max-width: 1024px)" srcset="${product.image.tablet}">
            <img class="product-image dessert-image" src="${product.image.desktop}" alt="${product.name}">
          </picture>

          <div class="button-wrapper">
            <button class="add-to-cart">
              <img class="add-to-cart-svg" src="./assets/images/icon-add-to-cart.svg" alt="add to cart">
              Add to Cart
            </button>
          </div>
        </div>

        <p class="description">${product.category}</p>
        <h2 class="product-name">${product.name}</h2>
        <p class="price">$${product.price.toFixed(2)}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error loading products:', error);
  });
// This script fetches product data from a JSON file and dynamically creates product cards in the HTML.