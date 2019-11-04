<template>
	<div>
		<h3 v-for="(item,index) of list"><i :class='item.icon'></i><span v-text="item.name"></span></h3>
	</div>
</template>

<script>
	export default {
		name:'echarts',
		data() {
			return {
				list:[
					{name:'xiaoliu'},
					{name:'xiaozhang'},
					{name:'xiaoli'}
				]
			}
		},
		methods: {
			setIcon(){
				let iconMap=new Map([
					['xiaoliu','el-icon-phone-outline'],
					['xiaoli','el-icon-eleme'],
					['xiaozhang','el-icon-zoom-in']
				]);
				for(let [index,item] of this.list.entries()){
					item.icon=iconMap.get(item.name);
					this.$set(this.list,index,item);
				}
				console.log(this.list);
			}
		},
		mounted(){
			this.setIcon();
		}
	}
	
	
</script>

<style>
</style>