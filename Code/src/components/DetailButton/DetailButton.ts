import { Entity } from 'aframe';
import DetailButtonComponent from './DetailButton.model';

AFRAME.registerComponent<DetailButtonComponent>('detail-button', {
    active: false,
    alreadyClicked: false,

    schema: {
        id: { type: 'string', default: '' },
        src: { type: 'string', default: '' }
    },

    init() {
        this.el.addEventListener('click', () => {
            // Damit keine Doppelklicks entstehen, sofern der Benutzer noch auf den Button schaut.
            if (this.alreadyClicked) {
                return;
            }
            this.alreadyClicked = true;

            const text = this.el.querySelector('a-text') as Entity;
            const box = this.el.querySelector('a-box') as Entity;

            // Button verfärben, um den "Klick" visuell darzustellen. Nach 200ms
            // wieder auf die ursprüngliche Farbe ändern.
            box.setAttribute('color', '#333333');
            setTimeout(
                () => this.el.querySelector('a-box')
                    ?.setAttribute('color', 'white'), 200
            )

            if (!this.active) {
                this.setZurueckButton(text, box);
                this.active = true;
            } else {
                this.setShowDetailButton(text, box);
                this.setDefaultPainting();
                this.active = false;
            }

            this.setDetailSpheres(this.active);
        });

        this.el.addEventListener('mouseleave', () => {
            // Wenn der Benutzer den Button verlässt, soll er sich wieder
            // klicken lassen.
           this.alreadyClicked = false;
        });
    },

    setShowDetailButton(text: Entity, box: Entity) {
        text?.setAttribute('value', 'Detailansicht');
        text?.object3D.position.set(-0.67, 0, 0.05);
        box?.setAttribute('width', '1.5');
        box?.object3D.position.set(0, 0, 0);
    },

    setZurueckButton(text: Entity, box: Entity) {
        text.setAttribute('value', 'Zurueck');
        text.object3D.position.set(-0.717, 0, 0.05);
        box.setAttribute('width', '0.9');
        box.object3D.position.set(-0.3, 0, 0);
    },

    setDefaultPainting() {
        document
            .querySelector('#' + this.data.id + ' > .painting')
            .setAttribute('src', this.data.src);
    },

    setDetailSpheres(visible: boolean) {
        document
            .querySelectorAll('#' + this.data.id + ' > .painting > .detail')
            .forEach(it =>  (it as Entity).object3D.visible = visible);
    }
});
