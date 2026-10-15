const boton = document.getElementById('boing');
const sound = new Audio('assets/audio.mp3');

boton.addEventListener('click', () => {
    sound.play()
        .then(() => {
            console.log('Audio reproducido correctamente');
        })
        .catch(error => {
            console.error('Error al reproducir el audio:', error);
        });
}); 