$(document).ready(function(){	
	// initialize with defaults
	$("#inputfile").fileinput({
		showCaption: false,
		showRemove: false,
		showUpload: false,
		allowedPreviewTypes: ['image']
	});
});
function start(obj){
	var arrFiles = $("#inputfile")[0].files;
	var fileBase = "C://demo_images//";
	var files = [];
	for(var i=0;i<arrFiles.length;i++){
		files.push(fileBase + arrFiles[i]);
	}
	var srcFileJson = {
		"files": files
	};
	
	$.ajax({
		url:"http://127.0.0.1:8000/demo/",
		success: function(data){
			var result = data.result;
			if(result.bowls){
				var arrBowl = result.bowls;
				var oBowlUL= $("#bowls>ul");
				oBowlUL.append("<h3>Powls</h3>");
				for(var i=0; i<arrBowl.length;i++) {
					var oBowl = arrBowl[i];
					var src = oBowl.src;
					var alt = oBowl.alt;
					var sLI='<li><a href="#"><img src="'+src+'" alt="'+alt+'" /></a></li>';
					oBowlUL.append(sLI);
				}
			}
			if(result.bottles){
				var arrBottle = result.bottles;
				var oBottleUL = $("#bottles>ul");
				oBottleUL.append("<h3>Bottles</h3>");
				for(var j=0;j<arrBottle.length;j++) {
					var oBottle = arrBottle[j];
					var src = oBottle.src;
					var alt = oBottle.alt;
					var sLI='<li><a href="#"><img src="'+src+'" alt="'+alt+'" /></a></li>';
					oBottleUL.append(sLI);
				}
			}
			if(result.plates){
				var arrBottle = result.plates;
				var oBottleUL = $("#plates>ul");
				oBottleUL.append("<h3>Plates</h3>");
				for(var j=0;j<arrBottle.length;j++) {
					var oBottle = arrBottle[j];
					var src = oBottle.src;
					var alt = oBottle.alt;
					var sLI='<li><a href="#"><img src="'+src+'" alt="'+alt+'" /></a></li>';
					oBottleUL.append(sLI);
				}
			}
			if(result.cups){
				var arrBottle = result.cups;
				var oBottleUL = $("#cups>ul");
				oBottleUL.append("<h3>Cups</h3>");
				for(var j=0;j<arrBottle.length;j++) {
					var oBottle = arrBottle[j];
					var src = oBottle.src;
					var alt = oBottle.alt;
					var sLI='<li><a href="#"><img src="'+src+'" alt="'+alt+'" /></a></li>';
					oBottleUL.append(sLI);
				}
			}
			//Add classifier moving animate
			$(document).ready(function(){
				$('ul.thumb li').Zoomer({speedView:200,speedRemove:400,altAnim:true,speedTitle:400,debug:false});
			});
		}
	});
	//Display progress bar
	$("#process-bar").toggle();
	initProgress();
}