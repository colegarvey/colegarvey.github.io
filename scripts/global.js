// const footer = document.getElementById("social-footer");

// window.addEventListener("scroll", () => {
// const scrollPos = window.innerHeight + window.scrollY;
// const pageHeight = document.body.offsetHeight;

// if (scrollPos >= pageHeight - 5) {
//     footer.classList.add("show");
// } else {
//     footer.classList.remove("show");
// }
// });

function initFooterWatcher() {
const footer = document.getElementById("social-footer");

window.addEventListener("scroll", () => {
    const scrollPos = window.innerHeight + window.scrollY;
    const pageHeight = document.body.offsetHeight;

    if (scrollPos >= pageHeight - 10) {
    footer.classList.add("show");
    } else {
    footer.classList.remove("show");
    }
});
}

// Run on full load
window.addEventListener("DOMContentLoaded", initFooterWatcher);

// Run AGAIN when returning from another page (cache restore)
window.addEventListener("pageshow", (e) => {
if (e.persisted) {
    initFooterWatcher();
}
});
