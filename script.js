// Saat ve Tarih Güncellemesi
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Aylar 0-11 arası olduğu için 1 ekliyoruz.
    const year = now.getFullYear();
    const timeString = `${hours}:${minutes}:${seconds}`;
    const dateString = `${day}/${month}/${year}`;
    document.getElementById('clock').textContent = `${timeString} - ${dateString}`;
}

setInterval(updateClock, 1000); // Her saniyede bir saati güncelle

// Slideshow Geçişleri
let slideIndex = 0;
const images = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg"]; // Images klasöründeki fotoğraflar

function startSlideshow() {
    const slideshowElement = document.getElementById("slideshow");
    
    setInterval(() => {
        slideIndex = (slideIndex + 1) % images.length; // Resimleri sırayla döndür
        slideshowElement.style.opacity = 0; // Geçiş animasyonu için opacity sıfırlanıyor
        
        setTimeout(() => {
            slideshowElement.src = images[slideIndex]; // Yeni resmi göster
            slideshowElement.style.opacity = 1; // Opacity geri getiriliyor
        }, 1000); // 1 saniyelik geçiş süresi
    }, 5000); // Her 5 saniyede bir fotoğraf değiştir
}
