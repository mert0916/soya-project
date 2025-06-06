// 30 Haziran 2025, saat 20:00 tarihini hedefliyoruz
const hedefTarih = new Date("2025-06-30T20:00:00").getTime();

function geriSayimGuncelle() {
  const simdi = new Date().getTime();
  const fark = hedefTarih - simdi;
  const countdown = document.getElementById("countdown");

  if (!countdown) return;

  if (fark <= 0) {
    countdown.innerText = "Etkinlik başladı!";
    return;
  }

  const gun = Math.floor(fark / (1000 * 60 * 60 * 24));
  const saat = Math.floor((fark % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const dakika = Math.floor((fark % (1000 * 60 * 60)) / (1000 * 60));
  const saniye = Math.floor((fark % (1000 * 60)) / 1000);

  countdown.innerText = `${gun}g ${saat.toString().padStart(2, '0')}:${dakika.toString().padStart(2, '0')}:${saniye.toString().padStart(2, '0')}`;
}

// Sayacı her saniyede bir güncelle
setInterval(geriSayimGuncelle, 1000);
geriSayimGuncelle(); // Sayfa yüklenir yüklenmez göster
