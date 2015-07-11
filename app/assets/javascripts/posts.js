$(":file").filestyle({input: false, buttonName: "btn-primary", buttonText: "Imagen", icon: false});

//
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#preview_post').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#pImage").change(function(){
        readURL(this);
    });

