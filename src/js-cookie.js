// functions to set, get and delete cookies with raw javascript
function allCookies() {
    var resultCookie = [];
    var set_cookies = document.cookie ? document.cookie.split(";") : [];
    set_cookies.forEach(function (cookie, index){
      resultCookie[index] = "ad";
    })
    return resultCookie;
}
