import { ComponentDefinition, Entity } from 'aframe';

interface DocumentComponent extends ComponentDefinition {
    /** Vergibt die notwendigen Attribute und erstellt
     * somit das Dokument (Archivale).
     * @param document Das Dokument.
     * */
    setAttributes: (document: Document) => void;
    /**
     * Wenn das Dokument als Child ein Sound-Element hat,
     * dann soll ein Eventlistener hinzugefügt werden.
     */
    renderSoundButtonWhenElementHasSoundChild: () => void;
    /**
     * Rendert einen Button für das Dokument, welche bei
     * einem "Klick" die Zusammenfassung des Dokuments
     * abspielt.
     * @param wrapper Der Wrapper für die Box und das Icon.
     * @param sound Der abzuspielende Sound.
     */
    renderButton: (wrapper: Entity, sound: Entity<any>) => void;
}

export interface Document {
    id: string;
    place: string;
    dating: string;
    src: string[];
    summary: string;
}

export default DocumentComponent;
