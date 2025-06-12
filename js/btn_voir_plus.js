/**
 * Gestion du bouton "Voir plus" pour afficher plus de produits
 * Ce script permet d'afficher progressivement plus de produits
 * quand l'utilisateur clique sur le bouton
 */

// Configuration
const PRODUCTS_PER_LOAD = 3;  // Nombre de produits à afficher par chargement

// Sélection des éléments du DOM
const plusProduits = document.querySelectorAll('.plusProduits');  // Tous les produits cachés
const btnPlusProduits = document.getElementById('button_produit'); // Bouton "Voir plus"

// Variables de contrôle
let currentIndex = 0;  // Index du dernier produit affiché

/**
 * Affiche le prochain lot de produits
 * @returns {void}
 */
function showMoreProducts() {
    // Calcul des indices pour le prochain lot
    const start = currentIndex;
    const end = Math.min(currentIndex + PRODUCTS_PER_LOAD, plusProduits.length);
    
    // Affiche les produits du lot
    for (let i = start; i < end; i++) {
        plusProduits[i].classList.remove('hidden');
    }
    
    // Mise à jour de l'index
    currentIndex = end;
    
    // Cache le bouton s'il n'y a plus de produits à afficher
    if (currentIndex >= plusProduits.length) {
        btnPlusProduits.style.display = 'none';
    }
}

// Ajout de l'écouteur d'événement sur le bouton
if (btnPlusProduits) {
    btnPlusProduits.addEventListener('click', showMoreProducts);
}