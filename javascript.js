const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (() => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
  signupBtn.click();
  return false;
});


let btn = document.querySelector(".loginbtn");
btn.addEventListener('click', () => {
  let inputText = document.querySelector(".emailid").value.toLowerCase();
  let inputpass = document.querySelector(".pass").value;
  if (inputText != "") {
    let dot = inputText.charAt(inputText.length - 4);
    let At = inputText.charAt(inputText.length - 10);
    let com = inputText.substring(inputText.length - 3);
    let gm = inputText.substring(inputText.length - 9, inputText.length - 4);
    if (dot == '.' && At == '@' && com == 'com' && gm == 'gmail') {
      if (inputpass != "") {
        let a = 0, b = 0, c = 0, d = 0;
        for (let i of inputpass) {
          if (i == i.toUpperCase())
            a = 1;
          if (i == i.toLowerCase())
            b = 1;
          if (i == '@' || i == '.' || i == '_')
            c = 1;
          if (!isNaN(parseFloat(i)) && isFinite(i))// to check that the "i" is a number or not
            d = 1;
        }
        if ((a == 1 && b == 1 && c == 1 && d == 1)) {
          console.log("valid id and password");
          document.querySelector(".emailid").value = "";
          document.querySelector(".pass").value = "";
        }
        else
          alert("invalid pass");
      }
      else
        alert("please Enter the password");
    }
    else
      alert("Invalid mail");
  }
  else
    alert("Please enter Email Id");
});





let btn2 = document.querySelector(".signupbtn");
btn2.addEventListener('click', () => {









  let inputText = document.querySelector(".emailid2").value.toLowerCase();
  let inputpass = document.querySelector(".pass2").value;
  if (inputText != "") {
    let dot = inputText.charAt(inputText.length - 4);
    let At = inputText.charAt(inputText.length - 10);
    let com = inputText.substring(inputText.length - 3);
    let gm = inputText.substring(inputText.length - 9, inputText.length - 4);
    if (dot == '.' && At == '@' && com == 'com' && gm == 'gmail') {
      if (inputpass != "") {
        let a = 0, b = 0, c = 0, d = 0;
        for (let i of inputpass) {
          if (i == i.toUpperCase())
            a = 1;
          if (i == i.toLowerCase())
            b = 1;
          if (i == '@' || i == '.' || i == '_')
            c = 1;
          if (!isNaN(parseFloat(i)) && isFinite(i))// to check that the "i" is a number or not
            d = 1;
        }
        if ((a == 1 && b == 1 && c == 1 && d == 1)) 
        {
          let conf = document.querySelector(".confirmpass").value;
          if (conf != "") {
            if (inputpass === conf)
            {
            
            btn2.addEventListener('click',() => {
              loginForm.style.marginLeft = "0%";
              loginText.style.marginLeft = "0%";
            });
            document.querySelector(".emailid2").value = "";
            document.querySelector(".pass2").value = "";
            document.querySelector(".confirmpass").value = "";

            setTimeout(()=>{
              loginForm.style.marginLeft = "0%";
              loginText.style.marginLeft = "0%";
            },700)
            }
            else 
              alert("invalid mail");
             }
          else {
            alert("fill the confirm password");
          }
        }
        else
          alert("invalid pass");
      }
      else
        alert("please Enter the password");
    }
    else
      alert("Invalid mail");
  }
  else
    alert("Please enter Email Id");
















});