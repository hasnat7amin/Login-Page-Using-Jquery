$(document).ready(function(){
    $('form.LoginForm').css({
        'background-color':'black',
        'color':'white',
        'text-align':'left',
        'padding-top':"50px",
        'padding-left':'120px',
        'padding-bottom':"150px",
        'font-size':'30px',
        'font-family':"sans-serif"
    })

    $('input').css({
        'width':'220px ',
        'height':'30px',
        'border':'2px solid black ',
        'border-radius':'25px',
        'padding-left':'10px',
        'margin-bottom':'30px'
    })

    $('input').hover(
        function(){
            $(this).css({
                'background-color':'pink'
            })
        }
        ,function(){
            $(this).css({
                'background-color':'white'
            })
        }
    )

    $('button.Submit').css({
        'width':'120px',
        'height':'30px',
        'background-color':'wheat',
        'border':'2px solid black',
        'border-radius':'10px',
        'font-weight':'bold',
        'font-size':'14px'
    })
    
    $('button.Submit').click(function(e){
        e.preventDefault();
        let name = $('input.name').val()
        let email = $('input.email').val()
        let password = $('input.password').val()

        console.log("Your Name is : "+name+"\nYour Email is : "+email+"\nYour password is : "+password)
        alert("Your Name is : "+name+"\nYour Email is : "+email+"\nYour password is : "+password)
    })

})

