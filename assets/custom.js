$('#send').click(function(){
    var fname = $('#name').val();
    var em = $('#email').val();
    var sub = $('#subject').val();
    var msg = $('#message').val();
    if(fname == '' || em == '' || sub == '' || msg == '')
    $('.fill').html('<span style="color:red">Fill all input</span>');
    else
    $.ajax({
        url: 'email.php',
        method: 'POST',
        dataType: 'text',
        data:{
            fname: fname,
            em: em,
            sub: sub,
            msg: msg
        },
        beforeSend: function(){
            $('.fill').html('');
            $('#msg').html('Processing...');
        },
        success: function(response){
            $('.fill').html('<span style="color:green">Message sent</span>');
        },
        error: function(error){
            $('.fill').html('<span style="color:red">There was an error</span>');
        }
    })
})