import { ComponentDefinition, Entity } from 'aframe';

interface DetailButtonComponent extends ComponentDefinition {
    active: boolean;
    alreadyClicked: boolean;
    setZurueckButton: (text: Entity, box: Entity) => void;
    setShowDetailButton: (text: Entity, box: Entity) => void;
    setDefaultPainting: () => void;
    setDetailSpheres: (visible: boolean) => void;
}

export default DetailButtonComponent;
