function suma(){
	
	let horain= document.getElementById("horain").value;
	let horasa= document.getElementById("horasa").value;
	
	let total = parseFloat(horain)+ parseFloat(horasa);
	
	document.form1.resultado.value=total;
}

