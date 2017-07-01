// functions to set, get and delete cookies with raw javascript
function allCookies() {
    var resultCookie = [];
    var set_cookies = document.cookie ? document.cookie.split(";") : [];
    set_cookies.forEach(function (cookie, index){
      resultCookie[index] = "ad";
    })
    return resultCookie;
}


function deleteCookie(name,path){
  // In order to delete a cookie Just specify its name and if you need to reomve it from specific path you can do that too by passing path variable
  document.cookie = name + "=" + "; expires=Thu, 01 Jan 1970 00:00:01 GMT" + ((path) ? "; path=" + path : "") + ";";
}
