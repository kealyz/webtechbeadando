function removeCar(id)
{
	$.ajax({
		type:"DELETE",
		url:"https://webtechcars.herokuapp.com/api/cars/"+id,
		headers: {
			"Access-Control-Allow-Origin": "*"
		},
		success: function() {
			alert("Car successfully removed");
			location.reload();
		},
		error: function() {
			alert("Error while deleting car");
		}
	});
}