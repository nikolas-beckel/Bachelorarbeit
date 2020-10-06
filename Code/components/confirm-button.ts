import { Entity } from 'aframe';
import { Painting, PaintingsComponent } from './models/Painting';

AFRAME.registerComponent('confirm-button', {
    active: false,

    schema: {
        id: {type: 'string', default: ''},
        confirmButtonData: {parse: JSON.parse, stringify: JSON.stringify, default: '{}'}
    },


    init() {
        this.el.addEventListener('click', () => {
            const box = this.el.querySelector('a-box') as Entity;
            const text = this.el.querySelector('a-text');
            box?.setAttribute('color', '#333333');
            setTimeout(() => this.el.querySelector('a-box')?.setAttribute('color', 'white'), 200)

            if (!this.active) {
                text?.setAttribute('value', 'Zurueck');
                box?.setAttribute('width', '0.9');
                box?.object3D.position.set(-0.3, 0, 0);
                this.active = true;
            } else {
                text?.setAttribute('value', 'Detailansicht');
                box?.setAttribute('width', '0.9');
                box?.object3D.position.set(-0.3, 0, 0);
                this.active = false;
            }

            document
                .querySelectorAll('#' + this.data.id + ' > .painting > .detail')
                .forEach(it => (it as Entity).object3D.visible = true);
        });
    }
});
