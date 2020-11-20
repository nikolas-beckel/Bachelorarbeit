import AFRAME, { Entity } from 'aframe';
import DocumentComponent, { Document } from './Document.models';
import Archivals from '../../../public/data/archivals.json';

AFRAME.registerComponent<DocumentComponent>('document', {
    schema: {
        id: { type: 'string', default: '' },
        page: { type: 'number', default: 1 }
    },

    init() {
        const doc = (Archivals as Document[]).find(it => it.id === this.data.id);
        if (doc) {
            this.setAttributes(doc);
        }

        this.renderSoundButtonWhenElementHasSoundChild();
    },

    /** Vergibt die notwendigen Attribute und erstellt
     * somit das Dokument (Archivale).
     * @param document Das Dokument.
     * */
    setAttributes(document: Document) {
        this.el.setAttribute('id', document.id + '-' + this.data.page);
        this.el.setAttribute('src', document.src[this.data.page - 1]);
    },

    /**
     * Wenn das Dokument als Child ein Sound-Element hat,
     * dann soll ein Eventlistener hinzugefügt werden.
     */
    renderSoundButtonWhenElementHasSoundChild() {
        const sound =  this.el.querySelector('[sound]')! as Entity<any>;
        if (sound) {
            const wrapper = document.createElement('a-entity');
            this.renderButton(wrapper, sound);
            this.el.appendChild(wrapper);
        }
    },

    /**
     * Rendert einen Button für das Dokument, welche bei
     * einem "Klick" die Zusammenfassung des Dokuments
     * abspielt.
     * @param wrapper Der Wrapper für die Box und das Icon.
     * @param sound Der abzuspielende Sound.
     */
    renderButton(wrapper: Entity, sound: Entity<any>) {
        // Button-Element erstellen.
        const button = document.createElement('a-box');
        button.setAttribute('width', '0.2');
        button.setAttribute('height', '0.2');
        button.setAttribute('depth', '0.05');
        button.object3D.position.set(-0.32, -0.32, 0);

        // Icon-Element für den Button erstellen.
        const icon = document.createElement('a-plane');
        icon.setAttribute('src', 'https://localhost:8080/public/assets/icons/volume.png');
        icon.setAttribute('width', '0.15');
        icon.setAttribute('height', '0.15');
        icon.object3D.position.set(0, 0, 0.026);
        button.appendChild(icon);

        // Event-Listener für den Wrapper hinzufügen.
        wrapper.addEventListener('click', () => {
            button.setAttribute('color', '#777');
            window.setTimeout(() => button.setAttribute('color', '#FFF'), 200);
            sound.components.sound.playSound();
        });

        wrapper.appendChild(button);
    }
});
