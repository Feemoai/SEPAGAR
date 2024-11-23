const header = document.querySelector("header");

function makeHeaderSticky() {
  header.classList.add("sticky");
}

function makeHeaderUnsticky() {
  header.classList.remove("sticky");
}

// Tambahkan event listener untuk menjadikan header sticky saat pengguna menggulir ke bawah
window.addEventListener("scroll", function () {
  if (window.scrollY > header.clientHeight) {
    makeHeaderSticky();
  } else {
    makeHeaderUnsticky();
  }
});

// Panggil fungsi makeHeaderSticky() saat halaman dimuat
makeHeaderSticky();

// NAVBARR

let menu = document.querySelector("#menu-icon");
let backButton = document.querySelector("#back-button");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-menu");
  backButton.style.display = "block"; // Tampilkan tombol "Kembali"
  navbar.classList.toggle("open");
};

backButton.onclick = () => {
  menu.classList.toggle("bx-menu");
  backButton.style.display = "none"; // Sembunyikan tombol "Kembali"
  navbar.classList.toggle("open");
};

/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});
