const buttons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active")?.classList.remove("active");
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    projectCards.forEach(card => {
      const match = (filter === "all") || (card.dataset.category === filter);
      card.style.display = match ? "" : "none";
    });
  });
});