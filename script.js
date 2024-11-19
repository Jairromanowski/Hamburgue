document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const imagePath = container.getAttribute("data-image-path");

    const images = container.querySelectorAll(".card img");
    images.forEach(img => {
        img.setAttribute("src", imagePath);
    });
});
