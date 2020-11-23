import { ComponentDefinition, THREE } from 'aframe';
import { Painting } from '../../components/Painting/Painting.models';

interface PaintingsBuilderComponent extends ComponentDefinition {
    /**
     * Kreiert ein Gemälde, eine Gemäldebeschreibung und die Standfläche
     * zum Teleportieren.
     * @param paintingData Informationen eines Gemäldes.
     * @param positions Die Position der Elemente.
     */
    createPaintings: (paintingData: Painting, positions: Positions) => void;
}

/**
 * Enthält alle Positionen die für die PaintingsBuilderComponent notwendig ist.
 */
export interface Positions {
    painting: THREE.Vector3;
    description: THREE.Vector3;
    standingArea: THREE.Vector3;
    rotation: number;
};

export default PaintingsBuilderComponent;
