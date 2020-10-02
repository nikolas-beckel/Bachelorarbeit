AFRAME.registerComponent('confirm-button', {
    init() {

        this.el.addEventListener('click', () => {
            this.el.querySelector('a-box').setAttribute('color', '#333333');
            window.setTimeout(() => this.el.querySelector('a-box').setAttribute('color', 'white'), 200)

            document.querySelector('#DE_MdbKL_946 > .painting > .detail-020')
                .setAttribute('visible', 'true');
            document.querySelector('#DE_MdbKL_946 > .painting > .detail-016')
                .setAttribute('visible', 'true');
            document.querySelector('#DE_MdbKL_946 > .painting >.detail-014')
                .setAttribute('visible', 'true');
            document.querySelector('#DE_MdbKL_946 > .painting > .detail-007')
                .setAttribute('visible', 'true');
        });
    }
});
