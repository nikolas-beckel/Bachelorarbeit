AFRAME.registerComponent('follow', {
    schema: {
        target: {type: 'selector'},
        speed: {type: 'number'}
    },

    init: function() {
        this.directionVec3 = new THREE.Vector3();
    },

    tick: function(time, timeDelta) {
        const directionVec3 = this.directionVec3;
        const targetPosition = this.data.target.object3D.position;
        const currentPosition = this.el.object3D.position;

        directionVec3.copy(targetPosition).sub(currentPosition);

        const distance = directionVec3.length();

        if (distance < 1) return;

        const factor = this.data.speed / distance;
        ['x', 'y', 'z'].forEach(function (axis) {
            directionVec3[axis] *= factor * (timeDelta / 1000);
        });

        this.el.setAttribute('position', {
           x: currentPosition.x + directionVec3.x,
           y: currentPosition.y + directionVec3.y,
           z: currentPosition.z + directionVec3.z
        });
    }
});
