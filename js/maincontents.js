function adjustElementWidth() {
    const mainCElements = document.getElementsByClassName('imagemainContent'); // '.imagemainContent' sınıfına sahip tüm elementleri al
    var Backıframe= document.getElementById('Backıframe');
    const windowWidth = window.innerWidth -20; // Pencere genişliğini al

    // Tüm '.imagemainContent' elementlerinin genişliğini pencere genişliğine göre ayarla
    for (let i = 0; i < mainCElements.length; i++) {
        mainCElements[i].style.width = `${windowWidth}px`;
        Backıframe.style.width=`${windowWidth}px`;
    }
}

// Sayfa yüklendiğinde ve pencere boyutu değiştiğinde genişlik ayarlamasını yap
window.addEventListener('DOMContentLoaded', adjustElementWidth);
window.addEventListener('resize', adjustElementWidth);



// iframe içeriği yüklendiğinde ve içeriğin yüksekliği değiştiğinde yükseklik ayarlamasını yap
window.addEventListener('DOMContentLoaded', adjustIFrameHeight);
window.addEventListener('resize', adjustIFrameHeight);


function boyutlama(){
    var yukseklik=document.getElementById('Backıframe').contentWindow.document.body.scrollHeight;
    document.getElementById('Backıframe').height=yukseklik;


    }


