import AFRAME from 'aframe';
import { CloseUp, Painting } from '../../components/Painting/Painting.models';
import { degToRad } from '../../utils/utils';
import WorkshopScene from './Workshop.models';
import Paintings from '../../../public/data/paintings.json';

AFRAME.registerComponent<WorkshopScene>('workshop-scene', {
    init() {
        const scene = document.getElementById('scene')!;
        const firstPainting = (Paintings as Painting[])[0];

        this.renderPainting(
            firstPainting.id,
            firstPainting.src,
            firstPainting.closeUps,
            firstPainting.ratio,
            scene
        );
        this.renderDescription(
            firstPainting.title,
            firstPainting.dating,
            firstPainting.attribution,
            firstPainting.support,
            firstPainting.id,
            firstPainting.src,
            firstPainting.ratio,
            scene
        )
    },

    /**
     * Positioniert das jeweilige Gemälde an richtiger Position,
     * mit richtigem Inhalt in der Werkstatt.
     * @param id Die ID des Gemäldes.
     * @param src Der URL-Pfad des Gemäldes.
     * @param closeUps Die Nahaufnahmen des Gemäldes.
     * @param scene Die Szene, in der das Gemälde gerendert werden soll.
     * @param ratio Verhältnis der Bildbreite und -höhe.
     */
    renderPainting(id: string, src: string, closeUps: CloseUp[],  ratio: number, scene: HTMLElement) {
        const painting = document.createElement('a-image');
        painting.setAttribute(
            'painting',
            'id:' + id + ';' +
            'src:' + src + ';' +
            'closeUps:' + JSON.stringify(closeUps) + ';' +
            'ratio:' + ratio
        );
        painting.object3D.position.set(2.482, 1.308, 2.521);
        painting.object3D.rotation.set(degToRad(-156.876), degToRad(-35.117), degToRad(-166.179));
        painting.object3D.scale.set(0.5, 0.5, 0.5);

        scene.appendChild(painting);
    },

    /**
     * Positioniert die Beschreibung des jeweiligen Gemäldes
     * in der Werkstatt.
     * @param title Title des Gemäldes.
     * @param dating Datierung des Gemäldes.
     * @param attribution Zuschreibung des Gemäldes.
     * @param support Bildträger des Gemäldes.
     * @param id ID des Gemäldes.
     * @param src URL-Pfad des Gemäldes.
     * @param scene Die Szene, in die die Beschreibung gerendert werden soll.
     * @param ratio ratio Verhältnis der Bildbreite und -höhe.
     */
    renderDescription(
        title: string,
        dating: string,
        attribution: string,
        support: string,
        id: string,
        src: string,
        ratio: number,
        scene: HTMLElement
    ) {
        const description = document.createElement('a-entity');
        description.setAttribute(
            'painting-description',
            'title:' + title + ';' +
            'dating:' + dating + ';' +
            'attribution:' + attribution + ';' +
            'support:' + support + ';' +
            'id:' + id + ';' +
            'src:' + src + ';' +
            'ratio:' + ratio
        );
        description.object3D.position.set(1.878, 2.687, 3.599);
        description.object3D.rotation.set(0, degToRad(180), 0);

        scene.appendChild(description);
    }
});
