import * as types from '../mutation-types'

const state = {
    show: 'home',
    loginSuccess: false
}

const mutations = {
	[types.DISPLAY_ARTICLE](state, str){
        state.currentArticles = str;
    }
}

export default{
	state,
	mutations
}