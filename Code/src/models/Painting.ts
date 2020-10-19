import { ComponentDefinition, Entity, THREE } from 'aframe';

interface Painting {
    id: string;
    src: string;
    title: string;
    attribution: string;
    dating: string;
    support: string;
    description: string;
    details: PaintingDetails[];
    position: THREE.Vector3;
    rotation: number;
}

interface PaintingDetails {
    id: string;
    src: string;
    position: THREE.Vector3;
}

interface PaintingsComponent extends ComponentDefinition {
    paintingsData: Painting[] | undefined;
    paintingElement:  Entity | undefined;
    nextRotationOfPainting: number;
    buildPaintingEntity: (paintingData: Painting, index: number) => void;
    buildPainting: (paintingData: Painting) => Entity;
    buildDetailOfPainting: (paintingData: Painting) => Entity;
}

export { Painting, PaintingDetails, PaintingsComponent }



