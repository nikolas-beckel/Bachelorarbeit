import { ComponentDefinition } from 'aframe';

interface ImageSwitcherComponent extends ComponentDefinition {
    defaultColor: string;
    hoverColor: string;
    setDetailImage: () => void;
    hideDetailSpheres: () => void;
}

export default ImageSwitcherComponent;
