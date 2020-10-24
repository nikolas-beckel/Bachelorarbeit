import { ComponentDefinition, THREE } from 'aframe';

interface StandingAreaComponent extends ComponentDefinition {
    /** Die Farbe der Standing Area. */
    color: string;
    /** Die Höhe der Stanging Area. */
    height: number;
    /** Fügt eine Grafik mit Fußspuren auf die Standing Area hinzu. */
    addFootsteps: () => void;
}

export default StandingAreaComponent;
