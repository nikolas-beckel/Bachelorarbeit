import { Entity } from 'aframe';
import ImageSwitcherComponent from './ImageSwitcher.model';

AFRAME.registerComponent<ImageSwitcherComponent>('image-switcher', {
    defaultColor: 'blue',
    hoverColor: '#00008B',

    schema: {
        id: { type: 'string', default: '' },
        src: { type: 'string', default: '' }
    },

    init() {
        this.el.addEventListener('click', () => {
            // Button verfärben, um den "Klick" visuell darzustellen. Nach 200ms
            // wieder auf die ursprüngliche Farbe ändern.
            this.el.setAttribute('color', '#333333');

            this.setDetailImage();
            this.hideDetailSpheres();
        });

        this.el.addEventListener('mouseenter', () => {
            this.el.setAttribute('color', this.hoverColor);
        });
        this.el.addEventListener('mouseleave', () => {
            this.el.setAttribute('color', this.defaultColor);
        });
    },

    setDetailImage() {
        document.getElementById(this.data.id)
            ?.querySelector('.painting')
            ?.setAttribute('src', this.data.src);
    },

    hideDetailSpheres() {
        document
            .querySelectorAll('#' + this.data.id + ' > .painting > .detail')
            .forEach(it => (it as Entity).object3D.visible = false);
    }
});
