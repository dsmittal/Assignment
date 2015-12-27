var inputs = document.getElementsByTagName('input'); 
for(var k=0;k<inputs.length;k++) { 
    var input = inputs[k] ;
    var type = input.getAttribute('type');
    if(type == 'email')
        input.value = "robottest9@gmail.com";
    if(type == 'password')
    input.value = "Qwerty09";
} 


try{
	var sign = document.getElementById('signIn');
sign.click();
}catch(err){

}

try{
		var forms=document.getElementsByTagName('form'); 
forms[0].submit();
	
}catch(err){


}

setTimeout(function(){ alert("Hello"); }, 3000);




 
