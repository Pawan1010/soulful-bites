// src/utils/helpers.js

export const PHONE = "919326176751";
export const PHONE_DISPLAY = "+91 93261 76751";
export const INSTAGRAM = "@soulfulbites";
export const INSTAGRAM_URL = "https://instagram.com/soulfulbites";

/**
 * Build a WhatsApp URL with a pre-filled message
 * @param {string} message
 * @returns {string}
 */
export const buildWhatsAppURL = (message = "") => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${PHONE}${encoded ? `?text=${encoded}` : ""}`;
};

/**
 * Build a tel: link
 * @returns {string}
 */
export const buildCallURL = () => `tel:+${PHONE}`;

/**
 * Render star string from number
 * @param {number} count
 * @returns {string}
 */
export const renderStars = (count) => "★".repeat(count);
