export const state = () => ({
  address: null,
  contact: null
});

export const mutations = {
  setSettingsData(state, data) {
    state.address = data;
    state.address.company_hours_array = data.company_hours.split(/\n/);
  },
  setContactData(state, data) {
    state.contact = data;
  },
};

export const getters = {
  address(state) {
    return state.address;
  },
  contact(state) {
    return state.contact;
  },
};

export const actions = {
  async nuxtServerInit ({ commit }, context) {
    commit('setSettingsData', await context.app.$content('/settings').get('/adress'));
    commit('setContactData', await context.app.$content('/settings').get('/contact'));
  },
};
