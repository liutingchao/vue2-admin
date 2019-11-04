<template>
	<!--分页组件-->
	<div class="fr">
		<el-pagination	
			background 				
			layout="prev, pager, next,jumper" 
			@size-change="sizeChange"
		    @current-change="currentChange"
		    :current-page.sync="page.currentPage"	
		    :pager-count="page.pagerCount"		   	 
		    :page-sizes="page.pageSizes"
		    :page-size="page.pageSize" 
		    :total="page.total"
			class="hidden-md-and-up">
		</el-pagination>
		
		<!--小型分页-->
		<el-pagination				
			background 				
			layout="total,sizes, prev, pager, next,jumper" 
			@size-change="sizeChange"
		    @current-change="currentChange"
		    :current-page.sync="page.currentPage"	
		    :pager-count="page.pagerCount"		   	 
		    :page-sizes="page.pageSizes"
		    :page-size="page.pageSize" 
		    :total="page.total"
			class="hidden-sm-and-down">
		</el-pagination>
	</div>
</template>

<script>
	export default {
	  	name: 'PagiNation',
	  	props:['page'],
	  	data() {
	    	return {
	    		
	    	}
	  	},
	  	methods: {
	    	sizeChange(val) {
	      		this.$emit('sizeChange',val);
	    	},
	    	currentChange(val) {
	      		this.$emit('currentChange',val);
	    	}
	  	}
	}
	
	
	
	
</script>

<style>
	
	
	
	
	
</style>