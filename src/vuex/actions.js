import * as types from './mutation-types'

export const displayArticle = ({commit}, str) => {
	commit(types.DISPLAY_ARTICLE, str)
}