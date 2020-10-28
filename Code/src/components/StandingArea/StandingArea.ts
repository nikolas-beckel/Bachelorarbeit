import AFRAME, { THREE } from 'aframe';
import { degToRad, getCamera } from '../../utils/utils';
import StandingAreaComponent from './StandingArea.models';

AFRAME.registerComponent<StandingAreaComponent>('standing-area', {
    /** Die Farbe der Standing Area. */
    color: '#f4d6be',
    /** Die Höhe der Stanging Area. */
    height: 0.075,

    init() {
        this.setAttributes();
        this.addFootsteps();

        this.el.addEventListener('click', () => {
            // Wenn der Benutzer die Standing Area "anklickt", soll er dorthin
            // teleportiert werden.
            const worldPosition = new THREE.Vector3();
            const { x, y, z } = this.el.object3D.getWorldPosition(worldPosition);
            getCamera().object3D.position.set(x, y, z);
        });
    },

    /** Legt die initialen Attribute für das Element fest. */
    setAttributes() {
        this.el.setAttribute('class', 'standing-area');
        this.el.setAttribute('color', this.color);
        this.el.setAttribute('height', this.height.toString());
    },

    /** Fügt eine Grafik mit Fußspuren auf die Standing Area hinzu. */
    addFootsteps() {
        const footsteps = document.createElement('a-plane');
        footsteps.setAttribute('width', '0.5');
        footsteps.setAttribute('height', '0.5');
        footsteps.setAttribute('src', 'https://localhost:8080/public/assets/icons/footsteps.png');
        footsteps.object3D.position.set(0, 0.038, 0);
        footsteps.object3D.rotation.set(degToRad(-90), 0, 0);
        this.el.appendChild(footsteps);
    }
});
