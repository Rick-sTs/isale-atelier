/*
 * Isale Atelier - product catalog data.
 *
 * Loaded as a plain script (not fetched) so index.html also works when it is
 * double-clicked from the file system. One object per product, in display order.
 *
 * Fields
 *   id           unique, lowercase, kebab-case
 *   category     'bouquets' or 'gifts' (the two filter chips: Ramos / Regalos y cajas)
 *   name         product name shown on the card (Spanish, customer-facing)
 *   description  one short line that says ONLY what the photo shows. No flower counts, no flower
 *                species that cannot be told from the photo, no claims (handmade, custom, fresh...).
 *   price        number in the configured currency, or null -> "Consultar precio"
 *   image        large photo (about 900 px long side), used in the lightbox
 *   thumb        small photo (480 px wide), used in the grid
 *   width/height pixel size of `image`;  thumbWidth/thumbHeight: pixel size of `thumb`
 *                (they reserve space so the page does not jump while photos load)
 *   alt          what a person who cannot see the photo needs to know: colors, shapes, visible text.
 *                Do not repeat the product name (it is already the card heading).
 *
 * Prices: every number below was read from the price overlay of the original WhatsApp catalog
 * photo and re-checked against the full-resolution originals. Products with price null showed
 * no price in any photo. Sources for the two picture frames:
 *   photo-collage-frame  350  original WhatsApp photo #5 (framed collage on marble, "350" top left)
 *   gingham-photo-frame  350  original WhatsApp photo #7 (gingham frame, "350" top center)
 */
