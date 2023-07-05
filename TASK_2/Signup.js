function allFunction()
{
    let pass  = document.getElementById('Pass').value
  const isNonWhiteSpace = /^\S*$/;
  if (!isNonWhiteSpace.test(pass)) {
    document.getElementById("message").innerHTML = "*Fill the password please!";
    document.getElementById("message").style.color = "red";
  }

  const isContainsUppercase = /^(?=.*[A-Z]).*$/;
  if (!isContainsUppercase.test(pass)) {
    document.getElementById("message").innerHTML = "*return Password must have at least one Uppercase Character";
    document.getElementById("message").style.color = "red";
  }

  const isContainsLowercase = /^(?=.*[a-z]).*$/;
  if (!isContainsLowercase.test(pass)) {
    document.getElementById("message").innerHTML = "*Password must have at least one Lowercase Character.";
    document.getElementById("message").style.color = "red";
  }

  const isContainsNumber = /^(?=.*[0-9]).*$/;
  if (!isContainsNumber.test(pass)) {
    document.getElementById("message").innerHTML = "*Password must contain at least one Digit.";
    document.getElementById("message").style.color = "red";
  }

  const isContainsSymbol =
    /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
  if (!isContainsSymbol.test(pass)) {
    document.getElementById("message").innerHTML = "*Password must contain at least one Special Symbol.";
    document.getElementById("message").style.color = "red";
  }

  const isValidLength = /^.{6,11}$/;
  if (!isValidLength.test(pass)) {
    document.getElementById("message").innerHTML = "*Password must be 6-10 Characters Long.";
    document.getElementById("message").style.color = "red";
 
  }
  console.log(pass);

  let cpass = document.getElementById("Conpass").value;
    if (!cpass) {
      document.getElementById('message1').innerHTML = '* conform Password is required';
      document.getElementById("message1").style.color = "red";
    } 
  if(cpass===pass && cpass)
  {
    document.getElementById("message1").innerHTML = "Password Matched!";
    document.getElementById("message1").style.color = "green";
  }
  else if(cpass!=pass)
  {
    document.getElementById("message1").innerHTML = "Password Not Matched!";
    document.getElementById("message1").style.color = "red";
  }

 
  const phone1 = document.getElementById('phone').value;
    if (!phone1) {
      document.getElementById('message2').innerHTML = '* Phone No is required';
      document.getElementById("message2").style.color = "red";

    } 
    else if (!/^[0-9]{10}$/.test(phone1)) {
      document.getElementById('message2').innerHTML = '* Phone No must be a 10-digit number';
      document.getElementById("message2").style.color = "red";

    }

    const email1 = document.getElementById('email').value;
    if (!email1) {
      document.getElementById('message3').innerHTML = '* Email is required';
      document.getElementById("message3").style.color = "red";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email1)) {
      document.getElementById('message3').innerHTML = '* Invalid email format';
      document.getElementById("message3").style.color = "red";
      isValid = false;
    }


    const Fname = document.getElementById('fname').value;
    if (!Fname) {
      document.getElementById('message4').innerHTML = '* Full Name is required';
      document.getElementById("message4").style.color = "red";
      isValid = false;
    }

    const user = document.getElementById('usern').value;
    if (!user) {
      document.getElementById('message5').innerHTML = '* User name is required';
      document.getElementById("message5").style.color = "red";
      isValid = false;
    }

    const state = document.getElementById('state').value;
    if (!state) {
      document.getElementById('message7').textContent = '* State is required';
      document.getElementById("message7").style.color = "red";
      isValid = false;
    }

    var gender = document.querySelector('input[name="gender"]:checked');     
    if (!gender) {
      document.getElementById('message6').innerHTML = '* Gender is required';
      document.getElementById("message6").style.color = "red";
      isValid = false;
    }

    const agreement = document.getElementById('agreement').checked;
    if (!agreement) {
      document.getElementById('agreementError').textContent = '* You must agree to the terms and conditions';
      document.getElementById("agreementError").style.color = "red";
      isValid = false;
    }

}