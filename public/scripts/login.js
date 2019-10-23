function setLoginVolunteer() {
    $("#login-heading").text("Login Volunteer!")
    $("#login").attr("action", "/account/login?login=VOLUNTEER")
}

function setLoginMember() {
    $("#login-heading").text("Login Fresh Starter")
    $("#login").attr("action", "/account/login?login=MEMBER")
}