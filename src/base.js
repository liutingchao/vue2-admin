import http from '@/utils/http.js'
import PagiNation from '@/components/PagiNation'
import { Page,Comb} from '@/utils/class.js'
import {getStartDateOfMonth,getEndDateOfMonth,getDate,getDateAddDays,getDateSubtractDays,getDateTime,getBeforeForDate,getAfterForDate,getNowYear,isAfter,getNowMonth,getNowFirstMonth} from '@/utils/moment-ext.js'
import{uploadImg} from '@/utils/uploadImg.js'
import 	echarts from 'echarts'


let base = {};

base.install = function(Vue, options) {
	Vue.prototype.$http = http;
	Vue.prototype.Page = Page; //公共Page类
	Vue.prototype.Comb = Comb; //公共下拉框处理类
	Vue.component('PagiNation', PagiNation);
	Vue.prototype.uploadImg = uploadImg; //压缩上传图片
	Vue.$echarts=echarts;
	
	
	Vue.prototype.getStartDateOfMonth = getStartDateOfMonth;
	Vue.prototype.getEndDateOfMonth = getEndDateOfMonth; 
	Vue.prototype.getDate = getDate; 
	Vue.prototype.getDateAddDays = getDateAddDays;
	Vue.prototype.getDateTime = getDateTime; 
	Vue.prototype.getDateSubtractDays = getDateSubtractDays; 
	Vue.prototype.getBeforeForDate = getBeforeForDate;
	Vue.prototype.getAfterForDate = getAfterForDate; 
	Vue.prototype.getNowYear = getNowYear; 
	Vue.prototype.isAfter = isAfter;
	Vue.prototype.getNowMonth = getNowMonth; 
	Vue.prototype.getNowFirstMonth = getNowFirstMonth;
}
export {base};