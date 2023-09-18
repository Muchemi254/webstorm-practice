function loginvalidate(){
 const email = document.forms ['login-form']['email'].value;
 const password = document.forms['login-form']['password'].value;

 if (email === '' || password === ''){
     console.log('all fields must be filled');
     return false
 } else {
     console.log('Validation successful');
 }

}