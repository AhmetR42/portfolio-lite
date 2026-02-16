const items = document.querySelectorAll(".hero, .card");

items.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(20px)";
});

window.addEventListener("load", () => {
  items.forEach((el, i) => {
    setTimeout(() => {
      el.style.transition = "all .6s ease";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, i * 150);
  });
});
