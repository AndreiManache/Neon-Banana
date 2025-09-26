const cartToggle = document.querySelector('.cart-toggle');
const cartDrawer = document.getElementById('cart-drawer');
const cartClose = document.querySelector('.cart-close');
const toast = document.querySelector('.toast');
const toastClose = document.querySelector('.toast-close');
const addToCartButtons = document.querySelectorAll('[data-action="add-to-cart"], .product-card .btn-primary');

function openCart() {
  cartDrawer.hidden = false;
  cartDrawer.setAttribute('aria-hidden', 'false');
  cartToggle.setAttribute('aria-expanded', 'true');
  cartDrawer.focus();
}

function closeCart() {
  cartDrawer.hidden = true;
  cartDrawer.setAttribute('aria-hidden', 'true');
  cartToggle.setAttribute('aria-expanded', 'false');
  cartToggle.focus();
}

if (cartToggle) {
  cartToggle.addEventListener('click', () => {
    const isHidden = cartDrawer.hasAttribute('hidden');
    if (isHidden) {
      openCart();
    } else {
      closeCart();
    }
  });
}

if (cartClose) {
  cartClose.addEventListener('click', closeCart);
}

if (cartDrawer) {
  cartDrawer.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeCart();
    }
  });
}

function showToast() {
  if (!toast) return;
  toast.hidden = false;
  setTimeout(() => {
    toast.hidden = true;
  }, 4000);
}

if (toastClose) {
  toastClose.addEventListener('click', () => {
    toast.hidden = true;
  });
}

addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    showToast();
  });
});

const emptyState = document.querySelector('.empty-state');
const filterCheckboxes = document.querySelectorAll('.filters input[type="checkbox"]');

filterCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    const anyChecked = Array.from(filterCheckboxes).some((box) => box.checked);
    if (emptyState) {
      emptyState.style.display = anyChecked ? 'block' : 'none';
    }
  });
});

if (cartDrawer) {
  cartDrawer.setAttribute('tabindex', '-1');
  cartDrawer.setAttribute('aria-hidden', 'true');
}

const stickyAdd = document.querySelector('[data-sticky-add]');

function toggleStickyAdd() {
  if (!stickyAdd) return;
  stickyAdd.style.display = window.innerWidth <= 680 ? 'block' : 'none';
}

window.addEventListener('resize', toggleStickyAdd);
window.addEventListener('orientationchange', toggleStickyAdd);
toggleStickyAdd();
