import AFRAME, { Entity } from 'aframe';
import PaintingComponent, { CloseUp, Painting } from './Painting.models';

AFRAME.registerComponent<PaintingComponent>('painting', {
    schema: {
        id: {
            type: 'string',
            default: ''
        },
        src: {
            type: 'string',
            default: ''
        },
        ratio: {
            type: 'number',
            default: NaN
        },
        closeUps: {
            default: [],
            parse: (value: string) => JSON.parse(value),
            stringify: (value: CloseUp[]) => JSON.stringify(value)
        }
    },

    init() {
        const { id, src, ratio, closeUps }: Painting = this.data;

        this.setPaintingAttributes(id, src, ratio);
        this.createFrame(ratio);
        this.createDetailPoints(id, closeUps);
    },

    /**
     * Setzt die Attribute korrekt, damit das Gemälde in der
     * virtuellen Welt in korrekter Größe betrachtet werden kann.
     * @param id Gemälde-ID.
     * @param paintingSrc URL-Pfad zum Gemälde.
     * @param paintingRatio Verhältnis Bildbreite zu -höhe.
     */
    setPaintingAttributes(id: string, paintingSrc: string, paintingRatio: number) {
        const paintingWidth = 2;
        this.el.setAttribute('id', id);
        this.el.setAttribute('class', 'painting');
        this.el.setAttribute('src', paintingSrc);
        this.el.setAttribute('height', (paintingWidth * paintingRatio).toString());
        this.el.setAttribute('width', paintingWidth.toString());
        console.log("width:", paintingWidth.toString())
        console.log("height:", (paintingWidth * paintingRatio))
    },

    /**
     * Erstellt den Rahmen eines Gemäldes und
     * fügt es hinter das Gemälde hinzu.
     * @param paintingRatio Verhältnis Bildbreite zu -höhe.
     */
    createFrame(paintingRatio: number) {
        const frameWidth = 2.15;
        const frame = document.createElement('a-box');
        frame.setAttribute('class', 'frame');
        frame.setAttribute('height', (frameWidth * paintingRatio).toString());
        frame.setAttribute('width', frameWidth.toString());
        frame.setAttribute('depth', '0.05');
        frame.setAttribute('color', '#694c25');
        frame.object3D.position.set(0, 0, -0.03);
        this.el.appendChild(frame);
    },

    /**
     * Positioniert die Detail-Buttons innerhalb eines Gemäldes.
     * @param id ID des Gemäldes.
     * @param closeUps URL-Pfad der Nahaufnahmen inklusive
     *        ihrer Positionen und IDs.
     */
    createDetailPoints(id: string, closeUps: CloseUp[]) {
        const detailSphereElements: Entity[] = [];
        closeUps.forEach(it => {
            const sphere = document.createElement('a-sphere');
            sphere.setAttribute('class', 'detail ' + it.id);
            sphere.setAttribute('radius', '0.1');
            sphere.setAttribute('color', 'blue');
            sphere.setAttribute('image-switcher', 'id:' + id + ';' + 'src:' + it.src);
            sphere.object3D.position.set(it.position.x, it.position.y, it.position.z);
            sphere.object3D.visible = false;
            detailSphereElements.push(sphere);
        });
        detailSphereElements.forEach(it => this.el.appendChild(it));
    }
});
