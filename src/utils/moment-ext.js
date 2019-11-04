import moment from 'moment';

const DATE_MONTH='YYYY-MM';
const DATE_FORMAT   ="YYYY-MM-DD";
const DATE_TIME_FORMAT   ="YYYY-MM-DD HH:mm:ss";
/**
 * 获取年月日
 * @param dateStr
 */
function getDate(dateStr){
    if(dateStr){
      return  moment(dateStr).format(DATE_FORMAT);
    }else{
        return  moment().format(DATE_FORMAT);
    }
}

/**
 * 根据当前时间加几天
 * @param days
 */
function getDateAddDays(days){
    return  moment().add(days,'days').format(DATE_FORMAT);
}

function getDateSubtractDays(days){
    return  moment().subtract(days,'days').format(DATE_FORMAT);
}

/**
 * 获取年月日时分秒
 * @param dateTimeStr
 */
function getDateTime(dateTimeStr){
    if(dateTimeStr){
       return moment(dateTimeStr).format(DATE_TIME_FORMAT);
    }else{
        return moment().format(DATE_TIME_FORMAT);
    }
}

/**
 * 获取当前月的开始日期
 */
function getStartDateOfMonth(){
    let currYear = moment().year();
    let currMonth = moment().month()+1;
    if(currMonth<10){
    	currMonth="0"+currMonth;
    }
    return moment(currYear + "-"+currMonth+"-01").format(DATE_FORMAT);
    
}

/**
 * 获取当前月的结束日期
 * @returns {string}
 */
function getEndDateOfMonth(){
    let currYear = moment().year();
    let currMonth = moment().month()+1;
    if(currMonth<10){
    	currMonth="0"+currMonth;
    }
    let endDate=moment().daysInMonth();
    return moment(currYear + "-"+currMonth+"-"+endDate).format(DATE_FORMAT);
}

/**
 * 获取特定日期前的天数
 */

function getBeforeForDate(dates,days){
    return  moment(dates).subtract(days,'d').format(DATE_FORMAT);
}

/**
 * 获取特定日期后的天数
 */

function getAfterForDate(dates,days){
    return  moment(dates).add(days,'d').format(DATE_FORMAT);
}

/**
 * 获取当前年份
 */

function getNowYear(){
	let currYear = moment().year();
	return currYear;
}

/**
 *
 * @param compareDate:用于比较的时间
 * @param dateStr：null表示当前时间，否则就是比较的开始时间
 * @returns {boolean}
 */
function isAfter(compareDate,dateStr){
    if(dateStr && compareDate){
        return moment(dateStr).isAfter(compareDate);
    }else{
        return moment().isAfter(compareDate);
    }
}

//获取当前月份
function getNowMonth(){
	let currYear = moment().year();
    let currMonth = moment().month()+1;
    if(currMonth<10){
    	currMonth="0"+currMonth;
    }
    return moment(currYear + "-"+currMonth).format(DATE_MONTH);
}

//获取当前年份第一个月
function getNowFirstMonth(){
	let currYear = moment().year();
    return moment(currYear + "-01").format(DATE_MONTH);
}


export {getDate,getDateAddDays,getDateSubtractDays,getDateTime,getStartDateOfMonth,getEndDateOfMonth,getBeforeForDate,getAfterForDate,getNowYear,isAfter,getNowMonth,getNowFirstMonth};
