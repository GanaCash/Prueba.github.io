document.getElementById('htmlInput').addEventListener('input', function() {
    const previewDiv = document.getElementById('preview');
    previewDiv.innerHTML = this.value; // Muestra la previsualización del HTML
});
