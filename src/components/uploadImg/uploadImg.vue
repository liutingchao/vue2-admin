<template>
	<div id="">
		<el-dialog v-dialogDrag title='上传图片' append-to-body :visible.sync="uploadDlgVisible" width="80%" :close-on-click-modal="false" :show-close='false'>
			<button type="button" aria-label="Close" class="el-dialog__headerbtn" @click.stop="hide"><i class="el-dialog__close el-icon el-icon-close"></i></button>
			<el-row>
				<el-col :sm='24' :md='12'>
					<div id="" style="font-size: 20px;">截图框</div>
					<div class="cut">
						<vue-cropper ref="cropper" :img='option.img' :output-size="option.size" :output-type="option.outputType" :info="true" :full="option.full" :can-move="option.canMove" :can-move-box="option.canMoveBox" :fixed-box="option.fixedBox" :original="option.original" :auto-crop="option.autoCrop" :auto-crop-width="autoCropWidth" :auto-crop-height="autoCropHeight" :center-box="option.centerBox" @real-time="realTime" :high="option.high"></vue-cropper>
					</div>
				</el-col>
				<el-col :sm='24' :md='12'>
					<div id="" style="font-size: 20px;">预览图</div>
					<div class="show-preview" :style="{'width': previews.w + 'px', 'height': previews.h + 'px',  'overflow': 'hidden', 'margin':'auto'}">
						<div :style="previews.div">
							<img :src="previews.url" :style="previews.img">
						</div>
					</div>
				</el-col>
			</el-row>
		  	<span slot="footer" class="dialog-footer">
		    	<el-button @click="hide" size='mini'>取 消</el-button>
		    	<el-button type="primary" @click="confirm" size='mini' :loading="btnLoad">确 定</el-button>
		  	</span>
		</el-dialog>
	</div>
</template>

<script>
	import axios from 'axios';
	
	export default {
		name:'Dialog',
		props:['autoCropWidth','autoCropHeight','uploadDlgVisible'],
		data(){
			return{
				btnLoad:false,
				fileMsg:{},
				previews: {},
				option: {
					img:'',
					size: 1,
					full: true,
					outputType: 'png',
					canMove: true,
					fixedBox: true,
					original: false,
					canMoveBox: true,
					autoCrop: true,
					centerBox: false,
					high: true
				},
			}
		},
		methods: {
			hide(){
				this.$emit('hide');
			},
			confirm(){
				this.$refs.cropper.getCropBlob(data => {
					let fd = new FormData();
					fd.append('file',data,this.fileMsg.name);
					let config={
						headers: {
					        'Content-Type': 'multipart/form-data'
					    }
					}
					this.btnLoad=true;
					axios.post('/api/sys/upload',fd,config).then(res=>{
						this.btnLoad=false;
						if(res.state){
							this.$emit('handleSuccessImg',res.data);
						}else{
							this.$message.warning('上传失败！')
						}
					}).catch(error=>{
						this.$message.warning('上传失败！')
						this.btnLoad=false;
						console.log(error);
					})
				})
			},
			realTime(data) {
				this.previews = data;
			},
			uploadImg(e) {
				var file = e.target.files[0];
				this.fileMsg=e.target.files[0];
				var reader = new FileReader();
				reader.onload = (e) => {
					let data
					if(typeof e.target.result === 'object') {
						data = window.URL.createObjectURL(new Blob([e.target.result]))
					} else {
						data = e.target.result
					}
					this.option.img = data;
				}
				reader.readAsArrayBuffer(file);
			},
		}
	}
</script>

<style scoped>
	.cut {
		width: 400px;
		height: 400px;
	}
	
	.c-item {
		max-width: 800px;
		margin: 10px auto;
		margin-top: 20px;
	}
	
	.content {
		margin: auto;
		max-width: 1200px;
		margin-bottom: 100px;
	}
	
	.test-button {
		display: flex;
		flex-wrap: wrap;
		align-content: center;
		justify-content: center;
	}
	
	.des {
		line-height: 30px;
	}
	
	code.language-html {
		padding: 10px 20px;
		margin: 10px 0px;
		display: block;
		background-color: #333;
		color: #fff;
		overflow-x: auto;
		font-family: Consolas, Monaco, Droid, Sans, Mono, Source, Code, Pro, Menlo, Lucida, Sans, Type, Writer, Ubuntu, Mono;
		border-radius: 5px;
		white-space: pre;
	}
	
	.show-info {
		margin-bottom: 50px;
	}
	
	.show-info h2 {
		line-height: 50px;
	}
	/*.title, .title:hover, .title-focus, .title:visited {
        color: black;
      }*/
	
	.title {
		display: block;
		text-decoration: none;
		text-align: center;
		line-height: 1.5;
		margin: 20px 0px;
		background-image: -webkit-linear-gradient(left, #3498db, #f47920 10%, #d71345 20%, #f7acbc 30%, #ffd400 40%, #3498db 50%, #f47920 60%, #d71345 70%, #f7acbc 80%, #ffd400 90%, #3498db);
		color: transparent;
		-webkit-background-clip: text;
		background-size: 200% 100%;
		animation: slide 5s infinite linear;
		font-size: 40px;
	}
	
	.test {
		height: 500px;
	}
	
	.model {
		position: fixed;
		z-index: 10;
		width: 100vw;
		height: 100vh;
		overflow: auto;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.8);
	}
	
	.model-show {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
	}
	
	.model img {
		display: block;
		margin: auto;
		max-width: 80%;
		user-select: none;
		background-position: 0px 0px, 10px 10px;
		background-size: 20px 20px;
		background-image: linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%), linear-gradient(45deg, #eee 25%, white 25%, white 75%, #eee 75%, #eee 100%);
	}
	
	.c-item {
		display: block;
		user-select: none;
	}
	
	@keyframes slide {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: -100% 0;
		}
	}
</style>