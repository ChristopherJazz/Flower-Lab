
import { products } from '../data/products.js';

function initializeProductCatalog() {
  // Find the product container in HTML
  const productGrid = document.querySelector('#product-grid');

  // Stop if the container does not exist
  if (!productGrid) {
    console.error('Product grid was not found.');
    return;
  }

  // Clear existing content
  productGrid.replaceChildren();

  // Loop through every product
  products.forEach((product) => {
    // Create the product card
    const card = document.createElement('article');
    card.classList.add('product-card');

    // Create the product image
    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.description;
    image.loading = 'lazy';

    // Create the product information container
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    // Create the product name
    const productName = document.createElement('h3');
    productName.textContent = product.name;

    // Create the product price
    const productPrice = document.createElement('p');
    productPrice.classList.add('product-price');

    productPrice.textContent = new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP'
    }).format(product.price);

    // Assemble the product card
    productInfo.append(productName, productPrice);
    card.append(image, productInfo);

    // Add the completed card to the page
    productGrid.appendChild(card);
  });
}

export { initializeProductCatalog };
