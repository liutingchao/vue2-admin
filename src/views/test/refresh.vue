<template>
	<div id="" style="margin-top: 10px;">

		<el-table :data="obj.tableData" style="width: 100%">
			<el-table-column prop="dep_name" label="部门" align='center'></el-table-column>
			<el-table-column label="分配周期" align='center'>
				
				<template slot-scope="scope">
       				<el-button-group size='small'>
					  	<el-button size='small' plain v-for='(cItem,index) of scope.row.weekData' v-text='cItem.label' :class="cItem.checked?'actBtn':''" :key='index' @click='handleClick(cItem)'></el-button>
					</el-button-group>
      			</template>
				
			</el-table-column>
		</el-table>

	</div>
</template>

<script>
	
	export default {
		name: 'tableTest',
		data() {
			return {
				obj:{
					tableData:[],
				},
				
				tempWeekData:[
					{checked:false,label:'周日',value:0},
					{checked:false,label:'周一',value:1},
					{checked:false,label:'周二',value:2},
					{checked:false,label:'周三',value:3},
					{checked:false,label:'周四',value:4},
					{checked:false,label:'周五',value:5},
					{checked:false,label:'周六',value:6},
				]
			}
		},
		methods: {
			
			handleData(){
				for(let item of this.obj.tableData){
					let tempArr=item.week_days.split(',');
					let weekData=deepClone(this.tempWeekData);
					for(let aItem of weekData){
						for(let bItem of tempArr){
							if(aItem.value==bItem){
								aItem.checked=true;
							}
						}
						item.weekData.push(aItem);
					}
				}
			},
			handleClick(item){
				item.checked=!item.checked;
			}
		},
		created(){
			this.obj.tableData=[
						{dep_name:'策划部',week_days:'0,1,2,3',weekData:[]},
						{dep_name:'研发部',week_days:'0,3,5',weekData:[]}
					];
		},
		mounted() {
			this.handleData();
		}
	}
	function deepClone(item) {
		if(!!item) {
			return JSON.parse(JSON.stringify(item));
		}
	}
	
	
</script>

<style scoped>
	.actBtn{
		border-color: #409EFF !important;
		border-right: 1px solid #409EFF !important;
		z-index: 10 !important;
	}
</style>