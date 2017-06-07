// JavaScript Document
$(function () {
	"use strict";
	$.getJSON("info.json", function (data) {

		var contentCount = data.content.length-1;
		var technicCount = data.technic.length-1;
		var fileNameRegex = /\index.html$/m;
		if (fileNameRegex.test(location.href)) {
			contentCount = data.content.length > 2 ? 2 : contentCount;
			technicCount = data.technic.length > 2 ? 2 : technicCount;
		}

		$(".info__row__ele>dl").remove();
		var i;
		for ( i = 0; i <= contentCount ; i++ ){
			$("#content").after("<dl><dt>" + data.content[i][0] + "</dt><dd>" + data.content[i][1] + "</dd></dl>");
		}
		
		for ( i = 0; i <= technicCount ; i++ ){
			$("#technic").after("<dl><dt>" + data.technic[i][0] + "</dt><dd>" + data.technic[i][1] + "</dd></dl>");
		}
	});
	
	$(".song__link > a").click(function(){
		$(".song__lyrics").remove();
		$(this).closest(".songListEle").append('<div class="song__lyrics"></div>');
		$(".song__lyrics").load( "./lyrics/amenohi.html .lyrics" );
		return false;
	});
});
