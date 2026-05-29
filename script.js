const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');


menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}


    function opengit() {
  window.open("https://github.com/drzn8", "_blank");
}
    function download() {
        const link = document.createElement('a');
        link.href = "./MyResume.pdf";
        link.download = 'Abhishek_Darsan_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
