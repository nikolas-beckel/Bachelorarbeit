import { ComponentDefinition } from 'aframe';

interface ImageSwitcherComponent extends ComponentDefinition {
    /** Default-Farbe der Buttons. */
    defaultColor: string;
    /** Farbe, welche beim Hovern über die Buttons erscheint. */
    hoverColor: string;
    /** Ersetzt das Gemälde durch die Nahaufnahme. */
    setDetailImage: () => void;
    /** Versteckt die DetailPoint-Buttons. */
    hideDetailSpheres: () => void;
}

export default ImageSwitcherComponent;
