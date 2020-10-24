import AFRAME, { THREE } from 'aframe';
import { degToRad, getCamera } from '../../utils/utils';
import StandingAreaComponent from './StandingArea.model';

AFRAME.registerComponent<StandingAreaComponent>('standing-area', {
    color: '#f4d6be',
    height: 0.075,

    init() {
        // Attribute festlegen
        this.el.setAttribute('color', this.color);
        this.el.setAttribute('height', this.height.toString());

        this.addFootsteps();

        this.el.addEventListener('click', () => {
            // Wenn der Benutzer die Standing Area "anklickt", soll er dorthin
            // teleportiert werden.
            const worldPosition = new THREE.Vector3();
            const { x, y, z } = this.el.object3D.getWorldPosition(worldPosition);
            getCamera().object3D.position.set(x, y, z);
        });
    },

    /**
     * Fügt eine Grafik mit Fußspuren auf die
     * Standing Area hinzu.
     */
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
