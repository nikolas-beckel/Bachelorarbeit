AFRAME.registerComponent('change-position-on-hover', {
    init: function () {
        const {el} = this;
        const camera = document.getElementById('camera');

        el.addEventListener('mouseenter', () => {
            camera.object3D.position.set(-3.325, 5.5, 0);
        });
    }
});

