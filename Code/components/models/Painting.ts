import { ComponentDefinition, Entity, THREE } from 'aframe';

interface Painting {
    id: string;
    src: string;
    title: string;
    attribution: string;
    dating: number;
    support: string;
    description: string;
    details: PaintingDetails[];
}

interface PaintingDetails {
    id: string;
    src: string;
    position: THREE.Vector3;
}

interface PaintingsComponent extends ComponentDefinition {
    paintingsData: Painting[] | undefined;
    paintingElement:  Entity | undefined;
    buildPaintingEntity: (paintingData: Painting) => void;
    buildPainting: (paintingData: Painting) => Entity;
    buildDetailOfPainting: (paintingData: Painting) => Entity;
}

export { Painting, PaintingDetails, PaintingsComponent }



