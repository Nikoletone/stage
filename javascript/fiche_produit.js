const popup = document.getElementById('productPopup');
const popupTitle = document.getElementById('popupTitle');
const popupImage = document.getElementById('popupImage');
const popupPrice = document.getElementById('popupPrice');
const popupDescription = document.getElementById('popupDescription');
const popupDimensions = document.getElementById('popupDimensions');
const closeBtn = document.querySelector('.close-btn');

// On sélectionne TOUS les boutons
const openButtons = document.querySelectorAll('.openPopupBtn');

// Pour chaque bouton, on ajoute un clic
openButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productCard = button.closest('.product-card'); // remonte à la div parent
    const name = productCard.dataset.name;
    const price = productCard.dataset.price;
    const image = productCard.dataset.image;
    const dimensions = productCard.dataset.dimensions;

    // Mise à jour du contenu de la popup
    popupTitle.textContent = name;
    popupPrice.textContent = price;
    popupImage.src = image;
    popupDimensions.textContent = dimensions;

    popup.style.display = 'flex';
  });
});

// Fermer la popup
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Fermer en cliquant en dehors
window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
