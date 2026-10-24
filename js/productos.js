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
  },
  {
    id: 'bouquet-50-red-roses',
    category: 'bouquets',
    name: 'Ramo de 50 rosas rojas',
    description: 'Ramo de rosas.',
    price: 1850,
    image: 'img/bouquet-50-red-roses.jpg',
    thumb: 'img/thumbs/bouquet-50-red-roses.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Rosas rojas envueltas en papel blanco, con un lazo rojo, sostenidas por una mano.'
  },
  {
    id: 'bouquet-24-pink-roses',
    category: 'bouquets',
    name: 'Ramo de 24 rosas rosadas',
    description: 'Ramo de rosas con paniculata.',
    price: 1200,
    image: 'img/bouquet-24-pink-roses.jpg',
    thumb: 'img/thumbs/bouquet-24-pink-roses.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Rosas rosadas con flores pequeñas blancas, envueltas en papel blanco con listones rosados, sobre un soporte transparente.'
  },
  {
    id: 'pink-roses-bouquet',
    category: 'bouquets',
    name: 'Ramo de rosas con paniculata',
    description: 'Ramo de rosas con paniculata.',
    price: 880,
    image: 'img/pink-roses-bouquet-2.jpg',
    thumb: 'img/thumbs/pink-roses-bouquet-2.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Rosas rosadas con flores pequeñas blancas, envueltas en papel rosado con un lazo.'
  },
  {
    id: 'orange-gerbera-bouquet',
    category: 'bouquets',
    name: 'Ramo naranja con gerbera',
    description: 'Ramo con gerbera.',
    price: 1080,
    image: 'img/orange-gerbera-bouquet.jpg',
    thumb: 'img/thumbs/orange-gerbera-bouquet.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Flores en tonos naranja y crema envueltas en papel kraft con un lazo naranja, sostenidas por una mano.'
  },
  {
    id: 'sunflower-bouquet',
    category: 'bouquets',
    name: 'Ramo de girasoles',
    description: 'Ramo con girasoles y rosas, con eucalipto.',
    price: 1100,
    image: 'img/sunflower-bouquet.jpg',
    thumb: 'img/thumbs/sunflower-bouquet.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Girasoles y flores en tonos naranja envueltos en papel amarillo mostaza y café, sostenidos por una mano.'
  },
  {
    id: 'red-rose-basket',
    category: 'bouquets',
    name: 'Canasta de rosas rojas',
    description: 'Canasta de flores con rosas y eucalipto.',
    price: 1950,
    image: 'img/red-rose-basket.jpg',
    thumb: 'img/thumbs/red-rose-basket.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Canasta de mimbre con rosas rojas, flores blancas y rosadas y eucalipto, con un lazo rosado.'
  },
  {
    id: 'pink-flower-basket',
    category: 'bouquets',
    name: 'Canasta de flores en tonos rosa',
    description: 'Canasta de flores con gerberas y rosas.',
    price: 1500,
    image: 'img/pink-flower-basket.jpg',
    thumb: 'img/thumbs/pink-flower-basket.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Canasta de mimbre con flores rosadas, durazno y blancas sobre una base blanca, con un listón rosado largo.'
  },
  {
    id: 'heart-balloons-roses-box',
    category: 'gifts',
    name: 'Caja de rosas con globos de corazón',
    description: 'Caja de flores con tres globos en forma de corazón.',
    price: 3200,
    image: 'img/heart-balloons-roses-box.jpg',
    thumb: 'img/thumbs/heart-balloons-roses-box.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Caja redonda rosada con rosas y flores pequeñas, y tres globos rosados en forma de corazón.'
  },
  {
    id: 'bouquet-24-red-roses',
    category: 'bouquets',
    name: 'Ramo de 24 rosas rojas',
    description: 'Ramo de rosas con eucalipto.',
    price: 1200,
    image: 'img/bouquet-24-red-roses.jpg',
    thumb: 'img/thumbs/bouquet-24-red-roses.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Rosas rojas con eucalipto envueltas en papel blanco, con un listón rosado.'
  },
  {
    id: 'lily-rose-basket',
    category: 'bouquets',
    name: 'Canasta de flores con lirios',
    description: 'Canasta de flores con lirios y rosas.',
    price: 2300,
    image: 'img/lily-rose-basket.jpg',
    thumb: 'img/thumbs/lily-rose-basket.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Canasta de mimbre con lirios rosados, rosas blancas y rosadas y otras flores, con un moño rosado.'
  },
  {
    id: 'balloons-flower-box',
    category: 'gifts',
    name: 'Caja de flores con 6 globos de corazón',
    description: 'Caja de flores con 6 globos en forma de corazón.',
    price: 3800,
    image: 'img/balloons-flower-box.jpg',
    thumb: 'img/thumbs/balloons-flower-box.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Caja redonda rosada con flores rosadas y moradas, y un grupo de globos rosados en forma de corazón.'
  },
  {
    id: 'rose-gold-balloons-flower-box',
    category: 'gifts',
    name: 'Caja de flores con globos oro rosa',
    description: 'Caja de flores con dos globos en forma de corazón.',
    price: 2000,
    image: 'img/rose-gold-balloons-flower-box.jpg',
    thumb: 'img/thumbs/rose-gold-balloons-flower-box.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Caja redonda rosada con flores rosadas y blancas, y dos globos color oro rosa en forma de corazón.'
  },
  {
    id: 'bunny-gift-basket-balloons',
    category: 'gifts',
    personalizable: true,
    name: 'Canasta de regalo con globos',
    description: 'Canasta de regalo con peluche y globos en forma de corazón.',
    price: 2800,
    image: 'img/bunny-gift-basket-balloons.jpg',
    thumb: 'img/thumbs/bunny-gift-basket-balloons.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Canasta de mimbre con un peluche de conejo y tarjetas, sobre un pedestal blanco, con globos rosados en forma de corazón.'
  },
  {
    id: 'red-roses-gypsophila-bouquet',
    category: 'bouquets',
    name: 'Ramo de rosas rojas con paniculata',
    description: 'Ramo de rosas con paniculata.',
    price: 780,
    image: 'img/red-roses-gypsophila-bouquet.jpg',
    thumb: 'img/thumbs/red-roses-gypsophila-bouquet.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Rosas rojas con flores pequeñas blancas, envueltas en papel blanco con listones negros, sostenidas por una mano.'
  },
  {
    id: 'pink-flower-round-box',
    category: 'gifts',
    name: 'Caja redonda de flores',
    description: 'Caja de flores con rosas y claveles.',
    price: 2950,
    image: 'img/pink-flower-round-box.jpg',
    thumb: 'img/thumbs/pink-flower-round-box.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Caja redonda rosada con flores rosadas, durazno y blancas y un moño rosado, sobre un banco de madera.'
  },
  {
    id: 'lily-rose-large-basket',
    category: 'bouquets',
    name: 'Canasta grande de lirios y rosas',
    description: 'Canasta de mimbre con lirios, rosas y crisantemos.',
    price: 2700,
    image: 'img/lily-rose-large-basket.jpg',
    thumb: 'img/thumbs/lily-rose-large-basket.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Canasta de mimbre con lirios, rosas rosadas, crisantemos y flores pequeñas blancas, con un moño crema.'
  },
  {
    id: 'rose-gerbera-hydrangea-bouquet',
    category: 'bouquets',
    name: 'Ramo de rosas, gerberas y hortensias',
    description: 'Ramo con rosas, gerberas, hortensias y eucalipto.',
    price: 988,
    image: 'img/rose-gerbera-hydrangea-bouquet.jpg',
    thumb: 'img/thumbs/rose-gerbera-hydrangea-bouquet.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Rosas rosadas, gerberas blanca y durazno y hortensias azules en papel rosado, sostenidas por una mano.'
  },
  {
    id: 'roses-eucalyptus-bouquet',
    category: 'bouquets',
    name: 'Ramo de rosas con eucalipto',
    description: 'Rosas con eucalipto.',
    price: 800,
    image: 'img/roses-eucalyptus-bouquet.jpg',
    thumb: 'img/thumbs/roses-eucalyptus-bouquet.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Rosas blancas y durazno con eucalipto, en papel rosado y beige con un listón crema, sostenidas por una mano.'
  },
  {
    id: 'small-gerbera-basket',
    category: 'bouquets',
    name: 'Canasta pequeña con gerbera',
    description: 'Canasta con gerbera, lisianthus y rosas.',
    price: 1300,
    image: 'img/small-gerbera-basket.jpg',
    thumb: 'img/thumbs/small-gerbera-basket.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Canasta pequeña tejida con una gerbera rosada, lisianthus y rosas, con listones rosados largos, sostenida por una mano.'
  },
  {
    id: 'rose-hydrangea-basket',
    category: 'bouquets',
    name: 'Canasta de rosas y hortensias',
    description: 'Canasta con rosas, lisianthus, gerbera y hortensias.',
    price: 2000,
    image: 'img/rose-hydrangea-basket.jpg',
    thumb: 'img/thumbs/rose-hydrangea-basket.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Canasta de mimbre con rosas amarillas, lisianthus blancos, gerbera y hortensias azules, con un moño blanco.'
  },
  {
    id: 'woven-gerbera-carnation-basket',
    category: 'bouquets',
    name: 'Canasta de gerberas y claveles',
    description: 'Canasta con gerberas, rosas y claveles.',
    price: 1890,
    image: 'img/woven-gerbera-carnation-basket.jpg',
    thumb: 'img/thumbs/woven-gerbera-carnation-basket.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Canasta tejida con gerberas, rosas y claveles en tonos durazno y rosado, con eucalipto.'
  },
  {
    id: 'tall-handle-wildflower-basket',
    category: 'bouquets',
    name: 'Canasta con gerberas y flores silvestres',
    description: 'Canasta con gerberas, rosas y flores silvestres.',
    price: 1600,
    image: 'img/tall-handle-wildflower-basket.jpg',
    thumb: 'img/thumbs/tall-handle-wildflower-basket.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Canasta de mimbre con asa alta, con gerberas durazno, rosas y flores silvestres, sobre un banco de madera.'
  },
  {
    id: 'bouquet-50-roses-gypsophila',
    category: 'bouquets',
    name: 'Ramo grande de 50 rosas',
    description: 'Ramo de rosas con paniculata.',
    price: 2700,
    image: 'img/bouquet-50-roses-gypsophila.jpg',
    thumb: 'img/thumbs/bouquet-50-roses-gypsophila.jpg',
    width: 900, height: 1125, thumbWidth: 480, thumbHeight: 600,
    alt: 'Ramo redondo de rosas rojas y rosadas con paniculata, en papel rosado y blanco, sostenido por una mano.'
  }
];
