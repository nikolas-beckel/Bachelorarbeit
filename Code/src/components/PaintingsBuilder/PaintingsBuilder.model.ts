import { ComponentDefinition, Entity } from 'aframe';
import { Painting } from '../../models/Painting';

interface PaintingsComponent extends ComponentDefinition {
    paintingsData: Painting[] | undefined;
    paintingElement:  Entity | undefined;
    buildPaintingEntity: (paintingData: Painting, index: number) => void;
    buildPainting: (paintingData: Painting) => Entity;
    buildDetailOfPainting: (paintingData: Painting) => Entity;
}

export default PaintingsComponent;
