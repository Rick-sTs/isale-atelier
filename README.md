# Isale Atelier catalog site

A small, fast, static catalog site for Isale Atelier (flowers and gift boxes).
Plain HTML, CSS and JavaScript: no build step, no framework, no server code.
Every "Pedir por WhatsApp" button opens a WhatsApp chat with the product and price already written.

It works in two ways:

- Double-click `index.html` and it opens in your browser (no server needed).
- Upload the whole folder to any static host (see [Deploy for free](#deploy-for-free)).

## Folder layout

```
index.html          page structure and text
css/styles.css      all styles (colors are CSS variables at the top)
js/config.js        WhatsApp number, Instagram link, currency symbol  <- EDIT THIS
js/productos.js     the product list (one object per product)          <- EDIT THIS
js/app.js           catalog rendering, filters, lightbox, WhatsApp links
img/                large product photos (900 px), thumbs/ (480 px), logo, favicon, social preview
favicon.ico
README.md
```

## Before you publish (checklist)

1. Set the real Instagram URL in `js/config.js` (next section). `INSTAGRAM_URL` is empty for now, so the
   footer Instagram link is hidden. Send a test message from a phone to check that the WhatsApp number in
   `WHATSAPP_NUMBER` opens the right chat.
   The site fails safe: if `WHATSAPP_NUMBER` is missing or a placeholder, every WhatsApp button is disabled
   (it has no link), and if `INSTAGRAM_URL` is empty or contains `TODO`, the Instagram link is hidden.
   When you open the page by double-clicking it or on `localhost`, a dark bar at the top says
   "Configura js/config.js" and lists what is missing. That bar never appears on the published site.
2. Currency. Prices in the photos have no currency sign; the site shows them as lempiras (`L 1,200`) and
   screen readers say "lempiras". `js/config.js` records this as confirmed by the owner's team. If it is wrong,
   change both `CURRENCY_SYMBOL` and `CURRENCY_NAME`.
3. Confirm the prices with Isale Atelier (see [Prices](#prices)).
4. After the first deploy, make `og:image` absolute and add `og:url` in `index.html`
   with the address of the site (social networks ignore relative image links, so until then a shared link
   has no preview picture).
5. Photos with people. These photos show identifiable people, including children and a baby, and some
   handwritten names: `box-17-birthday`, `box-13-birthday`, `chest-23-birthday`, `photo-collage-frame`,
   `gingham-photo-frame`, `balloon-gift-basket`, `wicker-gift-basket`. Get the owner's written confirmation that
   the people shown (and the parents of the children) agreed to public use. If not, remove those products
   (delete their blocks in `js/productos.js`) until photos without faces are available. Do not blur or crop
   the photos: customers must receive what they see.
6. Photo ownership. `peach-yellow-bouquet` shows a round sticker on the wrapping and `blush-bouquet` shows a
   printed label. Confirm these are the owner's own bouquets and photos. If the real wrapping differs, replace the
   photos; do not edit the labels out. Some gift photos also show third-party items (plush toy, skincare and
   snack packaging) exactly as photographed; the site does not claim any brand relationship.
7. Product text. Names and descriptions say only what the photos show (no flower counts, no species that cannot
   be told from a photo, no "handmade" or "customizable" claims). Add such details only after the owner confirms
   them in writing.

## Set the WhatsApp number, Instagram and currency

Open `js/config.js` and edit these values:

| Value             | What to write                                                        | Example                                |
| ----------------- | -------------------------------------------------------------------- | -------------------------------------- |
| `WHATSAPP_NUMBER` | Country code + number, digits only (no `+`, spaces or dashes)        | `'50412345678'` (Honduras is `504`)    |
| `INSTAGRAM_URL`   | Full link to the Instagram profile                                   | `'https://www.instagram.com/your_handle/'` |
| `CURRENCY_SYMBOL` | Symbol placed before every price                                     | `'L'`                                  |
| `CURRENCY_NAME`   | Currency name read by screen readers after every price               | `'lempiras'`                           |
| `BUSINESS_NAME`   | Name used in the WhatsApp messages                                   | `'Isale Atelier'`                      |

Save the file and reload the page. Every WhatsApp and Instagram button on the site reads these values,
so there is nothing else to change.

## Prices

Each price in `js/productos.js` was read from the price written on the original WhatsApp catalog photo
and re-checked against the full-resolution originals (13 prices). A product with `price: null` shows
"Consultar precio" and its WhatsApp message asks for the price.

Products without a price in any photo (shown as "Consultar precio"): `lily-gerbera-large-bouquet`,
`orange-yellow-bouquets`, `white-pastel-pink-bouquet`, `balloons-plush-gift-set`, `heart-box-roses-gift`,
`birthday-envelope-card`.

`photo-collage-frame` shows `350`. The copy of the photo used on the site has no price, but the original
WhatsApp photo of the same framed collage on marble (original #5) shows a clear, uncut "350". The other frame,
`gingham-photo-frame`, is also `350` (original #7). If the owner says the collage frame costs something else,
change the number, or set `price: null` to show "Consultar precio".

## Add a product

1. **Prepare two copies of the photo** (JPEG):
   - large: about 900 px on the long side, quality about 82, saved in `img/`
   - thumbnail: 480 px wide, saved in `img/thumbs/` with the same file name
   Use any image editor. Do not crop away parts of the product and do not retouch it:
   customers must receive what they see.
2. **Add an entry** to the list in `js/productos.js`. Copy an existing block and change the values:

   ```js
   {
     id: 'my-new-bouquet',                      // unique, lowercase, no spaces
     category: 'bouquets',                      // 'bouquets' or 'gifts'
     name: 'Ramo de girasoles',                 // shown on the card
     description: 'Girasoles y eucalipto en papel crema.',   // one short line, only what the photo shows
     price: 650,                                // number, or null for "Consultar precio"
     image: 'img/my-new-bouquet.jpg',
     thumb: 'img/thumbs/my-new-bouquet.jpg',
     width: 720, height: 900,                   // pixel size of the large photo
     thumbWidth: 480, thumbHeight: 600,         // pixel size of the thumbnail
     alt: 'Ramo de girasoles con eucalipto, envuelto en papel crema y atado con un listón amarillo.'   // colors and shapes for someone who cannot see the photo
   },
   ```

   Text rules: `description` says only what the photo shows (no flower counts, no species you cannot tell from
   the photo, no "handmade", "custom" or "fresh" claims). `alt` describes the picture (colors, shapes, visible
   text) and does not repeat the product name, which is already the card heading.

   `width`/`height` (right-click the file, Properties, Details on Windows) keep the page from jumping while
   photos load. Products appear in the order of the list.
3. Save and reload the page. The counter, the filters and the lightbox pick the new product up automatically.

To remove a product, delete its block. To change a price, edit its `price`.

To add a new filter category (for example "Globos"), add a chip in `index.html` (next to the existing
`data-filter` buttons), add its label to `CATEGORY_LABELS` in `js/app.js`, and use the new category name
in the products.

### Regenerating the photos from the source folder

`../sitio_build/build_site_assets.py` (outside this folder, not needed for deploying) rebuilds every resized
photo, the logo files, the favicon and the social preview from the `seleccion` and `campana/assets` folders.
It needs Python with Pillow and numpy: `python build_site_assets.py`.

## Test it locally

Double-clicking `index.html` is enough. To test it the way a host serves it:

```
cd sitio
python -m http.server 8000
```

Then open http://localhost:8000 and press Ctrl+C in the terminal to stop the server.

## Deploy for free

The site is only static files, so any of these work. Upload the contents of this `sitio` folder
(`index.html` must be at the top level of what you upload).

### Netlify (drag and drop)

1. Go to https://app.netlify.com/drop and sign in (a free account is enough; Netlify may ask you to sign in
   to keep the site online).
2. Drag the whole `sitio` folder onto the page.
3. Wait for the upload. Netlify shows the live address (`something.netlify.app`).
4. Optional: in *Site configuration > Change site name* pick a nicer name, or add your own domain in *Domain management*.
5. To update the site later, open the site in Netlify, go to *Deploys* and drag the folder again.

### Cloudflare Pages

1. Create a free account at https://dash.cloudflare.com and open *Workers & Pages*.
2. Choose *Create application > Pages > Upload assets* (direct upload).
3. Give the project a name and click *Create project*.
4. Drag the `sitio` folder (or select its files) into the upload area and click *Deploy site*.
5. The site is live at `your-project.pages.dev`. To update it, open the project and create a new deployment with the updated folder.
6. Optional: connect a Git repository instead, leaving the build command empty and the output directory as `/`.

### GitHub Pages

1. Create a free account at https://github.com and a new public repository (for example `isale-atelier`).
2. Upload the contents of the `sitio` folder to the repository root (*Add file > Upload files*), so that
   `index.html` is at the top level, and commit.
3. Open *Settings > Pages*. Under *Build and deployment*, set *Source* to *Deploy from a branch*,
   choose the `main` branch and the `/ (root)` folder, and save.
4. After a minute or two the site is live at `https://YOUR_USER.github.io/isale-atelier/`.
   All links inside the site are relative, so it works under that sub-path.
5. To update the site, upload the changed files to the repository again and commit.

### After deploying

- Replace the `og:image` link in `index.html` with the absolute address, for example
  `https://YOUR_SITE/img/og-image.jpg`, and add `<meta property="og:url" content="https://YOUR_SITE/">`.
- Open the live site on a phone, tap "Pedir por WhatsApp" on any product and check that WhatsApp opens the right chat.
- Put the site address in the Instagram profile link.
- Without JavaScript the WhatsApp buttons in the header, hero and footer keep a plain `https://wa.me/` link
  (the number lives only in `js/config.js`) and the catalog shows a notice. This is deliberate: the catalog needs
  JavaScript anyway.

## Accessibility and performance notes

- Semantic landmarks, a "skip to catalog" link, visible focus outlines, alt text for every photo and
  respect for `prefers-reduced-motion`.
- The lightbox uses the native `<dialog>` element: Esc closes it, the left/right arrow keys move between photos,
  and focus goes back to the photo of the product you were last looking at. While the next large photo loads it is
  hidden, so a photo never appears under another product's name and price.
- Text colors were checked against their backgrounds (at least 4.5:1 for normal text).
- Photos load lazily, have reserved sizes (no layout shift) and each product has a small thumbnail for the grid.
  The `sizes` hint in `js/app.js` matches the grid (2 columns on phones, 3 from 720px, 4 from 1100px), so most
  phones download only the thumbnails; very sharp screens (3x) can still choose the large photo.
- Fonts (Fraunces, with its italic, and DM Sans) come from Google Fonts with `display=swap`; if they cannot load, the
  page falls back to Georgia and the system font. To avoid the external request, remove the Google Fonts `<link>`
  tags in `index.html`. The fonts are not bundled because they cannot be downloaded into this project.
- The catalog is drawn by JavaScript from `js/productos.js`; without JavaScript the page shows a short notice.

## Brand

Colors and the logo come from the Isale Atelier logo and the palette reference: sage green `#B7BB7A`,
pink `#F297A0`, blush `#F9D0CE` and cream paper `#F5EBDC`. They are CSS variables at the top of `css/styles.css`.
