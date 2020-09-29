AFRAME.registerComponent('change-color-on-hover', {
    schema: {
        color: {default: 'red'}
    },

    init: function () {
        const {data, el} = this;
        const defaultColor = el.getAttribute('material').color;

        el.addEventListener('mouseenter', function () {
            el.setAttribute('color', data.color);
        });

        el.addEventListener('mouseleave', function () {
            el.setAttribute('color', defaultColor);
        });
    }
});
