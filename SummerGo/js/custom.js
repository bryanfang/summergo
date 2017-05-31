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
	var fileBase = "C:/";
	var srcFileJson = {
		"files": [
		]
	};
	srcFileJson.files.push(arrFiles);
	$.ajax({
		type:"POST",
		url:"http://127.0.0.1:8000/demo/",
		data: srcFileJson,
		dataType: "application/json"
	});
	//Display progress bar
	$("#process-bar").toggle();
	initProgress();
	
	//pictures classifiered by tensorflow, which is returned as JSON format, then visit and add each picture to page as group
	var oJsonPic = {
		"bowl":[
			{
				"src": "robots.jpg",
				"alt": "Robots like cameras"
			},
			{
				"src": "monster.jpg",
				"alt": "Monsters!"
			},
			{
				"src": "C://Users//i312473//Desktop//workfiles//Velocity//D1-activities//IMG_9380.JPG",
				"alt": "Local Test"
			}
		],
		"bottle":[
			{
				"src": "santa.jpg",
				"alt": "Santa down under"
			},
			{   
				"src": "thumb6.jpg",
				"alt": "Sponguebob!"
			}
		]
	};
	if(oJsonPic.bowl){
		var arrBowl = oJsonPic.bowl;
		var oBowlUL= $("#bowl>ul");
		oBowlUL.append("<h3>Powl</h3>");
		for(var i=0; i<arrBowl.length;i++) {
			var oBowl = arrBowl[i];
			var src = oBowl.src;
			var alt = oBowl.alt;
			var sLI='<li><a href="#"><img src="'+src+'" alt="'+alt+'" /></a></li>';
			oBowlUL.append(sLI);
		}
	}
	if(oJsonPic.bottle){
		var arrBottle = oJsonPic.bottle;
		var oBottleUL = $("#bottle>ul");
		oBottleUL.append("<h3>Bottle</h3>");
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