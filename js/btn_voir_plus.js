const voirBtn = document.getElementById("voirPlusBtn");
const btnText = voirBtn.querySelector(".btn-text");
const sectionsCachées = document.querySelectorAll(".plusProduits");

voirBtn.addEventListener("click", () => {

  btnText.style.opacity = "0";

  
  setTimeout(() => {
    const isHidden = sectionsCachées[0].classList.contains("hidden");

    sectionsCachées.forEach(section => {
      section.classList.toggle("hidden");
    });

    btnText.textContent = isHidden ? "Voir moins" : "Voir plus";

    
    btnText.style.opacity = "1";
  }, 200); 
});