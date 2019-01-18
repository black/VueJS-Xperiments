var socket = io({ transports: ['websocket'], upgrade: false });
// var socket = io();

Vue.component('parent', {
    template: '#parent',
    data: function() {
        return {
            data: {
                livedata1: '',
                livedata2: '',
                livedata3: '',
                livedata4: ''
            },
        }
    },
    computed: {
        getSocketData: function() {
            socket.on('randomdata_1', msg => {
                this.data.livedata1 = msg;
            });

            socket.on('randomdata_2', msg => {
                this.data.livedata2 = msg;
            });

            socket.on('randomdata_3', msg => {
                this.data.livedata3 = msg;
            });

            socket.on('randomdata_4', msg => {
                this.data.livedata4 = msg;
            });
        }
    },
    mounted: function() {
        this.getSocketData;
    }
});

let app = new Vue({
    el: '#app',
    data: {
        title: 'My '
    }
});