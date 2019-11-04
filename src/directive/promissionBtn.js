import Vue from 'vue';

Vue.directive('promissionBtn',{
    bind(el,binding){
    	if(binding.value && binding.value.length){
    		el.style.display=binding.value.some(item=>item==el.id)?"inline-block":'none';
    	}else{
    		el.style.display='none';
    	}
    }
})