window.PRODUCTOS = [
  {
    id: 'pink-eucalyptus-bouquet',
    category: 'bouquets',
    name: 'Ramo rosa con eucalipto',
    description: '7 rosas, 4 claveles, 3 gerberas, lisianthus y mini rosas, con eucaliptos.',
    price: 1100,
    image: 'img/pink-eucalyptus-bouquet.jpg',
    thumb: 'img/thumbs/pink-eucalyptus-bouquet.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Foto de Ramo rosa con eucalipto. 7 rosas, 4 claveles, 3 gerberas, lisianthus y mini rosas, con eucaliptos.'
  },
  {
    id: 'box-17-birthday',
    category: 'gifts',
    personalizable: true,
    name: 'Caja de cumpleaños',
    description: 'Caja de regalo de cumpleaños.',
    price: 560,
    image: 'img/box-17-birthday.jpg',
    thumb: 'img/thumbs/box-17-birthday.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Foto de Caja de cumpleaños. Caja de regalo de cumpleaños.'
  },
  {
    id: 'peach-yellow-bouquet',
    category: 'bouquets',
    name: 'Ramo durazno y amarillo',
    description: '3 rosas, 2 gerberas, crisantemos, lisianthus y lirios, con eucaliptos.',
    price: 1200,
    image: 'img/peach-yellow-bouquet.jpg',
    thumb: 'img/thumbs/peach-yellow-bouquet.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Foto de Ramo durazno y amarillo. 3 rosas, 2 gerberas, crisantemos, lisianthus y lirios, con eucaliptos.'
  },
  {
    id: 'hydrangea-gerbera-bouquet',
    category: 'bouquets',
    name: 'Ramo con hortensias',
    description: 'Gerberas, lirios y hortensias, con eucaliptos.',
    price: 1350,
    image: 'img/hydrangea-gerbera-bouquet.jpg',
    thumb: 'img/thumbs/hydrangea-gerbera-bouquet.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Foto de Ramo con hortensias. Gerberas, lirios y hortensias, con eucaliptos.'
  },
  {
    id: 'balloon-gift-basket',
    category: 'gifts',
    personalizable: true,
    name: 'Canasta con globo de cumpleaños',
    description: 'Canasta de regalo de cumpleaños.',
    price: 995,
    image: 'img/balloon-gift-basket.jpg',
    thumb: 'img/thumbs/balloon-gift-basket.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Foto de Canasta con globo de cumpleaños. Canasta de regalo de cumpleaños.'
  },
  {
    id: 'white-gerbera-bouquet',
    category: 'bouquets',
    name: 'Ramo blanco con gerberas',
    description: '2 gerberas, 4 claveles, lisianthus y campánulas.',
    price: 499,
    image: 'img/white-gerbera-bouquet.jpg',
    thumb: 'img/thumbs/white-gerbera-bouquet.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Foto de Ramo blanco con gerberas. 2 gerberas, 4 claveles, lisianthus y campánulas.'
  },
  {
    id: 'chest-23-birthday',
    category: 'gifts',
    personalizable: true,
    name: 'Baúl de cumpleaños',
    description: 'Baúl de regalo de cumpleaños.',
    price: 600,
    image: 'img/chest-23-birthday.jpg',
    thumb: 'img/thumbs/chest-23-birthday.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Foto de Baúl de cumpleaños. Baúl de regalo de cumpleaños.'
  },
  {
    id: 'blush-bouquet',
    category: 'bouquets',
    name: 'Ramo blush con gerbera',
    description: 'Gerbera, rosas, mini rosas y claveles, con eucaliptos.',
    price: 585,
    image: 'img/blush-bouquet.jpg',
    thumb: 'img/thumbs/blush-bouquet.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Foto de Ramo blush con gerbera. Gerbera, rosas, mini rosas y claveles, con eucaliptos.'
  },
  {
    id: 'birthday-envelope-card',
    category: 'gifts',
    name: 'Sobre y tarjeta de cumpleaños',
    description: 'Sobre y tarjeta ilustrados para cumpleaños.',
    price: null,
    image: 'img/birthday-envelope-card.jpg',
    thumb: 'img/thumbs/birthday-envelope-card.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Foto de Sobre y tarjeta de cumpleaños. Sobre y tarjeta ilustrados para cumpleaños.'
  },
  {
    id: 'box-13-birthday',
    category: 'gifts',
    personalizable: true,
    name: 'Caja de regalo',
    description: 'Caja de regalo de cumpleaños.',
    price: 800,
    image: 'img/box-13-birthday.jpg',
    thumb: 'img/thumbs/box-13-birthday.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Foto de Caja de regalo. Caja de regalo de cumpleaños.'
  },
  {
    id: 'white-pastel-pink-bouquet',
    category: 'bouquets',
    name: 'Ramo blanco y rosa pastel',
    description: '3 rosas, claveles, ranúnculo, alstroemerias, crisantemos y ammi.',
    price: null,
    image: 'img/white-pastel-pink-bouquet.jpg',
    thumb: 'img/thumbs/white-pastel-pink-bouquet.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Foto de Ramo blanco y rosa pastel. 3 rosas, claveles, ranúnculo, alstroemerias, crisantemos y ammi.'
  },
  {
    id: 'wicker-gift-basket',
    category: 'gifts',
    personalizable: true,
    name: 'Canasta de regalo Happy Birthday',
    description: 'Canasta de mimbre de cumpleaños.',
    price: 890,
    image: 'img/wicker-gift-basket.jpg',
    thumb: 'img/thumbs/wicker-gift-basket.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Foto de Canasta de regalo Happy Birthday. Canasta de mimbre de cumpleaños.'
  },
  {
    id: 'gingham-photo-frame',
    category: 'gifts',
    personalizable: true,
    name: 'Cuadro gingham con fotos',
    description: 'Cuadro de recuerdos estilo gingham.',
    price: 350,
    image: 'img/gingham-photo-frame.jpg',
    thumb: 'img/thumbs/gingham-photo-frame.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Foto de Cuadro gingham con fotos. Cuadro de recuerdos estilo gingham.'
  },
  {
    id: 'balloons-plush-gift-set',
    category: 'gifts',
    personalizable: true,
    name: 'Set de globos, peluche y gerberas',
    description: 'Set de regalo de cumpleaños.',
    price: null,
    image: 'img/balloons-plush-gift-set.jpg',
    thumb: 'img/thumbs/balloons-plush-gift-set.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Foto de Set de globos, peluche y gerberas. Set de regalo de cumpleaños.'
  },
  {
    id: 'love-lily-bag',
    category: 'bouquets',
    name: 'Bolsa LOVE con lirios',
    description: 'Lirios, rosas y statice.',
    price: 1500,
    image: 'img/love-lily-bag.jpg',
    thumb: 'img/thumbs/love-lily-bag.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Foto de Bolsa LOVE con lirios. Lirios, rosas y statice.'
  },
  {
    id: 'photo-collage-frame',
    category: 'gifts',
    personalizable: true,
    name: 'Cuadro de recuerdos con fotos',
    description: 'Cuadro collage de recuerdos.',
    price: 350,
    image: 'img/photo-collage-frame.jpg',
    thumb: 'img/thumbs/photo-collage-frame.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Foto de Cuadro de recuerdos con fotos. Cuadro collage de recuerdos.'
  },
  {
    id: 'orange-yellow-bouquets',
    category: 'bouquets',
    name: 'Flores amarillas',
    description: 'Con eucaliptos.',
    price: null,
    image: 'img/orange-yellow-bouquets.jpg',
    thumb: 'img/thumbs/orange-yellow-bouquets.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Foto de Flores amarillas. Con eucaliptos.'
  },
  {
    id: 'heart-box-roses-gift',
    category: 'gifts',
    personalizable: true,
    name: 'Caja corazón con rosas',
    description: 'Caja de regalo en forma de corazón.',
    price: null,
    image: 'img/heart-box-roses-gift.jpg',
    thumb: 'img/thumbs/heart-box-roses-gift.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Foto de Caja corazón con rosas. Caja de regalo en forma de corazón.'
  },
  {
    id: 'lily-gerbera-large-bouquet',
    category: 'bouquets',
    name: 'Ramo grande de lirios y gerberas',
    description: 'Lirios y gerberas, con eucaliptos.',
    price: null,
    image: 'img/lily-gerbera-large-bouquet.jpg',
    thumb: 'img/thumbs/lily-gerbera-large-bouquet.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Foto de Ramo grande de lirios y gerberas. Lirios y gerberas, con eucaliptos.'
  },
  {
    id: 'keepsake-mailbox',
    category: 'gifts',
    personalizable: true,
    name: 'Buzón de regalo',
    description: 'Buzón decorativo de recuerdos.',
    price: 650,
    image: 'img/keepsake-mailbox.jpg',
    thumb: 'img/thumbs/keepsake-mailbox.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Foto de Buzón de regalo. Buzón decorativo de recuerdos.'
  }
];
