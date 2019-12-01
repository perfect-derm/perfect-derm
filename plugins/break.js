import Vue from 'vue'

Vue.filter(
    'break', 
    function (val) {
        return val.replace(new RegExp('\r?\n','g'), '<br />')
    }
);