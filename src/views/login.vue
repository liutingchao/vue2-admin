<template>
	<login-bgd>
		<el-card style="margin-right: 180px;width: 360px;">
			<div slot="header" class="clearfloat" style="text-align: center">
				<span>登录</span>
			</div>
			<el-form :model="loginInfo" ref='loginInfo' label-width="0" :rules="loginInfoRules" @keydown.native.enter='handleLogin' style="margin-buttom: -40px;">
				<el-form-item prop='userName'>
					<el-input type="text"v-model="loginInfo.userName" auto-complete="off" placeholder="请输入手机号">
						<i slot="prefix" class="el-input__icon el-icon-user" style="font-size: 18px;"></i>
					</el-input>
				</el-form-item>
				<el-form-item prop='password'>
					<el-input :type="passwordType" v-model="loginInfo.password" auto-complete="off" placeholder="6-16位密码">
						<i slot="prefix" class="el-input__icon el-icon-lock" style="font-size: 18px;"></i>
					</el-input>
					<i class='el-icon-view showPwd' @click="showPwd"></i>
				</el-form-item>
				<!--<el-form-item prop='captcha'>
					<el-input type="text" v-model="loginInfo.captcha" placeholder="验证码" style='width: 62%;float: left;'></el-input>
					<img style="float: left;width:36%;height: 40px;cursor: pointer;margin-left: 2%;border-radius: 4px;" @click="changeCaptcha" :src="captchaImg" />
				</el-form-item>-->
				<el-form-item>
					<el-button :loading="loading" style='border-radius: 6px;' type="primary" class="w100" @click="handleLogin">登录</el-button>
				</el-form-item>
			</el-form>
		</el-card>
	</login-bgd>
</template>
<script>
	import LoginBgd from '@/components/LoginBgd'

	class LoginInfo {
		constructor() {
			this.userName = null;
			this.password = null;
			this.captcha = null;
		}
		reset() {
			this.constructor();
		}
	};

	export default {
		components: {
			LoginBgd
		},
		data() {
			return {
				passwordType: 'password',
				loading: false,
				loginInfo: new LoginInfo(),
				captchaImg: "/api/sys/getCaptcha",
				loginInfoRules: {
					userName: [{
						validator: function(rule, value, callback) {
							if(value) {
								if(/^1[3|5|9|8|7]\d{9}$/.test(value) == false && value != 'admin') {
									callback(new Error("请输入正确的手机号"))
								} else {
									callback();
								}
							} else {
								callback(new Error("请输入手机号"))
							}
						},
						trigger: 'blur'
					}],
					password: [{
						validator: function(rule, value, callback) {
							if(value) {
								if(/^[a-z0-9]{6,16}$/.test(value) == false) {
									callback(new Error("请输入正确的密码"))
								} else {
									callback();
								}
							} else {
								callback(new Error("请输入密码"))
							}
						},
						trigger: 'blur'
					}],
					captcha: [{
						required: true,
						message: '请输入验证码',
						trigger: 'blur'
					}]
				}
			}
		},
		methods: {
			showPwd() {
				this.passwordType = this.passwordType == 'password' ? 'text' : 'password';
			},
			handleLogin() {
				this.$refs.loginInfo.validate((valid) => {
					if(valid) {
						if(this.loginInfo.password=='123456'){
							sessionStorage.setItem("userId", 1);
							this.$router.replace({path: '/'});
						}else{
							this.$message.warning('正确密码为123456');
							return false;
						}
					} else {
						console.log('error submit!!');
						return false;
					}
				})
			},
			changeCaptcha() {
				this.captchaImg = this.captchaImg + '?' + new Date();
			},
		}
	}
</script>

<style scoped lang="scss">
	.login-title {
		margin: 0 0 20px;
		text-align: center;
		color: #409eff;
		letter-spacing: 3px;
	}
	
	.showPwd {
		color: #909399;
		cursor: pointer;
		position: absolute;
		top: 13px;
		right: 10px;
	}
	.w100{
		width: 100%;
	}
</style>