AFRAME.registerComponent('confirm-button', {
    init() {

        this.el.addEventListener('click', () => {
            this.el.setAttribute('color', '#333333');
            window.setTimeout(() => this.el.setAttribute('color', 'white'), 200)

            document.querySelector('.jj1.detail-020')
                .setAttribute('visible', 'true');
            document.querySelector('.jj1.detail-016')
                .setAttribute('visible', 'true');
            document.querySelector('.jj1.detail-014')
                .setAttribute('visible', 'true');
            document.querySelector('.jj1.detail-007')
                .setAttribute('visible', 'true');
        });
    }
});
