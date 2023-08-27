

const requiredString = document.querySelector('#requiredString')
console.log(requiredString.value)
const maxLength8 = document.querySelector('#maxLength8')
console.log(maxLength8.value)
const requiredMinMax = document.querySelector('#requiredMinMax')
console.log(requiredMinMax.value)
const notRequiredMinMax = document.querySelector('#notRequiredMinMax')
console.log(notRequiredMinMax.value) 
const lettersOnly = document.querySelector('#lettersOnly')
console.log(lettersOnly.value)
const radioYesOnly = document.querySelector('#radioChecker')
console.log(radioYesOnly.value)
const letterMatcher = (/^[A-Za-z]+$/)
let radioYes = document.querySelector('#radioYes') 


document.querySelector('.btn-success').addEventListener('click',(e) => { 
    let isFormComplete = true


    if (requiredString.value === "") {
        document.querySelector('.requiredStringError').textContent = 
         'This field is required'
         isFormComplete = false
    }

    if (maxLength8.value.length > 8) {
    document.querySelector('.maxLength8Error').textContent = 
    "This field is not required but must be less than 8 characters "
    isFormComplete = false
    }

    if (requiredMinMax.value.length < 10 || requiredMinMax.value.length > 25
        || requiredMinMax.value === "") {
        document.querySelector(".requiredMinMaxError").textContent = 
        "This field is required and must be a minimum of 10 characters and maximum of 25"
        isFormComplete = false
    }

    if  (notRequiredMinMax.value !== "" && (notRequiredMinMax.value.length < 10 || notRequiredMinMax.value.length > 25)) {
            document.querySelector('.notRequiredMinMaxError').textContent = 
            "This field is not required but must be a minimum of 10 characters and maximum of 25, if any characters are written"
            isFormComplete = false
    }

    if  (!letterMatcher.test(lettersOnly.value)) {
            document.querySelector(".lettersOnlyError").textContent = 
            "Must be only letters of the Alphabet"
            isFormComplete = false
    }
    
    if  (radioYes.checked && radioYesOnly.value == "") {
            document.querySelector(".radioYesOnlyError").textContent = 
            "When Yes is clicked this field is now required"      
            isFormComplete = false
    }
    
    if (isFormComplete == false) {
        e.preventDefault()
        console.log('Not Submitted')
    } else {
        console.log('Submitted')
    }
})
        


