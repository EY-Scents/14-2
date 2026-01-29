# Romantic Website (Front-end only)

What this is
- A small front-end-only romantic website built with HTML, CSS and JavaScript.
- Features:
  - Front-end login (mock, using localStorage).
  - Redirect to a private page after login.
  - Long Arabic love letter displayed with right-to-left layout.
  - Responsive image gallery with animated transitions and lightbox.
  - Mobile-friendly and modern romantic theme.

How to run
- Put the files in a folder (preserve the structure below).
- Open `index.html` in a web browser (Chrome/Firefox/Safari).
- Login using any username; password is optional (mock). Default demo password: `love` (case-sensitive). You can also log in with any non-empty username and password.

Files
- index.html — Login page and landing page.
- private.html — Private page with Arabic love letter and gallery (protected by front-end check).
- css/styles.css — All styling and responsive rules.
- js/app.js — Front-end logic: login, auth check, gallery lightbox, animations.

Notes
- This is front-end only and not secure for real authentication; do not use for real authentication.
- Images are hotlinked from Unsplash; replace with your own images by changing the image URLs in `private.html`.