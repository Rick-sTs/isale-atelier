/*
 * Isale Atelier - site configuration.
 *
 * This is the ONLY file you need to edit to connect the site to the real
 * WhatsApp number and Instagram profile. Every button on the site reads from here.
 */
window.SITE_CONFIG = {
  BUSINESS_NAME: 'Isale Atelier',

  // WhatsApp number: country code + number, digits only, no "+", spaces or dashes.
  // Real number provided by the owner's team: +504 3144-2488.
  WHATSAPP_NUMBER: '50431442488',

  // Instagram profile URL, provided by the owner's team: @isaleatelier.
  // If this is ever emptied (or contains "TODO") the footer Instagram link is hidden.
  INSTAGRAM_URL: 'https://www.instagram.com/isaleatelier/',

  // Prices are in Honduran lempiras ("L") - confirmed by the owner's team.
  CURRENCY_SYMBOL: 'L',

  // Spoken currency name, read by screen readers after each price (the symbol alone is read as a letter).
  // Change it together with CURRENCY_SYMBOL.
  CURRENCY_NAME: 'lempiras'
};
