

function setSignUpVolunteer() {
    $(".memberOnly").hide()
    $("#signup-heading").text("Signup to Volunteer!")
    $("#signup").attr("action", "/account/signup?signup=VOLUNTEER")
}

function setSignUpMember() {
    $(".memberOnly").show()
    $("#signup-heading").text("Signup for a Fresh Start")
    $("#signup").attr("action", "/account/signup?signup=MEMBER")
}