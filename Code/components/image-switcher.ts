import { Entity } from 'aframe';

AFRAME.registerComponent('image-switcher', {
    schema: {
        id: { type: 'string', default: '' },
        src: { type: 'string', default: '' }
    },

    init() {
        this.el.addEventListener('click', () => {
            this.el.setAttribute('color', '#333333');
            document.getElementById(this.data.id)
                ?.querySelector('.painting')
                ?.setAttribute('src', this.data.src);
            document
                .querySelectorAll('#' + this.data.id + ' > .painting > .detail')
                .forEach(it => (it as Entity).object3D.visible = false);
        });
        this.el.addEventListener('mouseenter', () => {
            this.el.setAttribute('color', '#00008B');
        });
        this.el.addEventListener('mouseleave', () => {
            this.el.setAttribute('color', 'blue');

        });
    }
});
