import { ComponentDefinition } from 'aframe';

interface StandingAreaComponent extends ComponentDefinition {
    /** Die Farbe der Standing Area. */
    color: string;
    /** Die Höhe der Stanging Area. */
    height: number;
    /** Legt die initialen Attribute für das Element fest. */
    setAttributes: () => void;
    /** Fügt eine Grafik mit Fußspuren auf die Standing Area hinzu. */
    addFootsteps: () => void;
}

export default StandingAreaComponent;
