/**
 * Created by lenovo on 2018/2/1.
 */
const addressBook = {
  state: {
    organizeLevel: 'default',
    isLoadMobileAddressBook: false,
    addressBookSearchValue: ''
  },
  mutations: {
    SET_ORGANIZE_LEVEL(state, data) {
      state.organizeLevel = data
    },
    SET_LOADMOBILE_ADDRESSBOOK(state, data) {
      state.isLoadMobileAddressBook = data
    },
    SET_ADDRESSBOOK_SEARCHVALUE(state, data) {
      state.addressBookSearchValue = data
    }
  },
  actions: {
    changeOrganizeLevel({ commit }, data) {
      commit('SET_ORGANIZE_LEVEL', data)
    },
    changeIsloadMobileAddressBook({ commit }, data) {
      commit('SET_LOADMOBILE_ADDRESSBOOK', data)
    },
    changeAddressBookSearchValue({ commit }, data) {
      commit('SET_ADDRESSBOOK_SEARCHVALUE', data)
    }
  }
}
export default addressBook
