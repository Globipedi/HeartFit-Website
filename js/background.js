// Scroll olayını dinle
window.addEventListener('scroll', function() {
    // Header elementini seç
    var header = document.getElementById('header');
    var headerHeight = header.offsetHeight;
    var body = document.getElementById('body');
    // Şu anki kaydırma değerini al
    var scrollPosition = window.scrollY || window.pageYOffset;
    
    // Eğer kaydırma değeri header yüksekliğinden büyükse
    if (scrollPosition > headerHeight) {
        // Header elementine 'scrollheader' sınıfını ekle
        header.classList.add('scrollheader');
        body.classList.add('scrollbody');

    } else {
        // Header elementinden 'scrollheader' sınıfını kaldır
        header.classList.remove('scrollheader');
        body.classList.remove('scrollbody');
    }
});




function loginX() {

const loginBtn = document.getElementById('loginx');
const signupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			signupBtn.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

signupBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			loginBtn.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')

		}
	});
});
}




function loginpop() {

    var loginRegistration = document.getElementById("loginregistration");
    const formsign = document.getElementById('formsign');
    const formlogin = document.getElementById('formlogin');
    if (loginRegistration.style.display === "block") {
        formlogin.classList.remove('slide-up');
        formsign.classList.add('slide-up');
        loginRegistration.style.display = "none";
    } else {
        loginRegistration.style.display = "block"; 
        setTimeout(() => {
            formlogin.classList.add('slide-up');
            formsign.classList.remove('slide-up');
        }, 500);
    }
}




function loginpage() {

    var loginRegistration = document.getElementById("loginregistration");
    const formsign = document.getElementById('formsign');
    const formlogin = document.getElementById('formlogin');
    if (loginRegistration.style.display === "block") {
        formlogin.classList.add('slide-up');
        formsign.classList.remove('slide-up');
        loginRegistration.style.display = "none";
    } else {
        loginX();
        loginRegistration.style.display = "block"; 
        
        setTimeout(() => {
            formlogin.classList.remove('slide-up');
            formsign.classList.add('slide-up');
        }, 500);
    }
}








function sourceq() {
  /*  var scrollbody = document.querySelector('.scrollbody');
    scrollbody.classList.toggle('clicked');*/

    /*sourceq.style.display = "block";
    sourceq.style.animation = "moveBox 3s forwards";*/
   
    var sourceq = document.getElementById("sourceq");    
    var up = document.getElementById("up");
    sourceq.style.display="block";
        if (sourceq.classList.contains("moveBoxOn")) {
        /*    sourceq.classList.remove("moveBoxOn");
            sourceq.classList.add("moveBoxOff");
            up.style.display="block";
            sourceq.style.animation = "moveBoxOff 3s forwards"; // Animasyonu başlat*/
        } else {
            sourceq.classList.remove("moveBoxOff");
            sourceq.classList.add("moveBoxOn");
            up.style.display="block";
            sourceq.style.animation = "moveBoxOn 3s forwards"; // Animasyonu başlat
        }


};
function upMovebox() {

    var sourceq = document.getElementById("sourceq");    
    var up = document.getElementById("up");
    sourceq.style.display="block";
        if (sourceq.classList.contains("moveBoxOn")) {
            sourceq.classList.remove("moveBoxOn");
            sourceq.classList.add("moveBoxOff");
            up.style.display="none";
            sourceq.style.animation = "moveBoxOff 3s forwards"; // Animasyonu başlat
        } 

  
  };
