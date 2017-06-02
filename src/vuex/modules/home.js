import * as types from '../mutation-types'

const state = {
    show: 'hot'
}

const mutations = {
	[types.CHANGE_SHOW_STATUS](state, str){
        state.show = str;
    }
}

export default{
	state,
	mutations
}