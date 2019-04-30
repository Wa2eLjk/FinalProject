$(document).ready(function(){

    $('#submit').on('click',function(){
        var userEmail = $('#email').val();
        var userPass = $('#password').val();
        
        console.log(userEmail);
        console.log(userPass);
        if(userEmail === 'w.alsh@gmail.com')
        {
            localStorage.setItem('users',userEmail)
            console.log('you have access')
        }
        else{

            console.log('goodBye')
        }

    })
        
 






















})