const useAddToBookmarks = () => {
    if (window.sidebar && window.sidebar.addPanel) {
        window.sidebar.addPanel(document.title, window.location.href, ''); // Firefox
    } else if (window.external && ('AddFavorite' in window.external)) {
        window.external.AddFavorite(window.location.href, document.title); // Internet Explorer
    } else {
        alert('Por favor, utiliza el atajo de teclado (ctrl+d) o la opción de menú de tu navegador para agregar esta página a los marcadores.');
    }
};

export default useAddToBookmarks;
