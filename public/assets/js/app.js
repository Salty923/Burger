
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




    console.log("ready!");
});