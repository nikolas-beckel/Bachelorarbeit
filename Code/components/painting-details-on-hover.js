AFRAME.registerComponent('painting-details-on-hover', {
    detailsWrapperEntity: undefined,
    titleEntity: undefined,
    dateEntity: undefined,
    attributionEntity: undefined,
    supportEntity: undefined,
    gazeTimeout: undefined,

    schema: {
        visible: {type: 'boolean', default: false},
        idOfDetails: {type: 'string', default: ''}
    },

    init() {
        this.initializeAllEntities();
        // this.addEventListener();
        // this.addEventListenerForDetailsWrapper();
    },

    initializeAllEntities() {
        this.detailsWrapperEntity = document.getElementById(this.data.idOfDetails);
        this.titleEntity = this.detailsWrapperEntity.querySelector('.title');
        this.dateEntity = this.detailsWrapperEntity.querySelector('.date');
        this.attributionEntity = this.detailsWrapperEntity.querySelector('.attribution');
        this.supportEntity = this.detailsWrapperEntity.querySelector('.support');
    },

    addEventListener() {
        this.el.addEventListener('mouseenter', () => {
                this.data.visible = true;
                this.detailsWrapperEntity.setAttribute('visible', true);
                console.log('mouseenter')
        });
        this.el.addEventListener('mouseleave', () => {
                this.data.visible = false;
                this.detailsWrapperEntity.setAttribute('visible', false);
                console.log('mouseleave');
        });
    },

    addEventListenerForDetailsWrapper() {
        this.detailsWrapperEntity.addEventListener('mouseenter', () => {
            if (!this.data.visible) {
                window.clearTimeout(this.gazeTimeout);
                this.detailsWrapperEntity.setAttribute('visible', true);
            }
        });
        this.detailsWrapperEntity.addEventListener('mouseleave', () => {
            this.data.visible = false;
            this.detailsWrapperEntity.setAttribute('visible', false);
        })
    }
});
