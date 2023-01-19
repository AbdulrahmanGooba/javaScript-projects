const aAndQ = document.getElementsByClassName("faq-page");
let i;
for (i = 0; i < aAndQ.length; i++) {
  aAndQ[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}