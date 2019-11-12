$(function() {
    $("#project, #about").hide();

    $("#homeLink, #projectLink, #aboutLink").bind("click", function() {
        // $("#home, #project, #about").hide();
        if ($(this).attr("id") == "projectLink") {
            $("#home, #about").hide();
            $("#project").show();
        } else if ($(this).attr("id") == "aboutLink"){
            $("#home, #project").hide();
            $(" #about").show();
        } else {
            $("#project , #about").hide();
            $("#home").show();
        }
    })

});