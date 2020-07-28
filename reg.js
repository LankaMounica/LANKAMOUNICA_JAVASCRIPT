
    function registration()
	{

		var name= document.getElementById("t1").value;
		var email= document.getElementById("t2").value;
		var uname= document.getElementById("t3").value;
		var address = document.getElementById("t4").value;
		var clg = document.getElementById("t6").value;
		var contact = document.getElementById("t5").value;
		
		var phnno = /^\d{10}$/;
		var letters = /^[A-Za-z]+$/;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if(name=='')
		{
			alert('Please enter your name');
		}
		else if(!letters.test(name))
		{
			alert('Name field required only alphabet characters');
		}
		else if(email=='')
		{
			alert('Please enter your user email id');
		}
		else if (!filter.test(email))
		{
			alert('Invalid email');
		}
		else if(uname=='')
		{
			alert('Please enter the user name.');
		}
		else if(!letters.test(uname))
		{
			alert('User name field required only alphabet characters');
		}
		else if(address==''){
			alert('Please Enter your address')
		}
		else if(clg==''){
			alert('Please Enter your College')
		}
		else if(contact=''){
			alert('Please enter your contact')
		}
		else if(!phnno.test(contact)){
			alert("Enter valid Phone")
		}
		
		else
		{				                            
               alert('Thank you! You have registered sucessfully.');
			    
		}
	}