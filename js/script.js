function keyupfun() {
    document.getElementById("demo3").innerHTML = "";
  }
  function keyupfun() {
    document.getElementById("demo4").innerHTML = "";
  }

  function fun() {
    if (valname()) {
      return;
    }
    return false;
  }

  function valname() {
    var name = document.form1.name.value;
    var email = document.form1.email.value;
    var data = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var emailData = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (!name.match(data)) {
      document.getElementById("demo3").innerHTML = "* no numbers allowed";
      return false;
    }
    if (!email.match(emailData)) {
      document.getElementById("demo4").innerHTML = "* invalid email";
      return false;
    }
    return true;

  }

  $("#submit-form").submit((e) => {

    e.preventDefault()
    if (valname()) {
      $.ajax({
        url: "https://script.google.com/macros/s/AKfycbz2vpoql4IEBWACo6vTa9270hkqMTpk3V8KbNgVX57i1Z6oSzt5kFsusSktHGEmhXYrJQ/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function (response) {
          alert("Your message has been sent.")
          window.location.reload()
        },
        error: function (err) {
          alert("Something Error")

        }
      })
    }

  })