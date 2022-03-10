function submitForm()
{
  let name = document.getElementById('input-name').value
  let email = document.getElementById('input-email').value
  let phone = document.getElementById('input-phone').value
  let subject = document.getElementById('input-subject').value
  let message = document.getElementById('input-message').value

  console.log('Nama : ' + name)
  console.log('Email : ' + email)
  console.log('Phone : ' + phone)
  console.log('Subject : ' + subject)
  console.log('Message : ' + message)
  
  // location.href="mailto:"+email+"?subject:"+subject; 
  location.href="mailto:"+email+"?subject="+subject+"&body="+message; 
  window.setTimeout(function () { location.href="index.html" }, 0); 
}