AFRAME.registerComponent('hello-world', {
    multiple: true,

    schema: {
        message: {type: 'string', default: 'hello world!'},
        event: {type: 'string', default: ''}
    },

    init: function () {
        const self = this;
        this.eventHandlerFn = function () {
            console.log(self.data.message);
        };
    },

    update: function (oldData) {
        let data = this.data;
        let el = this.el;

        if (oldData.event && data.event !== oldData.event) {
            el.removeEventListener(oldData.event, this.eventHandlerFn);
        }

        if (data.event) {
            el.addEventListener(data.event, this.eventHandlerFn);
        } else {
            logMe(data.message);
        }
    },

    remove: function () {
        let data = this.data;
        let el = this.el;

        if (data.event) {
            el.removeEventListener(data.event, this.eventHandlerFn);
        }
    }
});

function logMe(message) {
    console.log(message)
}
