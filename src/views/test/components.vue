<template>
	<div id="">
		组件测试
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			async getData(){
				let param = {page: 1,pageSize: 20};
				let res = await this.$http.post('/hero/getHeroList', param);
				console.log(res);
			}
		},
		mounted(){
			this.getData();
		}
	}
	
	
	
</script>

<style>
</style>