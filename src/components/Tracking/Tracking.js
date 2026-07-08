import { useEffect } from 'react';

// IDs de traqueamento
const GTM_ID = 'GTM-KRXS2DL2';
const META_PIXEL_ID = '2111545473102882';

/**
 * Injeta Google Tag Manager + Meta Pixel.
 * Renderizado apenas na rota /lp (ver App.js), então o traqueamento
 * NÃO roda na home nem em /diamantes/modo-escuro.
 */
export default function Tracking() {
  useEffect(() => {
    // Google Tag Manager
    if (!window.__gtmLoaded) {
      window.__gtmLoaded = true;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      const gtm = document.createElement('script');
      gtm.async = true;
      gtm.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      document.head.appendChild(gtm);

      // GTM noscript (fallback)
      const ns = document.createElement('noscript');
      ns.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
      document.body.insertBefore(ns, document.body.firstChild);
    }

    // Meta Pixel
    if (!window.__fbqLoaded) {
      window.__fbqLoaded = true;
      /* eslint-disable */
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      /* eslint-enable */
      window.fbq('init', META_PIXEL_ID);
      window.fbq('track', 'PageView');
    }
  }, []);

  return null;
}
