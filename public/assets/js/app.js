
$(document).ready(function () {
    $('#addBurger').on("click",function(){
        event.preventDefault();
        var newBurger = {
            burger_name: $('#newBurger').val(),
        }
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $('#devour').on('click',function () {
        let devourBurger = $(this).data('id');
        alert(devourBurger);
        $.ajax('api/burgers',{
            type: 'PUT',
            data: devourBurger
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });


    $('#delete').on('click',function () {
        let deleteBurger = $(this).data('id');
        $.ajax('api/burgers',{
            type: 'DELETE',
            data: deleteBurger
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });




    console.log("ready!");
});