document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll(".progress");
    progressBars.forEach(bar => {
        const targetWidth = bar.getAttribute("data-width");
        bar.style.width = targetWidth;
    });
});
