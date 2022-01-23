import apiUsers from "@/api/users";

export default {
  namespaced: true,
  state: {
    userProfile: "",
  },
  mutations: {
    SET_USER_PROFILE(state, payload) {
      state.userProfile = payload;
    },
  },
  actions: {
    fetchUserProfile({ commit }) {
      apiUsers
        .getUserProfile()
        .then((v) => {
          commit("SET_USER_PROFILE", v.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {},
};
