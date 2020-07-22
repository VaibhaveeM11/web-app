// Task No:3
/* 
Feature:
Upload image when user click on button
Save the uploaed image in folder
Display Upload image in div container
*/
$(document).ready(function()
{

    console.log('document');

 $('#btnUpload').on('change',function()
     {
        let myfileReader = new FileReader();
      if(typeof(FileReader)!='undefined' )
      {
        let ImgContainer = $("#ImgContainer");
        ImgContainer.empty();
        myfileReader.onload = function (e) 
        {
            console.log('file');

            $("<img />", 
            {
                "src": e.target.result,
                "class": "thumb-image"
            }).appendTo(ImgContainer).css('width','300px');

        }
        ImgContainer.show();
        myfileReader.readAsDataURL($(this)[0].files[0]);
    } 
    else
     {
        alert("invalid img");
    }
 }); 

    
});

