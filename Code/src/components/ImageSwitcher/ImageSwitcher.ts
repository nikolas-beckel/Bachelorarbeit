import { Entity } from 'aframe';
import ImageSwitcherComponent from './ImageSwitcher.models';

AFRAME.registerComponent<ImageSwitcherComponent>('image-switcher', {
    /** Default-Farbe der Buttons. */
    defaultColor: 'blue',
    /** Farbe, welche beim Hovern über die Buttons erscheint. */
    hoverColor: '#00008B',

    schema: {
        id: { type: 'string', default: '' },
        src: { type: 'string', default: '' }
    },

    init() {
        this.el.addEventListener('click', () => {
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

    /** Ersetzt das Gemälde durch die Nahaufnahme. */
    setDetailImage() {
        document.getElementById(this.data.id)!
            .setAttribute('src', this.data.src);
    },

    /** Versteckt die DetailPoint-Buttons. */
    hideDetailSpheres() {
        document
            .querySelectorAll('#' + this.data.id + ' > .detail')
            .forEach(it => (it as Entity).object3D.visible = false);
    }
});
