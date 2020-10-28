import { ComponentDefinition, Entity } from 'aframe';

interface DetailButtonComponent extends ComponentDefinition {
    /**
     * Gibt an, ob die Detailansicht aktuell aktiv ist.
     */
    active: boolean;
    /**
     * Gibt an, ob der Benutzer den Button bereits geklickt
     * hat. Wird zurückgesetzt, sobald der Benutzer den
     * Button mit dem Cursor verlässt.
     */
    alreadyClicked: boolean;
    /**
     * Verändert den Button auf die "Zurück"-Ansicht.
     * @param text AFRAME-Textelement.
     * @param box AFRAME-Boxelement.
     */
    setZurueckButton: (text: Entity, box: Entity) => void;
    /**
     * Verändert den Button auf die "Detailansicht"-Ansicht.
     * @param text AFRAME-Textelement.
     * @param box AFRAME-Boxelement.
     */
    setDetailButton: (text: Entity, box: Entity) => void;
    /**
     * Setzt das Gemälde wieder auf das Default-Gemälde.
     */
    setDefaultPainting: () => void;
    /**
     * De- oder aktiviert die DetailPoints innerhalb des
     * Gemäldes.
     * @param visible Gibt an, ob sichtbar oder nicht.
     */
    setDetailSpheres: (visible: boolean) => void;
}

export default DetailButtonComponent;
