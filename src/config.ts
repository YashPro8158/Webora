// ─────────────────────────────────────────────────────────────
// WEBORA — Central site configuration
// Replace the values below to customize the website.
// ─────────────────────────────────────────────────────────────

export const SITE_CONFIG = {
  brand: 'WEBORA',
  tagline: 'Websites That Turn Local Businesses Into Leads.',

  // Replace this WhatsApp number (international format, no +, no spaces)
  whatsappNumber: '919000000000',

  email: 'hello@webora.studio',
  instagram: 'https://instagram.com/webora.studio',
  location: 'Delhi NCR, India',

  defaultWhatsAppName: 'Business Owner',
} as const;

// Pre-filled WhatsApp message used across all CTAs
export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi Webora, I'm interested in getting a website for my business. I'd like to see a demo.";

export function whatsappLink(
  message: string = DEFAULT_WHATSAPP_MESSAGE,
  number: string = SITE_CONFIG.whatsappNumber,
): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
