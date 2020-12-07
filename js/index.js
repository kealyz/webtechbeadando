$(document).ready(function () {
	$("#content").load("welcome.html");
	$.each($(".menu a"), function(index, value) {
		$(value).click(function (event) {
			event.preventDefault();
			if($(this).attr("href")== "index.html") {
				open("index.html","_self");
			} else {
				$("#content").load($(this).attr("href"));
			}
		});
	});
});