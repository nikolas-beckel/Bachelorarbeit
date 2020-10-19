import { ComponentDefinition } from 'aframe';
import PaintingsComponent from '../PaintingsLoader/PaintingsLoader.model';

interface DetailButtonComponent extends ComponentDefinition {
    active: boolean;
    alreadyClicked: boolean;
}

export default DetailButtonComponent;
