const getters = {
  activeTabbar: state => state.app.activeTabbar,
  token: state => state.user.token,
  userInfo: state => state.user.info
}

export default getters
