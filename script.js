// Sayfa yüklendiğinde çalışır
document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     MOBİL MENÜ (varsaysa)
  ========================== */
  const burger = document.querySelector("[data-burger]");
  const menu = document.querySelector("[data-menu]");

  if (burger && menu) {
    burger.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Menüde bir linke basınca kapat
    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* =========================
     TOAST MESAJ (opsiyonel)
  ========================== */
  const toast = document.querySelector("[data-toast]");
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  }

  // Form varsa (ileride kullanmak için)
  const form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      showToast("Mesajınız alındı ✅");
      form.reset();
    });
  }

});
