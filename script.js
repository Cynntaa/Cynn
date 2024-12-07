// Menangani pengiriman form kontak
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Pesan berhasil dikirim!\nNama: ${name}\nEmail: ${email}\nPesan: ${message}`);
        // Bersihkan form
        document.getElementById('contact-form').reset();
    } else {
        alert('Mohon isi semua kolom');
    }
});
