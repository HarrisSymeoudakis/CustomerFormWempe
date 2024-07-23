fetch('https://customerinfowempeserver.onrender.com/swagger/CustomerUserFields')
	.then(response => response.json())
	.then(data => {
		console.log(data);
		responseData = data;
		const usrFields = data.userFields
		document.getElementById('usrfield1').checked  = usrFields[0].value.boolean;
		document.getElementById('usrfield2').checked  = usrFields[1].value.boolean;

		document.getElementById('usrfield3').value = usrFields[2].value.number || "";
		document.getElementById('usrfield4').value = usrFields[3].value.number || "";
		document.getElementById('usrfield5').value = usrFields[5].value.number || "";
		document.getElementById('usrfield6').value = usrFields[6].value.number || "";
		document.getElementById('usrfield7').value = usrFields[7].value.number || "";
		document.getElementById('usrfield8').value = usrFields[8].value.number || "";

		document.getElementById('usrfield9').checked  = usrFields[9].value.boolean ;
		document.getElementById('usrfield10').checked  = usrFields[10].value.boolean;
		document.getElementById('usrfield11').checked  = usrFields[11].value.boolean ;
		document.getElementById('usrfield12').checked  = usrFields[12].value.boolean ;
		document.getElementById('usrfield13').checked  = usrFields[13].value.boolean ;
		document.getElementById('usrfield14').checked  = usrFields[14].value.boolean;
		
		

	})
	.catch(error => console.error('Error fetching data:', error));

