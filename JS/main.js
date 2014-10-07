window.onload = function(){
	var aModelList = document.getElementsByClassName('modleName');
	var aModelImg = document.getElementsByClassName('modelImg');
	var _this;

	for(var i=0; i<aModelList.length; i++){
		aModelList[i].style.color = '#0269A9';
		aModelList[i].index = i;
		aModelList[i].onclick = function(){	
			modelClick(this.index);
		};
	};

	for(var i=0; i<aModelImg.length; i++){
		aModelImg[i].index = i;
		aModelImg[i].onclick = function(){
			modelClick(this.index);
		};
	};

	function modelClick(index){
			for(var j=0; j<aModelList.length; j++){
				aModelList[j].style.color = '#0269A9';
			};
			aModelList[index].style.color = '#C76126';
	};
};