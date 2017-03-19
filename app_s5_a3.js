/* This is the script file from where we are passing the value */	
/* Session 5 Assignment 3 */
	
	
	var employee ={
		
		name: 'Bryan', 
		age: 28,
		salary: '12 Lakh per annum',
		address:{
			City: 'Bangalore',
			State: 'Karnataka',
			Pincode: 680013
		}
	}
	/* Object is been created here */
	
	console.log("Details are as below: ");
	console.log("Name: " + employee.name);
	console.log("Age: " + employee.age);
	console.log("Salary: " + employee.salary);
	console.log("Address: ")
	console.log("City: " + employee.address.City);
	console.log("State: " + employee.address.State);
	console.log("Pincode: " + employee.address.Pincode);
