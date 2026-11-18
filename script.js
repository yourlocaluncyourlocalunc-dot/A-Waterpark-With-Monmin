const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
    link.classList.add('active');
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
const reviewWheel = document.querySelector(".review-scroll-wheel");
const reviewContainer = document.querySelector(".reviews-container");

if (reviewWheel && reviewContainer) {
  reviewWheel.addEventListener("input", () => {
    const maxScroll =
      reviewContainer.scrollHeight - reviewContainer.clientHeight;

    reviewContainer.scrollTop =
      (Number(reviewWheel.value) / 100) * maxScroll;
  });

  reviewContainer.addEventListener("scroll", () => {
    const maxScroll =
      reviewContainer.scrollHeight - reviewContainer.clientHeight;

    reviewWheel.value = maxScroll > 0
      ? (reviewContainer.scrollTop / maxScroll) * 100
      : 0;
  });
}
