import { Entity } from 'aframe';

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
