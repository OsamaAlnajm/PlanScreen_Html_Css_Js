const hidecheckbox = document.querySelector('#switcher');

hidecheckbox.addEventListener('change',function(e)
{



	
	
	// else 
	// 	alert("Not checked");


	  
   

	  if(hidecheckbox.checked)
	  {
	       document.getElementsByClassName('iraq-cards')[0].style.display = 'none';
	       document.getElementsByClassName('turkey-cards')[0].style.display = 'flex';



	  }
	  else 
	  {
	  	   document.getElementsByClassName('iraq-cards')[0].style.display = 'flex';
	       document.getElementsByClassName('turkey-cards')[0].style.display = 'none';
	  }
});