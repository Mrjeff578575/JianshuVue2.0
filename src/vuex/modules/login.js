import * as types from '../mutation-types'

const state = {
    loginway: 'login',
    user: ''
}
const mutations = {
	[types.CHANGELOGINWAY](state, str){
        console.log(str)
        state.loginway = str
    }
}

export default{
	state,
	mutations
}