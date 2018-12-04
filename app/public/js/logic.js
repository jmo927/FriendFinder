$("#submit").on("click", function (event) {
    event.preventDefault();

    //Store data
    var newFriend = {
        name: $("#input-name").val().trim(),
        email: $("#input-email").val().trim(),
        photo: $("#input-photo").val().trim(),
        scores: []
    }

    for (let i = 1; i < 11; i++) {
        let inputAnswer = $("#input" + i).val();;
        newFriend.scores.push(+inputAnswer);
    }


    //Clear Data
    $("#input-name").val("");
    $("#input-email").val("");
    $("#input-photo").val("");

    for (let i = 1; i < 11; i++) {
        $("#input" + i).val("Choose...");
    }

    //Post the data
    $.post("/api/friends", newFriend)
        .then(function (data) {
            let bffName = $("<h3>")
                .text("Name: " + data.name);
            let bffEmail = $("<p>")
                .text(data.email);
            let bffImg = $("<img>").attr("src", data.photo)
                .addClass("profile-pic")
                .css("width", "300");

            $(".modal-body").empty();
            $(".modal-body").append(bffName, bffEmail, bffImg);

            $('#myModal').modal('show')
        });

})  