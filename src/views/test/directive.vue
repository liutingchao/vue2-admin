<template>
	<div id="">
		<el-row style='margin-top: 10px;'>
			<el-button size='small' v-promissionBtn='pemissionList'>默认按钮</el-button>
			<el-button type="primary" size='small' id="2">主要按钮</el-button>
			<el-button type="success" size='small' id="3">成功按钮</el-button>
			<el-button type="info" size='small' id="4">信息按钮</el-button>
			<el-button type="warning" size='small' id="5">警告按钮</el-button>

			<label class="btn" for="uploadB">
                <i class="el-icon-plus avatar-uploader-icon"></i>
            </label>
			<input type="file" ref='uploadInputB' id="uploadB" style="position:absolute;clip:rect(0 0 0 0);" accept="image/*" @change="uploadImgB($event)">
			<upload-img ref='uploadImgB' :autoCropWidth='375' :autoCropHeight='188' :uploadDlgVisible='uploadDlgVisibleB' @hide='hideB' @handleSuccessImg='handleSuccessImgB'></upload-img>
		</el-row>
	</div>
</template>

<script>
	import uploadImg from '@/components/uploadImg/uploadImg'
	export default {
		components: {
			uploadImg
		},
		data() {
			return {
				pemissionList: [1, 2, 3],
				pemission: null,
				uploadDlgVisibleB: false,
			}
		},
		methods: {
			resetForm(formName) {
				if(this.$refs[formName] !== undefined) {
					this.$refs[formName].resetFields();
				}
			},
			test() {
				console.log(this.pemissionList.some(item => item == '1'));
			},
			uploadImgB(e) {
				console.log(e);
				this.uploadDlgVisibleB = true;
				this.$refs['uploadImgB'].uploadImg(e);
			},
			hideB() {
				this.$refs['uploadInputB'].value = null;
				this.uploadDlgVisibleB = false;
			},
			handleSuccessImgB(data) {
				this.$message.success('上传成功！');
				this.hideB();
			},
		},
		mounted() {
			this.test()
		}
	}
</script>

<style scoped>
	.avatar-uploader-icon {
		border: 1px dashed #d9d9d9;
		font-size: 28px;
		color: #8c939d;
		width: 120px;
		height: 120px;
		line-height: 120px;
		text-align: center;
		cursor: pointer;
	}
</style>