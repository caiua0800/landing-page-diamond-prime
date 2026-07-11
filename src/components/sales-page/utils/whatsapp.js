// Contato de vendas Diamond Prime
const WHATSAPP_PHONE = '5547992276449';
const WHATSAPP_MESSAGE =
    'Olá, vim pela landing page do diamond prime, gostaria de saber mais sobre os diamantes';

export const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
};
