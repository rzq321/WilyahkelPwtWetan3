// Fungsi untuk scroll ke bagian atas halaman
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Menampilkan tombol kembali ke atas saat halaman di-scroll
window.onscroll = function () {
    let topButton = document.getElementById("top-button");
    
    // Mengatur visibilitas tombol "Kembali ke Atas" saat di-scroll
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

    // Efek fade-in untuk setiap section saat di-scroll ke dalam tampilan
    document.querySelectorAll("section").forEach(function (section) {
        let rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            section.classList.add("visible");
        }
    });
};

// Smooth scroll untuk navigasi saat mengklik tautan dalam menu navigasi
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        
        // Mengambil elemen target dan melakukan scroll dengan efek smooth
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
