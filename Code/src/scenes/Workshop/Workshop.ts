import AFRAME from 'aframe';
import { CloseUp, Painting } from '../../components/Painting/Painting.models';
import { degToRad } from '../../utils/utils';
import WorkshopScene from './Workshop.models';

AFRAME.registerComponent<WorkshopScene>('workshop-scene', {
    init() {
        fetch('https://localhost:8080/public/data/paintings.json')
            .then(result => result.json())
            .then((paintingsData: Painting[]) => {
                if (paintingsData) {
                    const scene = document.getElementById('scene')!;
                    const firstPainting = paintingsData[0];

                    this.renderPainting(
                        firstPainting.id,
                        firstPainting.src,
                        firstPainting.closeUps,
                        scene
                    );
                    this.renderDescription(
                        firstPainting.title,
                        firstPainting.dating,
                        firstPainting.attribution,
                        firstPainting.support,
                        firstPainting.id,
                        firstPainting.src,
                        scene
                    )
                }
            });
    },

    /**
     * Positioniert das jeweilige Gemälde an richtiger Position,
     * mit richtigem Inhalt in der Werkstatt.
     * @param id Die ID des Gemäldes.
     * @param src Der URL-Pfad des Gemäldes.
     * @param closeUps Die Nahaufnahmen des Gemäldes.
     * @param scene Die Szene, in der das Gemälde gerendert werden soll.
     */
    renderPainting(id: string, src: string, closeUps: CloseUp[], scene: HTMLElement) {
        const painting = document.createElement('a-image');
        painting.setAttribute(
            'painting',
            'id:' + id + ';' +
            'src:' + src + ';' +
            'closeUps:' + JSON.stringify(closeUps)
        );
        painting.object3D.position.set(2.509, 1.422, 2.587);
        painting.object3D.rotation.set(degToRad(-22), degToRad(-142.757), 0);
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
     */
    renderDescription(
        title: string,
        dating: string,
        attribution: string,
        support: string,
        id: string,
        src: string,
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
            'src:' + src
        );
        description.object3D.position.set(1.878, 2.687, 3.599);
        description.object3D.rotation.set(0, degToRad(180), 0);

        scene.appendChild(description);
    }
});
