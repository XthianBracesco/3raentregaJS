document.addEventListener('DOMContentLoaded', function() {
    const productForm = document.getElementById('add-to-cart-form');
    const cart = document.getElementById('cart');
  
    productForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const productIdInput = document.getElementById('product-id');
      const productId = productIdInput.value;
      const product = getProductById(productId);
  
      if (product) {
        addToCart(product);
        updateCartView();
      } else {
        alert('Producto no encontrado');
      }
  
      productIdInput.value = '';
    });
  
    function getProductById(productId) {
      const productList = document.getElementById('product-list');
      const productItems = productList.getElementsByTagName('li');
  
      for (let i = 0; i < productItems.length; i++) {
        const item = productItems[i];
        if (item.dataset.id === productId) {
          const name = item.dataset.name;
          const price = item.dataset.price;
          return { id: productId, name: name, price: price };
        }
      }
  
      return null;
    }
  
    let cartItems = [];
  
    function addToCart(product) {
      cartItems.push(product);
    }
  
    function updateCartView() {
      cart.innerHTML = '';
      let total = 0;
  
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        const itemElement = document.createElement('div');
        itemElement.textContent = item.name + ' - $' + item.price;
        cart.appendChild(itemElement);
        total += parseInt(item.price);
      }
  
      const totalElement = document.createElement('div');
      totalElement.textContent = 'Total: $' + total;
      cart.appendChild(totalElement);
    }
  });