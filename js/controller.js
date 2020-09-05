const equation = {}
equation.score = () => {
    extroversion = [1, 6, 23, 34, 20, 21, 26, 23, 43, 50, 58, 52, 63, 111, 98, 112, 99, 118, 101, 117]
    adaptability = [13, 25, 18, 40, 33, 45, 56, 75, 65, 79, 73, 84, 76, 89, 76, 93, 106, 91, 110, 115]
    conscientiousness = [4, 8, 9, 14, 11, 24, 16, 29, 36, 46, 61, 51, 66, 97, 74, 113, 86, 114, 94, 116]
    neurotism = [0, 104, 28, 5, 32, 10, 39, 12, 53, 37, 31, 57, 71, 62, 83, 77, 35, 80, 87, 85]
    wisdom = [7, 95, 17, 48, 22, 49, 92, 59, 44, 67, 54, 68, 64, 70, 69, 102, 72, 103, 82, 107]
    leadership = [2, 15, 19, 30, 27, 42, 38, 47, 41, 55, 78, 60, 88, 105, 90, 3, 96, 100, 109, 108]

}

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


controller.gettingAnswer = (data) => {
    if (data === "1") {
        return 1
    } else if (data === "2") {
        return 2
    } else if (data === "3") {
        return 3
    } else if (data === "4") {
        return 4
    } else if (data === "5") {
        return 5
    } else {
        return 0
    }
}