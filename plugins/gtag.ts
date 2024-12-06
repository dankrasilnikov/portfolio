export default ({ app }) => {
    if (process.env.NODE_ENV !== 'production') return;

    // Подключение Google Tag Manager
    (function () {
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-CT4413VL1D';
        script.async = true;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag() {
            window.dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-CT4413VL1D');
    })();
};
