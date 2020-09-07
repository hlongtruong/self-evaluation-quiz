const controller = {};
controller.login = (dataLogin) => {
    if (dataLogin.email.trim() === '') {
        document.getElementById('email-error').innerText = 'Please input your email'
    } else {
        document.getElementById('email-error').innerText = ''
    }
    if (dataLogin.password.trim() === '') {
        document.getElementById('password-error').innerText = 'Please input your password'
    } else {
        document.getElementById('password-error').innerText = ''
    }
    if (dataLogin.email.trim() !== '' &&
        dataLogin.password.trim() !== ''
    ) {
        model.login(dataLogin)
    }
}
controller.register = (data) => {
    if (data.firstName.trim() === '') {
        document.getElementById('first-name-error').innerText = 'Please input your first name'
    } else {
        document.getElementById('first-name-error').innerText = ''
    }
    if (data.lastName.trim() === '') {
        document.getElementById('last-name-error').innerText = 'Please input your last name'
    } else {
        document.getElementById('last-name-error').innerText = ''
    }
    if (data.email.trim() === '') {
        document.getElementById('email-error').innerText = 'Please input your email'
    } else {
        document.getElementById('email-error').innerText = ''
    }
    if (data.password.trim() === '') {
        document.getElementById('password-error').innerText = 'Please input your password'
    } else {
        document.getElementById('password-error').innerText = ''
    }
    if (data.confirmPassword.trim() === '') {
        document.getElementById('confirm-password-error').innerText = 'Please input your confirm password'
    } else if (data.confirmPassword.trim() !== data.password.trim()) {
        document.getElementById('confirm-password-error').innerText = "Password didn't match"
    } else {
        document.getElementById('confirm-password-error').innerText = ''
    }
    if (data.firstName.trim() !== '' &&
        data.lastName.trim() !== '' &&
        data.email.trim() !== '' &&
        data.password.trim() !== '' &&
        data.confirmPassword.trim() !== '' &&
        data.password.trim() === data.confirmPassword.trim()
    ) {
        model.register(data)
    }
}
controller.gettingAnswer = (data) =>{
    if (data === "1"){
        return 1
    }
    else if (data === "2"){
        return 2
    }
    else if (data === "3"){
        return 3
    }
    else if (data === "4"){
        return 4
    }
    else if (data === "5"){
        return 5
    }
    else{
        return 0
    }
}

