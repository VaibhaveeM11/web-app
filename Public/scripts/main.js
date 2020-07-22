   //Feature:
        // !:email should be valid => contain@
        //2:pasword must be 8 character contain special character
        //  css
        // to get place holder data when user enter input

        $(document).ready(function(){

            let mail=$('#inputMail').val();
        
            let pass=$('#inputPass').val();
            //css
            $('#hideMail').hide();
            $('#hidePass').hide();

            $('#inputMail').click(function()
            { 
                $('#hideMail').show();
            });
            $('#inputPass').click(function()
            {
                $('#hidePass').show();
            });
               
            $('#inputMail').mouseleave(function()
            { 
                $('#hideMail').hide();
            });
            $('#inputMail').mouseleave(function()
            { 
                $('#hidePass').hide();
            })
        
                 $('#inputMail').keyup(function()
                 {
        
                    let mailTest=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
               // for e mail validation
                  if(mail==''  && mail.match(mailTest))
                     {
                        
                          alert('Enter Valid Mail');
                     
                             return false;
                     }
                     else
                     {
                        return true;
                     }
                 });
          
        // for password
            $('#inputPass').keyup(function(){
        
            let passTest=/^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
        
                if(pass ==''&& pass.match(passTest)
        )
                       {
                           alert('Enter Valid Password');
                           return false; 
                       }
                else
                {
                       return true;
                }
        
            })
               $('#btnLogIn').click(function()
               {   
                   
                       if(mail==true & pass==true)
                       {
                           console.log('y');
                           alert('Successfully logged in !');
                       }
        
                       else{
                        console.log('n');
                        alert('Unsuccessfully log in !');
        
                       }
        
                });
                
     });