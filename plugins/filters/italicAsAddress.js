import Vue from 'vue'

Vue.filter('italicAsAddress', val => val.replace("i>", "address>"));
