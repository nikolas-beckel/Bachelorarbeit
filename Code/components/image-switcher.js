AFRAME.registerComponent('image-switcher', {
    schema: {
        detailId: {type: 'string', default: ''}
    },

    init() {
        this.el.addEventListener('click', () => {
            this.el.setAttribute('color', '#333333');
            window.setTimeout(() => this.el.setAttribute('color', 'blue'), 200)

            document.getElementById('first-image')
                .setAttribute('src', '#' + this.data.detailId);
            document.querySelectorAll('.jj1')
                .forEach(it => it.setAttribute('visible', 'false'))
        });
    }
});
