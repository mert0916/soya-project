// Hedef zamanı manuel UTC'ye çeviriyoruz: Türkiye saati 2025-06-25 14:00 → UTC 11:00
const hedefTarih = new Date(Date.UTC(2025, 5, 25, 11, 0, 0)); 
// Aylar 0 tabanlıdır, Haziran = 5

function geriSayimGuncelle() {
  const simdi = new Date();
  const fark = countdown(simdi, hedefTarih, countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS);

  const countdownEl = document.getElementById("countdown");
  if (!countdownEl) return;

  if (fark.value <= 0) {
    countdownEl.innerText = "Etkinlik başladı!";
  } else {
    countdownEl.innerText = `${fark.days}g ` +
      `${fark.hours.toString().padStart(2, '0')}:` +
      `${fark.minutes.toString().padStart(2, '0')}:` +
      `${fark.seconds.toString().padStart(2, '0')}`;
  }
}

setInterval(geriSayimGuncelle, 1000);
geriSayimGuncelle();
