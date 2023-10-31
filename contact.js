$(function() {
    $('#contact_form').submit(function(e){
        e.preventDefault();

        // var donne = $('#smsSend').serialize();
        // var donne = 'destinataire='+$('#destinataire').val()+'&emetteur='+$('#emetteur').val()+'&message='+$('#message').val()+'&verif='+$('#verif').val();
        let data =  new FormData(this);
        console.log(data);

        $.blockUI({
            message: 'Please wait...',
            css: {
                border: 'none',
                padding: '15px',
                backgroundColor: '#000',
                '-webkit-border-radius': '10px',
                '-moz-border-radius': '10px',
                opacity: .5,
                color: '#fff'
            }
        });

        $.ajax({
            url: 'treat_contact.php',
            type: 'POST',
            // dataType: 'text',
            contentType: false,
            cache: false,
            processData:false,
            data: new FormData(this),
            success: function (response) {
                $.unblockUI();
                if (response.indexOf('1') >= 0) {
                    swal("Done!", "Your message has been sent successfully \n We will contact you shortly", "success");
                    setTimeout(function () {
                        window.location = 'index.php';
                    }, 3000);
                }else if (response.indexOf('2') >= 0){
                    swal("Error!", "An error has occurred while sending your message. Please try again", "error");
                }else {
                    swal("Error!", "An error has occurred while sending your message. Please try again", "error");
                }
            },
            error: function () {
                $.unblockUI();
                swal("Error!", "Error sending message ... Ajax error", "error");
            }
        });
    })
});