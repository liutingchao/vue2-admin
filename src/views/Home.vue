<template>
	<div class="home">
		<div class="header">
			<i class="el-icon-s-operation" @click="handleCollapse"></i>
			<div>
				<el-dropdown trigger="hover">
					<div class='userInfo'>
						<span style="color: #fff;">小agiao</span>
						<img src="../../public/img/20180419163649.jpg">
					</div>
					<el-dropdown-menu slot="dropdown">
						<!--<el-dropdown-item @click.native='showUserFormDlg'>个人中心</el-dropdown-item>
						<el-dropdown-item @click.native='showRetrievePwdDlg'>修改密码</el-dropdown-item>-->
						<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</div>
		<div class="hkmain">
			<div class="leftBar" :class="{'collapseLeftBar':isCollapse}">
				<el-menu router :default-active="$route.path" :unique-opened='true' class="el-menu-vertical-demo" background-color="#304156" text-color="#EBEEF5" active-text-color="#409EFF" :collapse="isCollapse">
					<el-submenu :index="index+''" v-for='(item,index) of menuList' :key='index' v-if="item.name!=='login'">
						<template slot="title">
							<i :class="item.meta.icon"></i>
							<span slot="title" v-text="item.name" style="display: inline-block;text-align: center;width: 60%;"></span>
						</template>
						<el-menu-item-group>
							<el-menu-item v-for='(child,index) of item.children' :key='index' :index="child.path" v-text='child.meta.label'></el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</div>
			<div class="rightBar">
				<div class="hk-tagsView">
					<tags-view></tags-view>
				</div>
				<div class="mainContent">
					<transition name="fade-transform" mode="out-in">
						<keep-alive :include="cachedViews">
							<router-view :key="menuItemKey" />
						</keep-alive>
					</transition>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import TagsView from '@/components/TagsView'

	export default {
		name: 'home',
		components: {
			TagsView
		},
		data() {
			return {
				isCollapse: false,
				menuList: this.$router.options.routes
			}
		},
		computed: {
			menuItemKey() {
				return this.$route.fullPath
			},
			cachedViews() {
				return this.$store.state.tagsView.cachedViews
			}
		},
		methods: {
			handleCollapse() {
				this.isCollapse = !this.isCollapse;
			},
			logout() {
				this.$confirm('确认退出吗?', '提示', {}).then(() => {
					sessionStorage.clear();
					this.$router.replace({
						path: '/login'
					});
					this.$store.dispatch('delAllViews');
				}).catch(() => {});
			}
		},
		created() {
			/*console.log(this.$router.options.routes);*/
		}
	}
</script>
<style lang="scss" scoped>
	.home {
		height: calc(100vh);
		overflow-x: hidden;
		overflow-y: auto;
	}
	
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 60px;
		background: #242f42;
		padding: 0 15px;
		i {
			font-size: 25px;
			color: #fff;
			cursor: pointer;
		}
	}
	
	.userInfo {
		display: flex;
		align-items: center;
		padding-right: 30px;
		img {
			width: 36px;
			border-radius: 50%;
			margin-left: 10px;
		}
	}
	
	.hkmain {
		height: calc(100vh - 60px);
		display: flex;
		.leftBar {
			flex: 0 0 160px;
			height: 100%;
			background: #304156;
			width: 160px;
			transition: all .2s linear;
			overflow-x: hidden;
			overflow-y: auto;
		}
		.rightBar {
			background: #42B983;
			flex: 1;
			height: 100%;
			overflow-y: auto;
			overflow-x: hidden;
			transition: all .2s linear;
			overflow-x: hidden;
			overflow-y: auto;
		}
	}
	
	.el-menu {
		border: none;
	}
	
	.collapseLeftBar {
		flex: 0 0 64px !important;
		width: 64px !important;
	}
	
	.hk-tagsView {
		height: 31px;
		background: #fff;
	}
	
	.mainContent {
		height: calc(100vh - 91px);
		box-sizing: border-box;
		padding: 10px;
		background: #eef0f3;
	}
	
	.fade-transform-leave-active,
	.fade-transform-enter-active {
		transition: all .5s;
	}
	
	.fade-transform-enter {
		opacity: 0;
		transform: translateX(-30px);
	}
	
	.fade-transform-leave-to {
		opacity: 0;
		transform: translateX(30px);
	}
	
	::-webkit-scrollbar {
		width: 2px;
	}
	
	::-webkit-scrollbar-track {
		background-color: #bee1eb;
	}
	
	::-webkit-scrollbar-thumb {
		background-color: #00aff0;
		border-radius: 3px;
	}
	
	::-webkit-scrollbar-thumb:hover {
		background-color: #9c3
	}
	
	::-webkit-scrollbar-thumb:active {
		background-color: #00aff0
	}
</style>
<style>
	.el-submenu__title i {
		color: #EBEEF5 !important;
	}
	
	.el-menu-item,
	.el-menu--popup {
		text-align: center !important;
		min-width: 160px !important;
	}
</style>