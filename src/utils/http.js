import axios from 'axios';
import {vueInstance} from '@/main';



let instance = axios.create({
  	baseURL: '/api',
  	timeout: 10000,
  	headers: {'Content-Type': 'application/json;charset=UTF-8'}
});



class RequestCfg{
	constructor(method,url,data){
		this.method=method;
		this.url=url;
		this.data=data;
	}
}

class HTTP{
	async request(method,url,param){
		let requestCfg=new RequestCfg('post',url,param);
		vueInstance.$store.commit('changeLoading',true);
		try{
			const result=await instance.request(requestCfg);
			if(result.data.state){
				vueInstance.$store.commit('changeLoading',false);
				return Promise.resolve(result.data);
			}
			vueInstance.$message.warning(res.msg+'');
		}catch(e){
			vueInstance.$message.warning('服务器错误，请联系管理员');
			vueInstance.$store.commit('changeLoading',false);
		}
	}
	async post(url,param){
		return this.request('post',url,param);
	}
	async get(url,param){
		return  this.request('get',url,param);
	}
}

let http=new HTTP();

export default http;
