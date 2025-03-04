function enlargeImage(imgElement) {
    const imageViewer = document.getElementById("image-viewer");
    const fullImage = document.getElementById("full-image");

    fullImage.src = imgElement.src;
    imageViewer.classList.remove("hidden");
}

function closeImage() {
    document.getElementById("image-viewer").classList.add("hidden");
}
function breakWebsite() {
    document.body.innerHTML = ''; // Wipes out everything
    document.body.style.background = "hotpink"; // Annoying color
    document.body.innerHTML = '<h1 style="font-size: 100px; text-align: center; margin-top: 20%;">404 BABAK NOT FOUND</h1>';

    setTimeout(() => {
        let chaos = document.createElement("div");
        chaos.style.position = "absolute";
        chaos.style.top = "50%";
        chaos.style.left = "50%";
        chaos.style.transform = "translate(-50%, -50%)";
        chaos.style.fontSize = "50px";
        chaos.style.color = "red";
        chaos.innerText = "YOU BROKE BABAK BARBERS!";
        document.body.appendChild(chaos);
    }, 2000);
}
document.addEventListener("DOMContentLoaded", function () {
    const reviewsSection = document.querySelector(".reviews");

    function checkVisibility() {
        const rect = reviewsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            reviewsSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Run once in case it's already in view
});
document.addEventListener("DOMContentLoaded", function () {
    const reviewsSection = document.querySelector(".reviews");
    const babakSection = document.querySelector(".barber");

    function checkVisibility() {
        const windowHeight = window.innerHeight;
        
        if (reviewsSection.getBoundingClientRect().top < windowHeight - 100) {
            reviewsSection.classList.add("visible");
        }

        if (babakSection.getBoundingClientRect().top < windowHeight - 100) {
            babakSection.classList.add("visible");
        }
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Run once in case it's already in view
});
