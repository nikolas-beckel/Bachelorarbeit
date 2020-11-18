import { ComponentDefinition } from 'aframe';

interface PaintingDescriptionComponent extends ComponentDefinition {
    /**
     * Erzeugt den Titel des Gemäldes als AFRAME-Textelement.
     * @param title Titel des Gemäldes.
     */
    setTitle: (title: string) => void;
    /**
     * Erzeugt das Datum der Datierung des Gemäldes als AFRAME-Textelement.
     * @param dating Datierung des Gemäldes.
     */
    setDate: (dating: string) => void;
    /**
     * Erzeugt die Zuschreibung des Gemäldes als AFRAME-Textelement.
     * @param attribution Zuschreibung des Gemäldes.
     */
    setAttribution: (attribution: string) => void;
    /**
     * Erzeugt die Angabe über den Bildträger des Gemäldes als AFRAME-Textelement.
     * @param support Bildträger des Gemäldes.
     */
    setSupport: (support: string) => void;
    /**
     * Erzeugt den Button, um die Nahaufnahmen-Buttons eines
     * Gemäldes zu de- oder aktivieren.
     * @param id ID des Gemäldes.
     * @param src URL-Pfad des Gemäldes.
     * @param ratio Verhältnis der Bildbreite und -höhe.
     */
    setButton: (id: string, src: string, ratio: number) => void;
}

export { PaintingDescriptionComponent };
