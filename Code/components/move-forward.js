AFRAME.registerComponent('move-forward', {
    camera: undefined,

    init: function() {
      this.camera = document.getElementById('camera');
    },

    tick: function () {
        // this.camera.object3D.position.z -= 0.01;
    }
});
