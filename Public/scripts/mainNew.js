// User Enter :Mail =Vaibhaveemv11@gmail.com
//Pass :12345678
// open the main page
$(document).ready(function()
{
     let mail= $('inputMail').val();
     let pass= $('inputPass').val();
     let givenMail='vaibhaveemv11@.com';
     let givenPass=12345678;

 $('#inputMail').keyup(function(){
     if(mail==givenMail)
        {
            console.log('login');
            return true;
        }
        else
        {
            return false;
        }
 });
 $('#inputPass').keyup(function()
      {
  if( pass==givenPass)
        {
            console.log('login');
            return true;
        }
        else
        {
            return false;
        } 
 });
  $('#btnLogIn').click(function()
        {
              if(mail==true && pass==true)
              {
                  return $(this).window.location.href('./Public/pricing.html');
              }
              else{
                  alert('invalid user');
              }
  });

        // to add new row
  $('new-row').hide();

 $('#btn-addrow').click(function()
        {
              // Selecting last id 
  let lastname_id = $('.pricing-container input[type=text]:nth-child(1)').last().attr('id');
  let split_id = lastname_id.split('_');

            let index = Number(split_id[1]) + 1;
            let newRow = $('.pricing-container:last').clone(true);

            $(newRow).find('input[type=text]:nth-child(1)').attr("id","inputDesc_"+index);
            $(newRow).find('input[type=text]:nth-child(2)').attr("id","inputPrice_"+index);
            $(newRow).find('input[type=text]:nth-child(3)').attr("id","inputNew_"+index);

 // Set value
 // $(newRow).find('input[type=text]:nth-child(1)').val("inputDesc_"+index);
   // $(newRow).find('input[type=text]:nth-child(2)').val("inputPrice_"+index);
  $(newRow).insertAfter(".pricing-container:last").css({ 'background-color':'white','padding':'1em'});

  //3:Task When user click on the check box
        // Hide new input field
    $('#inputNew_1').hide();
  let removeAdd=$(newRow).find('input[type=text]:nth-child(3)').attr("id","inputNew_"+index).hide();
        $('#ad-price').click(function()
        {
            if( $('#check-bx').prop('checked')==true)
             {
                $(removeAdd).show();
                $('#inputNew_1').show();

            }
   $(this).click(function(){
                if( $('#check-bx').prop('checked')===false)
                {

                    $(removeAdd).hide();
                    $('#inputNew_1').hide();
    
                 }
            });
            
   });

});


        
    });