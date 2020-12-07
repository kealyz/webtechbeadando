$(document).ready(function (){
	 $.getJSON("https://webtechcars.herokuapp.com/api/cars", function(data) {
		 var table = $("#carTable");
		 $.each(data,function(index,car) {
			 var row = $('<tr></tr>');
			 var namecell = $('<td>'+car.name+'</td>');
			 var consumptioncell = $('<td>'+car.consumption+'</td>');
			 var colorcell = $('<td>'+car.color+'</td>');
			 var manufacturercell = $('<td>'+car.manufacturer+'</td>');
			 var availableCell = $('<td>'+car.avaiable+'</td>');
			 var yearcell = $('<td>'+car.year+'</td>');
			 var horsepowercell = $('<td>'+car.horsepower+'</td>');
			 if(index > 3)
			 {
				var removeicon = $('<td><img src="icons/deleteicon.png" style="width: 16px;" onclick="removeCar(\''+car._id+'\');"></td>');
			 }
			 
			 
			 
			 $(row).append(namecell);
			 $(row).append(consumptioncell);
			 $(row).append(colorcell);
			 $(row).append(manufacturercell);
			 $(row).append(availableCell);
			 $(row).append(yearcell);
			 $(row).append(horsepowercell);
			 $(row).append(removeicon);
			 $(table).append(row);
		 })
	 })

		$(".headerdivpin").text("Cars");
});