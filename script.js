
document.addEventListener('DOMContentLoaded', function () {
  const products = document.querySelectorAll('.product');

  products.forEach(product => {
    product.addEventListener('click', function () {
      alert('Produit sélectionné : ' + product.querySelector('h2').textContent);
    });
  });
});
