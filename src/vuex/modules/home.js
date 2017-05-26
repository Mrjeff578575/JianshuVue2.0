import * as types from '../mutation-types'

const state = {
	currentArticles: 'hot',
    show: 'hot'
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