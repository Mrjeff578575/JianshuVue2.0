import * as types from '../mutation-types'
import utils from '../utils'

const articlesAll = {
		fir: {
			author:'徐丹妮',
			title:'我不是学霸，只是比你努力一点而已',
			time:'大约6小时之前',
			read:'8498',
			comment:'248',
			like:'2342',
			pay:'2',
			src: utils.changeStaticUrl('url(../../static/vue-demo-hot.jpg)')
		},
		sec: {
			author:'阿俊',
			title:'Learn by doing',
			time:'大约6小时之前',
			read:'3398',
			comment:'258',
			like:'232',
			pay:'88',
			src: utils.changeStaticUrl('url(../../static/vue-demo-new.jpg)')
		},
		thi: {
			author:'尸叔',
			title:'如何让你的自拍，惊爆朋友圈？看我是怎么设计的',
			time:'大约2小时之前',
			read:'3750',
			comment:'70',
			like:'190',
			pay:'0',
			src: utils.changeStaticUrl('url(../../static/vue-demo-daily.jpg)')
		}
}
const state = {
	articles:[{
		author:'徐丹妮',
		title:'我不是学霸，只是比你努力一点而已',
		time:'大约6小时之前',
		read:'8498',
		comment:'248',
		like:'2342',
		pay:'2',
		src: utils.changeStaticUrl('url(../../static/vue-demo-hot.jpg)')
	}]
}

const mutations = {
	[types.CHANGE_ARTICLE_LIST](state, str){
        switch (str) {
			case 'hot':
				state.articles = [articlesAll.fir]
				break
			case 'new':
				state.articles = [articlesAll.sec]
				break
			case 'daily':
				state.articles = [articlesAll.thi]
				break
			default:
				state.articles = [articlesAll.sec]
		}
    }
}

export default{
	state,
	mutations
}