import * as types from './mutation-types'

export const changeArticleList = ({commit}, str) => {
	commit(types.CHANGE_ARTICLE_LIST, str)
}
export const changeShowStatus = ({commit}, str) => {
	commit(types.CHANGE_SHOW_STATUS, str)
}

export const changeTopicShow = ({commit}, str) => {
	commit(types.CHANGE_TOPIC_SHOW, str)
}

export const changeLogin = ({commit}) => {
	commit(types.CHANGELOGIN)
}
export const changeLoginWay = ({commit}, str) => {
	commit(types.CHANGELOGINWAY, str)
}