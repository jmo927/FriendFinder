$("#submit").on("click", function (event) {
    event.preventDefault();

    var newFriend = {
        name: $("#input-name").val().trim(),
        email: $("#input-email").val().trim(),
        photo: $("#input-photo").val().trim(),
        answers: []
    }

    for (let i = 1; i < 11; i++) {
        let inputAnswer = $("#input" + i).val();;

        newFriend.answers.push(+inputAnswer);
    }

    $.post("/api/friends", newFriend)
        .then(function(data) {
            let bffName = $("<h3>")
                .text("Name: " + data.name);
            let bffEmail = $("<p>")
                .text(data.email);
            let bffImg = $("<img>").attr("src", data.photo)
                .addClass("profile-pic")
                .css("width", "300");
            
            $(".modal-body").append(bffName, bffEmail, bffImg);
            
            $('#myModal').modal('show')
        });
    
})  