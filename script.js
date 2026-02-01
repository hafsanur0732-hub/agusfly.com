// Mobil menü
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => nav.classList.toggle("is-open"));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("is-open")));

// Footer yıl
document.getElementById("year").textContent = new Date().getFullYear();

// WhatsApp ayarı (BURAYI DEĞİŞTİR)
const WHATSAPP_NUMBER = "905555555555"; // +90 olmadan yaz (ör: 9053xxxxxxx)
const WHATSAPP_TEXT = "Merhaba! AGUSFLY ürünleri hakkında bilgi almak istiyorum.";

function buildWhatsAppLink() {
  const url = new URL("https://wa.me/" + WHATSAPP_NUMBER);
  url.searchParams.set("text", WHATSAPP_TEXT);
  return url.toString();
}

const waLink = document.getElementById("waLink");
const waFloat = document.getElementById("waFloat");
const waUrl = buildWhatsAppLink();
waLink.href = waUrl;
waFloat.href = waUrl;

// Ürün detay modalı
const modal = document.getElementById("modal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

const productDetails = {
  "Horse Fly Spray": [
    "Kullanım: Tüylerin üzerine eşit şekilde uygulayın. Göz/ağız çevresinden kaçının.",
    "İpucu: Terli bölgelerde (boyun/göğüs) daha sık yenileme gerekebilir.",
    "Not: Hassasiyet oluşursa kullanımı durdurup uzman görüşü alın."
  ].join("\n\n"),
  "Horse Hoof Balm": [
    "Kullanım: Temiz tırnağa ince tabaka halinde sürün.",
    "Öneri: Düzenli kullanım tırnak yüzeyinin korunmasına yardımcı olur.",
    "İpucu: Islak zeminden sonra bakım desteği için uygulanabilir."
  ].join("\n\n"),
  "Horse Tail Spray": [
    "Kullanım: Kuyruk/yeleye püskürtün, nazikçe tarayın.",
    "Fayda: Dolaşmayı azaltır, taramayı kolaylaştırır.",
    "İpucu: Tarama öncesi 30–60 sn bekleyin."
  ].join("\n\n")
};

document.querySelectorAll("[data-product]").forEach(btn => {
  btn.addEventListener("click", () => {
    const name = btn.getAttribute("data-product");
    modalTitle.textContent = name;
    modalText.textContent = productDetails[name] || "Detay yakında eklenecek.";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  });
});

function closeModal(){
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}
modalBackdrop.addEventListener("click", closeModal);
modalClose.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

// İletişim formu (demo)
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formNote.textContent = "Mesajın alındı ✅ (Demo: gerçek mail entegrasyonu eklenebilir)";
  contactForm.reset();
});
