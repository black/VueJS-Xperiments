import component from './components.js';

Vue.component('parent', {
    template: '#parent',
    data: function() {
        return {
            data: {
                livedata1: '' 
            },
        }
    },
    computed: { 
    },
    mounted: function() {
         
    }
});

let app = new Vue({
    el: '#app',
    data: {
        title: 'My '
    }
});