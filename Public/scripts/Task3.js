// Task No:3
/* 
Feature:
Upload image when user click on button
Save the uploaed image in folder
Display Upload image in div container
*/
$(document).ready(function()
{

     
        // if (objFileInput.files[0]) 
        // {
        //     let fileReader = new FileReader();
        //     fileReader.onload = function (e) {
        //         $('#blah').attr('src', e.target.result);
        //         $("#ImgContainer").html('<img src="'+e.target.result+'" width="200px" height="200px" class="upload-preview" />');
        //         $("#ImgContainer").css('opacity','0.7');
             
        //     }
        //     fileReader.readAsDataURL(objFileInput.files[0]);
       // }
    //to upload images
    
	$("#btnUpload").click(function() {
        console.log('rrre');
		$.ajax({
        	url: './images/',
			type: "POST",
			data:  new FormData(this),
			beforeSend: function(){$("#body-overlay").show();},
			contentType: false,
    	    processData:false,
			success: function(data)
		    {
			$("#ImgContainer").html(data);
			$("#ImgContainer").css('opacity','1');
			setInterval(function() {$("#body-overlay").hide(); },500);
			},
		  	error: function() 
	    	{
	    	} 	        
	   });
	});

});

