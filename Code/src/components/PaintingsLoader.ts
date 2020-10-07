import { Entity, THREE } from 'aframe';
import { Painting, PaintingsComponent } from '../models/Painting';

AFRAME.registerComponent<PaintingsComponent>('paintings-loader', {
    paintingsData: undefined,
    paintingElement: undefined,

    init() {
        const three: THREE.Vector3 = new THREE.Vector3(0, 0, 0);
        fetch('data/paintings.json')
            .then(result => result.json())
            .then(paintingsData => this.paintingsData = paintingsData)
            .then(_ => {
                if (this.paintingsData) {
                    this.paintingsData.forEach((it, index) => this.buildPaintingEntity(it, index));
                }
            });
    },

    buildPaintingEntity(paintingData: Painting, index: number) {
        const defaultPosition = new THREE.Vector3(-0.325, 2, -4.415);
        const paintingEntity = document.createElement('a-entity');
        paintingEntity.setAttribute('id', paintingData.id);

        const paintingEntityAs3D = paintingEntity.object3D;
        if (index === 0) {
            paintingEntityAs3D.position.set(defaultPosition.x, defaultPosition.y, defaultPosition.z);
        } else {
            paintingEntityAs3D.position.set(defaultPosition.x + 7, defaultPosition.y, defaultPosition.z + 2);
            paintingEntityAs3D.rotateY(-45);
        }

        paintingEntity.append(this.buildPainting(paintingData));
        if (this.paintingElement) {
            paintingEntity.append(this.buildDetailOfPainting(paintingData));
        }
        document.getElementById('scene')?.appendChild(paintingEntity);
    },

    buildPainting(paintingData: Painting) {
        // Das Gemälde mit Attributen als Element erzeugen.
        const paintingElement = document.createElement('a-image');
        paintingElement.setAttribute('class', 'painting');
        paintingElement.setAttribute('src', paintingData.src);
        paintingElement.setAttribute('height', '2.98');
        paintingElement.setAttribute('width', '2');
        // Den Rahmen des Gemäldes mit Attributen erzeugen.
        const paintingFrameElement = document.createElement('a-box');
        paintingFrameElement.setAttribute('height', '3.13');
        paintingFrameElement.setAttribute('width', '2.15');
        paintingFrameElement.setAttribute('depth', '0.05');
        paintingFrameElement.setAttribute('color', '#694c25');
        const paintingFrameObject = paintingFrameElement.object3D;
        paintingFrameObject.position.set(0, 0, -0.03);
        // Sphären der Detailbereiche mit Attributen erzeugen.
        const detailSphereElements: Entity[] = [];
        paintingData.details.forEach(it => {
            const detailSphereElement = document.createElement('a-sphere');
            detailSphereElement.setAttribute('class', 'detail ' + it.id);
            detailSphereElement.setAttribute('radius', '0.1');
            detailSphereElement.setAttribute('color', 'blue');
            detailSphereElement.setAttribute('image-switcher', 'id:' + paintingData.id + ';' + 'src:' + it.src);
            const detailSphereObject = detailSphereElement.object3D;
            detailSphereObject.position.set(it.position.x, it.position.y, it.position.z);
            detailSphereObject.visible = false;
            detailSphereElements.push(detailSphereElement);
        });
        paintingElement.appendChild(paintingFrameElement);
        detailSphereElements.forEach(it => paintingElement.appendChild(it));
        this.paintingElement = paintingElement;
        return paintingElement;
    },

    buildDetailOfPainting(paintingData: Painting) {
        // Wrapper generieren und korrekt positionieren.
        const detailEntity = document.createElement('a-entity');
        detailEntity.setAttribute('class', 'detail');
        detailEntity.setAttribute('width', '1');
        detailEntity.setAttribute('height', '1');

        let x = (this.paintingElement!.getAttribute('position') as unknown as THREE.Vector3)?.x;
        x = parseFloat(this.paintingElement!.getAttribute('width')) / 1.6 + x;
        let y = this.paintingElement!.getAttribute('position')?.y;
        y = parseFloat(this.paintingElement!.getAttribute('height')) / 2.1 + y;
        detailEntity.setAttribute('position', x + ' ' + y + ' 0');
        // Element für die Informationen generieren.
        const titleElement = document.createElement('a-text');
        titleElement.setAttribute('value', paintingData.title);
        detailEntity.appendChild(titleElement);
        const dateElement = document.createElement('a-text');
        dateElement.setAttribute('value', 'Datierung: ' + paintingData.dating);
        dateElement.setAttribute('position', '0 -0.3 0');
        detailEntity.appendChild(dateElement);
        const attributionElement = document.createElement('a-text');
        attributionElement.setAttribute('value', 'Zuschreibung: ' + paintingData.attribution);
        attributionElement.setAttribute('position', '0 -0.6 0');
        detailEntity.appendChild(attributionElement);
        const supportElement = document.createElement('a-text');
        supportElement.setAttribute('value', 'Bildtraeger: ' + paintingData.support);
        supportElement.setAttribute('position', '0 -0.9 0');
        detailEntity.appendChild(supportElement);
        // Wrapper für Button und Textinhalte generieren
        const buttonEntity = document.createElement('a-entity');
        buttonEntity.setAttribute('position', '0.8 -1.4 0');
        buttonEntity.setAttribute('width', '1.5');
        buttonEntity.setAttribute('confirm-button', 'id:' + paintingData.id + ';src:' + paintingData.src);
        // Button für Interaktion generieren.
        const buttonElement = document.createElement('a-box');
        buttonElement.setAttribute('width', '1.5');
        buttonElement.setAttribute('height', '0.35');
        buttonElement.setAttribute('depth', '0.1');
        buttonEntity.appendChild(buttonElement);
        // Text für Button generieren.
        const buttonTextElement = document.createElement('a-text');
        buttonTextElement.setAttribute('position', '-0.67 0 0.05');
        buttonTextElement.setAttribute('color', 'black');
        buttonTextElement.setAttribute('value', 'Detailansicht');
        buttonEntity.appendChild(buttonTextElement);
        detailEntity.appendChild(buttonEntity);
        return detailEntity;
    }
});
