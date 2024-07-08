const button = document.getElementById('button');
button.addEventListener('click', () => {

    let saatKontrol = Number(document.getElementById('saat').value);
    let dakikaKontrol = Number(document.getElementById('dakika').value);
    let saniyeKontrol = Number(document.getElementById('saniye').value);


    if (saniyeKontrol < 0 || dakikaKontrol < 0 || saatKontrol < 0) {
        alert('Negatif deger giremezssiniz')
        document.getElementById('kalan-saat').textContent = 0
        document.getElementById('kalan-dakika').textContent = 0
        document.getElementById('kalan-saniye').textContent = 0
        clearInterval(intervalId);
        return;
    }


    document.getElementById('kalan-saat').textContent = Number(document.getElementById('saat').value);
    document.getElementById('kalan-dakika').textContent = Number(document.getElementById('dakika').value);
    document.getElementById('kalan-saniye').textContent = Number(document.getElementById('saniye').value);

    let kalanSaat = Number(document.getElementById('kalan-saat').textContent)

    let kalanDakika = Number(document.getElementById('kalan-dakika').textContent)

    let kalanSaniye = Number(document.getElementById('kalan-saniye').textContent)

    invertvalId = setInterval(() => {
        if (kalanSaniye <= 0) {
            if (kalanDakika > 0) {
                kalanDakika -= 1
                kalanSaniye = 60
                document.getElementById('kalan-dakika').textContent = kalanDakika
            }
            else {
                if (kalanSaat > 0) {
                    kalanSaat -= 1
                    kalanDakika = 60
                    document.getElementById('kalan-saat').textContent = kalanSaat
                }
            }

        }
        else {
            kalanSaniye -= 1;
            document.getElementById('kalan-saniye').textContent = kalanSaniye
        }

    }, 1000)






})