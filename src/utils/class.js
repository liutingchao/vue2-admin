class Page{
	constructor(){
		this.total=100;
		this.pageSizes=[10,20,30,50,100,200,500];
		this.pageSize=this.pageSizes[0];
		this.pagerCount=5;
		this.currentPage=1;
	}
	reset(){
		this.constructor();
	}
}


class Comb{
	constructor(label,value){
		this.label = label;
		this.value = value;
	}
	reset(){
	    this.constructor();
    }
}
export {Page,Comb};