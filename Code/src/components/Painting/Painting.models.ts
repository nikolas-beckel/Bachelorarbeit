import { ComponentDefinition, THREE } from 'aframe';

export interface PaintingComponent extends ComponentDefinition {
    /**
     * Setzt die Attribute korrekt, damit das Gemälde in der
     * virtuellen Welt in korrekter Größe betrachtet werden kann.
     * @param id Gemälde-ID.
     * @param paintingSrc URL-Pfad zum Gemälde.
     * @param paintingHeight Höhe des Gemäldes.
     */
    setPaintingAttributes: (id: string, paintingSrc: string, paintingHeight: number) => void;
    /**
     * Erstellt den Rahmen eines Gemäldes und
     * fügt es hinter das Gemälde hinzu.
     * @param paintingSrc Verhältnis Bildbreite zu -höhe.
     * @param paintingHeight Höhe des Gemäldes.
     */
    createFrame: (paintingHeight: number) => void;
    /**
     * Positioniert die Detail-Buttons innerhalb eines
     * Gemäldes.
     * @param id ID des Gemäldes.
     * @param closeUps URL-Pfad der Nahaufnahmen inklusive
     *        ihrer Positionen und IDs.
     * @param paintingHeight Höhe des Gemäldes.
     */
    createDetailPoints: (id: string, closeUps: CloseUp[], paintingHeight: number) => void;
}

/**
 * Alle notwendigen Informationen die ein Gebäude innerhalb
 * einer virtuellen Realität benötigt.
 */
export interface Painting {
    /** Eindeutige ID des Gemäldes aus dem Cranach Digital Archive */
    id: string;
    /** URL-Pfad zum Gemälde. */
    src: string;
    /** Titel des Gemäldes aus dem Cranach Digital Archive */
    title: string;
    /** Zuschreibung des Gemäldes aus dem Cranach Digital Archive */
    attribution: string;
    /** Datierung des Gemäldes aus dem Cranach Digital Archive */
    dating: string;
    /** Bildträger des Gemäldes aus dem Cranach Digital Archive */
    support: string;
    /** Beschreibung des Gemäldes aus dem Cranach Digital Archive */
    description: string;
    /** Verhältnis der Bildbreite und -höhe  */
    ratio: number;
    /** Nahaufnahmen des Gemäldes aus dem Cranach Digital Archive */
    closeUps: CloseUp[];
}

/**
 * Nahaufnahmen eines Gemäldes. Beinhaltet zusätzlich noch ihre IDs
 * und die Positionen relativ zu den Gemälde-Achsen.
 */
export interface CloseUp {
    /** ID der Nahaufnahme aus dem Cranach Digital Archive */
    id: string;
    /** URL-Pfad zur Nahaufnahme. */
    src: string;
    /** Position der Nahaufnahme relativ zum Gemälde. */
    position: THREE.Vector3;
    /** Verhältnis der Bildbreite und -höhe  */
    ratio: number;
}

export default PaintingComponent;
