document.addEventListener('DOMContentLoaded', () => {
    const imgLightBox = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(imgLightBox, {
        inDuration: 300,
        outDUration: 300
    });
});