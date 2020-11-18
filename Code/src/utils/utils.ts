import { Entity } from 'aframe';

/** Standardbreite eines Gemäldes */
export const paintingWidth = 2;
/** Die zusätzliche Breite des Rahmens zum Bild. */
export const frameAddition = 0.15;

/**
 * Wandelt Grad auf Radiant um.
 * @param degrees
 */
export function degToRad(degrees: number) {
    return degrees * (Math.PI / 180);
}

/**
 * Liefert die Kamera zurück.
 */
export function getCamera() {
    return document.getElementById('camera') as Entity;
}
