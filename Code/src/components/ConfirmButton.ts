import { Entity } from 'aframe';

AFRAME.registerComponent('confirm-button', {
    active: false,

    schema: {
        id: { type: 'string', default: '' },
        src: { type: 'string', default: '' }
    },

    init() {
        this.el.addEventListener('click', () => {
            const box = this.el.querySelector('a-box') as Entity;
            const text = this.el.querySelector('a-text') as Entity;
            box?.setAttribute('color', '#333333');
            setTimeout(() => this.el.querySelector('a-box')?.setAttribute('color', 'white'), 200)

            if (!this.active) {
                text?.setAttribute('value', 'Zurueck');
                text?.object3D.position.set(-0.717, 0, 0.05);
                box?.setAttribute('width', '0.9');
                box?.object3D.position.set(-0.3, 0, 0);

                this.active = true;
            } else {
                text?.setAttribute('value', 'Detailansicht');
                text?.object3D.position.set(-0.67, 0, 0.05);
                box?.setAttribute('width', '1.5');
                box?.object3D.position.set(0, 0, 0);

                document
                    .querySelector('#' + this.data.id + ' > .painting')
                    .setAttribute('src', this.data.src);

                this.active = false;
            }

            document
                .querySelectorAll('#' + this.data.id + ' > .painting > .detail')
                .forEach(
                    it => this.active
                        ? (it as Entity).object3D.visible = true
                        : (it as Entity).object3D.visible = false
                );
        });
    }
});
