Vue.config.devtools = true;

/*------------ Vuex Store --------------- */

const store = new Vuex.Store({
    state: {
        message: 'Hello From Vuex',
        count: 0,
        setting: '',
        status: true
    },
    mutations: { // syncronous
        mutateCounter: function(state, payload) {
            state.count += payload;
        },
        updateSettings: function(state, payload) {
            state.setting = payload;
        },
        updateStatus: function(state) {
            state.status = !state.status;
        }
    },
    actions: { // asynchrounous
        actionCounter: function(state, payload) {
            state.commit('mutateCounter', payload);
        },
        actionSettings: function(state, payload) {
            state.commit('updateStatus');
        },
        actionSettings: function(state) {
            return $.getJSON('/data/dummy.json').then((res) => {
                state.commit('updateSettings', res); 
            }).fail(()=>{
                store.commit('updateSettings', null);
            });
        }
    },
    getters: {
        changeMessage: function(state) {
            return state.message.toUpperCase();
        },
        changeCounter: function(state) {
            return state.count;
        },
        getSettingsVal: function(state) {
            return state.setting;
        },
        getStatus: function(state) {
            return state.status;
        }
    },
    created: function() {
        store.dispatch('actionSettings');
    }
});

/*------------ VueJS App--------------- */
Vue.component('parent', {
    template: '#parent', 
});

Vue.component('child-one', {
    template: '#child-one',
    methods: {
        statusMutate: function() { 
            store.commit('updateStatus'); // for mutation
        }
    },
    computed: {
        settingValues: function() { 
            return store.getters.getSettingsVal;
        },
        getStatus:function(){
            return store.getters.getStatus;
        } 
    },
    watch:{
         
    }
});

Vue.component('child-two', {
    template: '#child-two',
    methods: {
        statusMutate: function() { 
            store.commit('updateStatus'); // for mutation
        }
    },
    computed: {
        settingValues: function() { 
            return store.getters.getSettingsVal;
        },
        getStatus:function(){
            return !store.getters.getStatus;
        } 
    },
    watch:{
         
    }
});

let app = new Vue({
    el: '#app',
    data: {
        welcome: 'Hello World'
    },
    methods: {
        statusMutate: function() {
            store.commit('updateStatus'); // for mutation
        },
        incrementMutate: function() {
            store.commit('mutateCounter', 10); // for mutation
        },
        incrementAction: function() {
            store.dispatch('actionCounter', 20); // for actions 
        },
        settingtAction: function() {
            store.dispatch('actionSettings'); // for actions 
        }
    },
    computed: {
        setMessage: function() {
            return store.getters.changeMessage;
        },
        getCount: function() {
            return store.getters.changeCounter;
        }
    },
    beforeMount: function() {
        this.settingtAction();
    }
});