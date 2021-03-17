import axios from "axios";

const posts = {
  namespaced: true,
  state: {
    posts: [],
    organizer: []
  },
  mutations: {
    SET_POSTS(state, data) {
      state.posts = data
      state.organizer = data

    }

  },
  actions: {
    loadPosts({ commit }) {
      axios
        .get('http://localhost:3000/api/event')
        .then(response => {
          commit('SET_POSTS', response.data)
        })
        .catch(error => console.log(error))
    },

  }
}

export default posts