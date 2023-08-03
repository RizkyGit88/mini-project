// FORM METHOD

function validateForm() {
    if (document.forms["formPendaftaran"]["nama"].value == "") {
        alert("Nama Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["nama"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["email"].value == "") {
        alert("Email Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["email"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["jurusan"].selectedIndex < 1) {
        alert("Pilih Jurusan.");
        document.forms["formPendaftaran"]["jurusan"].focus();
        return false;
    }
}

// SLIDER

var slideIndex = 1;
showSlide(slideIndex);

function nextslide(n) {
    showSlide(slideIndex += n);
}

function dotslide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("imgslide");
    var dot = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";
    }

    for (i = 0; i < slides.length; i++) {

        dot[i].className = dot[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";

    dot[slideIndex - 1].className += " active";

}