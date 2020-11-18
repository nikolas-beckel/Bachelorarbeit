import { Entity } from 'aframe';
import { frameAddition, paintingWidth } from '../../utils/utils';
import ImageSwitcherComponent from './ImageSwitcher.models';

AFRAME.registerComponent<ImageSwitcherComponent>('image-switcher', {
    /** Default-Farbe der Buttons. */
    defaultColor: 'blue',
    /** Farbe, welche beim Hovern über die Buttons erscheint. */
    hoverColor: '#00008B',

    schema: {
        id: { type: 'string', default: '' },
        src: { type: 'string', default: '' },
        ratio: {type: 'number', default: 1 }
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
        const painting = document.getElementById(this.data.id)!;
        painting.setAttribute('src', this.data.src);
        painting.setAttribute('width', paintingWidth.toString());
        painting.setAttribute('height', (paintingWidth * this.data.ratio).toString());
        const frame = painting.querySelector('.frame')!;
        frame.setAttribute('height', (paintingWidth * this.data.ratio + frameAddition).toString());
    },

    /** Versteckt die DetailPoint-Buttons. */
    hideDetailSpheres() {
        document
            .querySelectorAll('#' + this.data.id + ' > .detail')
            .forEach(it => (it as Entity).object3D.visible = false);
    }
});
