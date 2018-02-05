/**
 * Created by lenovo on 2018/2/1.
 */
const addressBook = {
  state: {
    organizeLevel: 'default',
    isLoadMobileAddressBook: false,
    addressBookSearchValue: '',
    addressBookSearchShow: true
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
    },
    SET_ADDRESSBOOK_SEARCHSHOW(state, data) {
      state.addressBookSearchShow = data
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
    },
    changeAddressBookSearchShow({ commit }, data) {
      commit('SET_ADDRESSBOOK_SEARCHSHOW', data)
    }
  }
}
export default addressBook
