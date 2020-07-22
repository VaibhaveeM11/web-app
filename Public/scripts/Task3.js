// Task No:3
/* 
Feature:
Upload image when user click on button
Save the uploaed image in folder
Preview Upload image in div container
*/
$(document).ready(function()
{

  <img src='./../imahe'></img>

    $.ajax({
        url: "./../", // Url to which the request is send
        type: "POST",             // Type of request to be send, called as method
        data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
        contentType: false,       // The content type used when sending data to the server.
        cache: false,             // To unable request pages to be cached
        processData:false,        // To send DOMDocument or non processed data file it is set to false
        success: function(data)   // A function to be called if request succeeds
        {
        $('#loading').hide();
        $("#message").html(data);
        }
        });
     // to upload img
     });
});