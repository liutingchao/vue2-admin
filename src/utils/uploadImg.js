import axios from 'axios'
import lrz from 'lrz'

export function uploadImg(param,success){
	let file=param.file;
	if(file.type.includes('image/')){
		lrz(param.file, {}).then((rst)=> {
			sendData(rst.file,param.file.name,success);
		}).always(()=>{		// 清空文件上传控件的值
			/*e.target.value = null;*/
		});
	}else{
        window.vueInstance.$message.warning('请上传图片！');
	}
}

export function sendData(data,name,success){
	let fd = new FormData();
	fd.append('file',data,name);
	let config={
		headers: {
	        'Content-Type': 'multipart/form-data'
	    }
	}
	axios.post('/api/upload',fd,config).then(res=>{
		if(res.state){
			success(res.data);
		}else{
            window.vueInstance.$message.error(res.data.msg);
		}
	}).catch(error=>{
        window.vueInstance.$message.error(error+'');
	})
}
