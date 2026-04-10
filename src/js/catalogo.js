const filterButtons = document.querySelectorAll('.filtro-btn');
const cards = document.querySelectorAll('.catalogo-card');
const botonesCarrito = document.querySelectorAll('.btn-carrito');
const botonesVerMas = document.querySelectorAll('.btn-vermas');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    cards.forEach((card) => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

botonesCarrito.forEach((button) => {
  button.addEventListener('click', () => {
    alert('Producto agregado al carrito');
  });
});

botonesVerMas.forEach((button) => {
  button.addEventListener('click', () => {
    alert('Próximamente se mostrará más información del producto');
  });
});