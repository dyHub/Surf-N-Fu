function pullJSON(){
			
	$.ajax ({
	    url: '/json/login.json',
	    dataType: 'text',
	    cache: false,
	    success: function(data) {
	        var obj = JSON.parse(data);
	        console.log(data);
			document.getElementById("uname").value = obj.username;
			document.getElementById("password").value = obj.password;
			window.location = "/logged";
	    }
	});
}