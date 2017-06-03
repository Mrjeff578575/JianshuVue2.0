import * as types from '../mutation-types'
import utils from '../utils'

const state = {
	topics:{
		fir: {
			img: utils.changeStaticUrl('../../static/topic_1.jpg'),
			title:'游戏',
			par:'玩转简书的第一步，从这个专题开始。\
				  想上首页热门榜么？好内容想被更多人看到么？来投稿吧！\
				  如果被拒也不要灰心哦～入选文章会进一个队列挨个上首页，请耐心等待。\
				  投稿必须原创。如果发现有非...',			
			number:'97233',
			concern:'121.7',
			keys:'故事、连载',
			time:'20160620'		
		},
		sec: {
			img: utils.changeStaticUrl('../../static/topic_3.jpg'),
			title:'诗',
			par:'诗，让你感受自己的心灵。\
				 专题主编：苏锦年 投稿须知：\
				 1.本专题收录古诗、词、现代诗以及诗词点评及指导。\
                 2.内容必须为原创，切勿用其他诗人的诗句。\
                 3.文章排版整洁，注意...',			
			number:'35420',
			concern:'146.6',
			keys:'诗',
			time:'20160630'
		}
	},
	show:'hot'
}

const mutations = {
	[types.DISPLAY_ARTICLE](state, str) {
        state.currentArticles = str
    },
	[types.CHANGE_TOPIC_SHOW](state, str) {
		state.show = str
	}
}

export default{
	state,
	mutations
}