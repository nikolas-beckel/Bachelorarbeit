import AFRAME, { Entity } from 'aframe';
import DetailButtonComponent from './DetailButton.models';

AFRAME.registerComponent<DetailButtonComponent>('detail-button', {
    /** Gibt an, ob die Detailansicht aktuell aktiv ist. */
    active: false,
    /** Gibt an, ob der Benutzer den Button bereits geklickt
     * hat. Wird zurückgesetzt, sobald der Benutzer den
     * Button mit dem Cursor verlässt. */
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
                () => this.el.querySelector('a-box')!
                    .setAttribute('color', 'white'), 200
            )

            if (!this.active) {
                this.setZurueckButton(text, box);
                this.active = true;
            } else {
                this.setDetailButton(text, box);
                this.setDefaultPainting();
                this.active = false;
            }

            this.setDetailSpheres(this.active);
        });

        this.el.addEventListener('mouseleave', () => {
            // Wenn der Benutzer den Button verlässt, soll er sich
            // dieser wieder klicken lassen.
           this.alreadyClicked = false;
        });
    },

    /**
     * Verändert den Button auf die "Zurück"-Ansicht.
     * @param text AFRAME-Textelement.
     * @param box AFRAME-Boxelement.
     */
    setZurueckButton(text: Entity, box: Entity) {
        text.setAttribute('value', 'Zurueck');
        text.object3D.position.set(-0.717, 0, 0.05);
        box.setAttribute('width', '0.9');
        box.object3D.position.set(-0.3, 0, 0);
    },

    /**
     * Verändert den Button auf die "Detailansicht"-Ansicht.
     * @param text AFRAME-Textelement.
     * @param box AFRAME-Boxelement.
     */
    setDetailButton(text: Entity, box: Entity) {
        text?.setAttribute('value', 'Detailansicht');
        text?.object3D.position.set(-0.67, 0, 0.05);
        box?.setAttribute('width', '1.5');
        box?.object3D.position.set(0, 0, 0);
    },

    /**
     * Setzt das Gemälde wieder auf das Default-Gemälde.
     */
    setDefaultPainting() {
        document
            .querySelector('#' + this.data.id)
            .setAttribute('src', this.data.src);
    },

    /**
     * De- oder aktiviert die DetailPoints innerhalb des
     * Gemäldes.
     * @param visible Gibt an, ob sichtbar oder nicht.
     */
    setDetailSpheres(visible: boolean) {
        document
            .querySelectorAll('#' + this.data.id + ' > .detail')
            .forEach(it => (it as Entity).object3D.visible = visible);
    }
});
