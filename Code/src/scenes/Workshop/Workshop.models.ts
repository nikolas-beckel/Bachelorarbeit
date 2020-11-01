import { ComponentDefinition } from 'aframe';
import { CloseUp } from '../../components/Painting/Painting.models';

interface WorkshopScene extends ComponentDefinition {
    /**
     * Positioniert das jeweilige Gemälde an richtiger Position,
     * mit richtigem Inhalt in der Werkstatt.
     * @param id Die ID des Gemäldes.
     * @param src Der URL-Pfad des Gemäldes.
     * @param closeUps Die Nahaufnahmen des Gemäldes.
     * @param scene Die Szene, in der das Gemälde gerendert werden soll.
     */
    renderPainting: (id: string, src: string, closeUps: CloseUp[], scene: HTMLElement) => void;
    /**
     * Positioniert die Beschreibung des jeweiligen Gemäldes
     * in der Werkstatt.
     * @param title Title des Gemäldes.
     * @param dating Datierung des Gemäldes.
     * @param attribution Zuschreibung des Gemäldes.
     * @param support Bildträger des Gemäldes.
     * @param id ID des Gemäldes.
     * @param src URL-Pfad des Gemäldes.
     * @param scene Die Szene, in die die Beschreibung gerendert werden soll.
     */
    renderDescription: (
        title: string,
        dating: string,
        attribution: string,
        support: string,
        id: string,
        src: string,
        scene: HTMLElement
    ) => void;
}

export default WorkshopScene;
