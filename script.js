const PHONE_NUMBER = "96178744519";

// Switch Tabs
function switchTab(tabId, btnElement) {
const contents = document.querySelectorAll('.tab-content');
contents.forEach(content => content.classList.remove('active'));

const buttons = document.querySelectorAll('.nav-btn');
buttons.forEach(btn => btn.classList.remove('active'));

document.getElementById(`tab-${tabId}`).classList.add('active');
btnElement.classList.add('active');
}

// Toggle Gift Card Accordion
function toggleCatalog(id) {
const target = document.getElementById(id);
target.classList.toggle('open');
}

// Redirect to WhatsApp
function orderWhatsApp(productDetails) {
const text = encodeURIComponent(`مرحباً Digital Vault، أود طلب: ${productDetails}`);
const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${text}`;
window.open(whatsappUrl, '_blank');
}

// Auto Year
document.addEventListener("DOMContentLoaded", function() {
document.getElementById("year").textContent = new Date().getFullYear();
});
