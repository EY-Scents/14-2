// Check login (front-end only, no real security!)
if (localStorage.getItem('romanticLoggedIn') !== 'true') {
    window.location.href = 'index.html';
}

// Logout function
function logout() {
    localStorage.removeItem('romanticLoggedIn');
    window.location.href = 'index.html';
}

// Animate fade-in container on load
window.onload = function() {
    document.querySelector('.private-container').classList.add('fade-in');
    loadGallery();
};

// Gallery images (add image filenames here)
const imageList = [
    'couple1.jpg',
    'couple2.jpg',
    'couple3.jpg',
    'couple4.jpg'
];

// Dynamically load images into gallery
function loadGallery() {
    const gallery = document.getElementById('gallery');
    imageList.forEach(img => {
        const imgElem = document.createElement('img');
        imgElem.src = `images/${img}`;
        imgElem.alt = "ذكرياتنا";
        // Optional: click to enlarge effect
        imgElem.onclick = () => showLightbox(`images/${img}`);
        gallery.appendChild(imgElem);
    });
}

/** (Optional) Simple lightbox effect on image click **/
function showLightbox(imgSrc) {
    // Prevent multiple overlays
    if(document.getElementById('lightboxOverlay')) return;
    const overlay = document.createElement('div');
    overlay.id = 'lightboxOverlay';
    overlay.style.position = 'fixed';
    overlay.style.inset = 0;
    overlay.style.background = 'rgba(255, 215, 230, 0.94)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = 100;
    overlay.onclick = () => overlay.remove();

    const img = document.createElement('img');
    img.src = imgSrc;
    img.style.maxWidth = '90vw';
    img.style.maxHeight = '82vh';
    img.style.boxShadow = '0 2px 24px #d7266077';
    img.style.borderRadius = '18px';
    img.alt = "ذكرياتنا";

    overlay.appendChild(img);
    document.body.appendChild(overlay);
      }
