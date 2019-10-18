console.log("scripted success");
function login() {
  var name = document.getElementById("user_email").value;
  var pwd = document.getElementById("user_pwd").value;
  //   console.log("Logged!!");
  //   console.log("Name is " + name + " and this is pwd " + pwd);
  //   document.getElementById("user_email_dis").innerHTML = name;
  //   document.getElementById("user_pwd_dis").innerHTML = pwd;

  if (name === "this@email.com" && pwd === "thispass") {
    sessionStorage.setItem("currentUsr", name);
    sessionStorage.setItem("password", pwd);
    location.assign(
      "file:///F:/React%20-%20project/Gdmail/Screens/dashboard.html"
    );
  } else {
    alert("Wrong credentials");
  }
}
