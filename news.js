        $('#get_newsletter').submit(function(e){
            e.preventDefault();

            let data =  new FormData(this);
            console.log(data);

            $.blockUI({
                message: 'Please Wait...',
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
                url: 'treat_newsletter.php',
                type: 'POST',
                // dataType: 'text',
                contentType: false,
                cache: false,
                processData:false,
                data: new FormData(this),
                success: function (response) {
                    $.unblockUI();
                    if (response == '1') {
                        swal("Ended !", "Saved successfully.", "success");
                        $("#get_newsletter").trigger('reset')
                    }else if (response == '2'){
                        swal("Error!", "An error has occurred while saving your mail", "error");
                    }else{
                        swal("Error!", "Server error", "error");
                    }
                },
                error: function () {
                    $.unblockUI();
                    swal("Erreur!", "An error has occurred while saving your mail.. Ajax", "error");
                }
            });
        });