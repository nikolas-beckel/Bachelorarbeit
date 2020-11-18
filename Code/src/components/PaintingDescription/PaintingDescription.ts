import AFRAME from 'aframe';
import { PaintingDescriptionComponent } from './PaintingDescription.models';

AFRAME.registerComponent<PaintingDescriptionComponent>('painting-description', {
    schema: {
        title: { type: 'string', default: ''},
        dating: { type: 'string', default: '' },
        attribution: { type: 'string', default: '' },
        support: { type: 'string', default: '' },
        id: { type: 'string', default: '' },
        src: { type: 'string', default: '' },
        ratio: { type: 'number', default: 1 },
    },

    init() {
        this.el.setAttribute('class', 'description');
        this.setTitle(this.data.title);
        this.setDate(this.data.dating);
        this.setAttribution(this.data.attribution);
        this.setSupport(this.data.support);
        this.setButton(this.data.id, this.data.src, this.data.ratio);
    },

    /**
     * Erzeugt den Titel des Gemäldes als AFRAME-Textelement.
     * @param title Titel des Gemäldes.
     */
    setTitle(title: string) {
        const titleElement = document.createElement('a-text');
        titleElement.setAttribute('value', title);
        this.el.appendChild(titleElement);
    },

    /**
     * Erzeugt das Datum der Datierung des Gemäldes als AFRAME-Textelement.
     * @param dating Datierung des Gemäldes.
     */
    setDate(dating: string) {
        const _dating = document.createElement('a-text');
        _dating.setAttribute('value', 'Datierung: ' + dating);
        _dating.object3D.position.set(0, -0.3, 0);
        this.el.appendChild(_dating);
    },

    /**
     * Erzeugt die Zuschreibung des Gemäldes als AFRAME-Textelement.
     * @param attribution Zuschreibung des Gemäldes.
     */
    setAttribution(attribution: string) {
        const _attribution = document.createElement('a-text');
        _attribution.setAttribute('value', 'Zuschreibung: ' + attribution);
        _attribution.object3D.position.set(0, -0.6, 0);

        this.el.appendChild(_attribution);
    },

    /**
     * Erzeugt die Angabe über den Bildträger des Gemäldes als AFRAME-Textelement.
     * @param support Bildträger des Gemäldes.
     */
    setSupport(support: string) {
        const _support = document.createElement('a-text');
        _support.setAttribute('value', 'Bildtraeger: ' + support);
        _support.object3D.position.set(0, -0.9, 0);

        this.el.appendChild(_support);
    },

    /**
     * Erzeugt den Button, um die Nahaufnahmen-Buttons eines
     * Gemäldes zu de- oder aktivieren.
     * @param id ID des Gemäldes.
     * @param src URL-Pfad des Gemäldes.
     * @param ratio Verhältnis der Bildbreite und -höhe.
     */
    setButton(id: string, src: string, ratio: number) {
        // Wrapper des Buttons erzeugen. Auf diesen wird auch die Komponente
        // DetailButton vergeben, damit ein "Klick" auf den Wrapper
        // ausreicht. So kann kein Fehler auftreten, wenn der Benutzer
        // beispielsweise auf den Text, statt die Box des Buttons,
        // geklickt hätte.
        const wrapper = document.createElement('a-entity');
        wrapper.object3D.position.set(0.8, -1.4, 0);
        wrapper.setAttribute('width', '1.5');
        wrapper.setAttribute('detail-button', 'id:' + id + ';src:' + src + ';ratio:' + ratio);
        // Box-Element des Buttons generieren.
        const button = document.createElement('a-box');
        button.setAttribute('width', '1.5');
        button.setAttribute('height', '0.35');
        button.setAttribute('depth', '0.1');
        wrapper.appendChild(button);
        // Text-Element des Buttons generieren.
        const text = document.createElement('a-text');
        text.object3D.position.set(-0.67, 0, 0.05);
        text.setAttribute('color', 'black');
        text.setAttribute('value', 'Detailansicht');
        wrapper.appendChild(text);

        this.el.appendChild(wrapper);
    }
});
