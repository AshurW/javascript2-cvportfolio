$(function () {
    //hide the project and about me Div at the start
    $("#project, #about").hide();

    $("#homeLink, #projectLink, #aboutLink, #cardProjectLink, #cardAboutLink").bind("click", function () {
        // checks what you have clicked on the navbar remove the other div and show the one you
        // have selected and also buts an active class to indicated in the navbar where you are
        if ($(this).attr("id") == "projectLink" || $(this).attr("id") == "cardProjectLink") {
            $("#home, #about").hide();
            $("#homeLink, #aboutLink").removeClass("active");
            $("#project").show();
            $("#projectLink").addClass("active");
        } else if ($(this).attr("id") == "aboutLink" || $(this).attr("id") == "cardAboutLink") {
            $("#home, #project").hide();
            $("#homeLink, #projectLink").removeClass("active");
            $("#about").show();
            $("#aboutLink").addClass("active");
        } else {
            $("#project , #about").hide();
            $("#projectLink, #aboutLink").removeClass("active");
            $("#home").show();
            $("#homeLink").addClass("active");
        }
    });
});