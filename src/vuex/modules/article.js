import * as types from '../mutation-types'

const state = {
	articles:{
		fir: {
			author:'徐丹妮',
			title:'我不是学霸，只是比你努力一点而已',
			time:'大约6小时之前',
			read:'8498',
			comment:'248',
			like:'2342',
			pay:'2',
			src:'url(../../static/vue-demo-hot.jpg)'
		},
		sec: {
			author:'徐妮',
			title:'我不是学霸，只是比你努力一点而已',
			time:'大约6小时之前',
			read:'8498',
			comment:'248',
			like:'2342',
			pay:'2',
			src:'url(../../static/vue-demo-hot.jpg)'
		},
		thi: {
			author:'徐双妮',
			title:'我不是学霸，只是比你努力一点而已',
			time:'大约6小时之前',
			read:'8498',
			comment:'248',
			like:'2342',
			pay:'2',
			src:'url(../../static/vue-demo-hot.jpg)'
		}
	}
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