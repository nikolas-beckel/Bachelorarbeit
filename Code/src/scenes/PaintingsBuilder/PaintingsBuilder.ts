import AFRAME, { THREE } from 'aframe';
import PaintingsBuilderComponent, { Positions } from './PaintingsBuilder.models';
import { Painting } from '../../components/Painting/Painting.models';
import { degToRad } from '../../utils/utils';
import Paintings from '../../../public/data/paintings.json';


AFRAME.registerComponent<PaintingsBuilderComponent>('paintings-builder', {
    init() {
        // Positionen für die einzelnen Gemälde, die Gemäldebeschreibungen,
        // Standfläche und Rotation.
        const positions: Positions[] = [
            {
                painting: new THREE.Vector3(0, 2, -3),
                description: new THREE.Vector3(1.4, 3.2, -3),
                standingArea: new THREE.Vector3(0, 0.4, -1),
                rotation: 0,
            },
            {
                painting: new THREE.Vector3(-5, 2, 2),
                description: new THREE.Vector3(-5, 3.4, 0.5),
                standingArea: new THREE.Vector3(-3, 0.4, 2),
                rotation: 90
            },
            {
                painting: new THREE.Vector3(5, 2, 2),
                description: new THREE.Vector3(5, 3.4, 3.5),
                standingArea: new THREE.Vector3(3, 0.4, 2),
                rotation: -90
            }
        ];

        (Paintings as Painting[]).forEach((it, index) => this.createPaintings(it, positions[index]));
    },

    /**
     * Kreiert ein Gemälde, eine Gemäldebeschreibung und die Standfläche
     * zum Teleportieren.
     * @param paintingData Informationen eines Gemäldes.
     * @param positions Die Position der Elemente.
     */
    createPaintings(paintingData: Painting, positions: Positions) {
        // Gemälde erzeugen und positionieren.
        const painting = document.createElement('a-image');
        painting.setAttribute(
            'painting',
            'id:' + paintingData.id + ';' +
            'src:' + paintingData.src + ';' +
            'ratio:' + paintingData.ratio + ';' +
            'closeUps:' + JSON.stringify(paintingData.closeUps)
        );
        painting.object3D.position.set(positions.painting.x, positions.painting.y, positions.painting.z);
        painting.object3D.rotation.set(0, degToRad(positions.rotation), 0);

        // Beschreibung erzeugen und positionieren.
        const description = document.createElement('a-entity');
        description.setAttribute(
            'painting-description',
            'title:' + paintingData.title + ';' +
            'dating:' + paintingData.dating + ';' +
            'attribution:' + paintingData.attribution + ';' +
            'support:' + paintingData.support + ';' +
            'id:' + paintingData.id + ';' +
            'src:' + paintingData.src + ';' +
            'ratio:' + paintingData.ratio
        );
        description.object3D.position.set(positions.description.x, positions.description.y, positions.description.z);
        description.object3D.rotation.set(0, degToRad(positions.rotation), 0);

        // Stehfläche erzeugen und positionieren.
        const standingArea = document.createElement('a-box');
        standingArea.setAttribute('standing-area', '');
        standingArea.object3D.position.set(positions.standingArea.x, positions.standingArea.y, positions.standingArea.z);
        standingArea.object3D.rotation.set(0, degToRad(positions.rotation),0);

        // Elemente der Szene beifügen
        const scene = document.getElementById('scene')!;
        scene.appendChild(painting);
        scene.appendChild(description);
        scene.appendChild(standingArea);
    }
});
