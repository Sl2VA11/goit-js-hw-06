




// const refs = {
//    form: document.querySelector(".login-form"),
//    inputEmail: document.querySelector('input[name="email"]'),
//    inputPassword: document.querySelector('input[name="password"]')
// }


// refs.form.addEventListener("submit" , onFormSubmit)

// function onFormSubmit(event) {
//    event.preventDefault();

//    if (refs.inputEmail.value.length === 0 || refs.inputPassword.value.length === 0) {
//      return alert('Все поля должны быть заполнены!!!')
//    } 
//    const objForm = {
//       [refs.inputEmail.name]: refs.inputEmail.value,
//       [refs.inputPassword.name]: refs.inputPassword.value,
//    }
//    console.log(objForm)
//    event.currentTarget.reset()
// }

const refs = {
   form: document.querySelector(".login-form"),
   inputEmail: document.querySelector('input[name="email"]'),
   inputPassword: document.querySelector('input[name="password"]')
}

refs.form.addEventListener('submit' , createInputForm)

function createInputForm (event) {
   event.preventDefault()

   if (refs.inputEmail.value.length === 0 || refs.inputPassword.value.length === 0) {
      return alert('i fuck you mother')
   } 
   const objForm = {
      [refs.inputEmail.name]: refs.inputEmail.value,
      [refs.inputPassword.name]: refs.inputPassword.value,
   }
   console.log(objForm)

   event.currentTarget.reset()
}