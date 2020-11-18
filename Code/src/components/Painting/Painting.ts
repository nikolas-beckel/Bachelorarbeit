import AFRAME, { Entity } from 'aframe';
import { frameAddition, paintingWidth } from '../../utils/utils';
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
            default: 1
        },
        closeUps: {
            default: [],
            parse: (value: string) => JSON.parse(value),
            stringify: (value: CloseUp[]) => JSON.stringify(value)
        }
    },

    init() {
        const { id, src, ratio, closeUps }: Painting = this.data;
        const paintingHeight = paintingWidth * ratio;

        this.setPaintingAttributes(id, src, paintingHeight);
        this.createFrame(paintingHeight);
        this.createDetailPoints(id, closeUps, paintingHeight);
    },

    /**
     * Setzt die Attribute korrekt, damit das Gemälde in der
     * virtuellen Welt in korrekter Größe betrachtet werden kann.
     * @param id Gemälde-ID.
     * @param paintingSrc URL-Pfad zum Gemälde.
     * @param paintingHeight Höhe des Gemäldes.
     */
    setPaintingAttributes(id: string, paintingSrc: string, paintingHeight: number) {
        this.el.setAttribute('id', id);
        this.el.setAttribute('class', 'painting');
        this.el.setAttribute('src', paintingSrc);
        this.el.setAttribute('height', paintingHeight.toString());
        this.el.setAttribute('width', paintingWidth.toString());
    },

    /**
     * Erstellt den Rahmen eines Gemäldes und
     * fügt es hinter das Gemälde hinzu.
     * @param paintingHeight Höhe des Gemäldes.
     */
    createFrame(paintingHeight: number) {
        const frame = document.createElement('a-box');
        frame.setAttribute('class', 'frame');
        frame.setAttribute('height', (paintingHeight + frameAddition).toString());
        frame.setAttribute('width', (paintingWidth + frameAddition).toString());
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
     * @param paintingHeight Höhe des Gemäldes.
     */
    createDetailPoints(id: string, closeUps: CloseUp[], paintingHeight: number) {
        const detailSphereElements: Entity[] = [];
        closeUps.forEach(it => {
            const sphere = document.createElement('a-sphere');
            sphere.setAttribute('class', 'detail ' + it.id);
            sphere.setAttribute('radius', '0.1');
            sphere.setAttribute('color', 'blue');
            sphere.setAttribute(
                'image-switcher',
                'id:' + id + ';' +
                'src:' + it.src + ';' +
                'ratio:' + it.ratio
            );
            sphere.object3D.position.set(it.position.x, it.position.y, it.position.z);
            sphere.object3D.visible = false;
            detailSphereElements.push(sphere);
        });
        detailSphereElements.forEach(it => this.el.appendChild(it));
    }
});
