let number = 0;
const view = {};
var rannum = parseInt(Math.random() * 16)
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'welcomeScreen':
            document.getElementById('app')
                .innerHTML = components.welcomeScreen;
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
                })
            document.getElementById('redirect-to-test')
                .addEventListener('click', () => {
                    view.setActiveScreen('testScreen')
                })
            document.getElementById('redirect-toNPT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NPTScreen')
                })
            document.getElementById('redirect-toNNG')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNGScreen')
                })
            document.getElementById('redirect-toS')
                .addEventListener('click', () => {
                    view.setActiveScreen('SScreen')
                })
            document.getElementById('redirect-toNTH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTHScreen')
                })
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'mbtiScreen':
            document.getElementById('app')
                .innerHTML = components.mbtiScreen;
            document.getElementById('redirect-toNPT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NPTScreen')
                })
            document.getElementById('redirect-toNNG')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNGScreen')
                })
            document.getElementById('redirect-toS')
                .addEventListener('click', () => {
                    view.setActiveScreen('SScreen')
                })
            document.getElementById('redirect-toNTH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTHScreen')
                })
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;

        case 'testScreen':
            document.getElementById('app').innerHTML = components.testScreen
            model.gettingQuestions()
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
                })
            document.getElementById('redirect-toNPT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NPTScreen')
                })
            document.getElementById('redirect-toNNG')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNGScreen')
                })
            document.getElementById('redirect-toS')
                .addEventListener('click', () => {
                    view.setActiveScreen('SScreen')
                })
            document.getElementById('redirect-toNTH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTHScreen')
                })
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'loginScreen':
            document.getElementById('app').innerHTML = components.loginScreen
            document.getElementById('redirect-to-register')
                .addEventListener('click', () => {
                    view.setActiveScreen('registerScreen')
                })
            const loginForm = document.getElementById('login-form')
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault()
                loginForm.email.value = loginForm.email.value.trim()
                const data = {
                    email: loginForm.email.value,
                    password: loginForm.password.value
                }
                controller.login(data)
            })
            break;
        case 'registerScreen':
            document.getElementById('app')
                .innerHTML = components.registerScreen
            const registerForm = document.getElementById('register-form')
            registerForm.addEventListener('submit', (event) => {
                event.preventDefault()
                const data = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value
                }
                console.log(data)
                controller.register(data)
            })
            break;
        case 'resultScreen':
            document.getElementById('app')
                .innerHTML = components.resultScreen;
            if (model.equation.extroversion[1] > 0){
                percentE = Math.abs(model.equation.extroversion[1]*100/8)
                document.getElementById("e-score").innerText = "Hướng Ngoại: " + percentE.toString() + "%"
            }
            else if (model.equation.extroversion[1] < 0){
                percentE = Math.abs(model.equation.extroversion[1]*100/8)
                document.getElementById("e-score").innerText = "Hướng Nội: " + percentE.toString() + "%"
            }
            else{
                document.getElementById(e-score).innerText = "Hướng Ngoại/Hướng Nội: Cân Bằng"
            }
            if (model.equation.adaptability[1] > 0){
                percentA = Math.abs(model.equation.adaptability[1]*100/8)
                document.getElementById("a-score").innerText = "Hòa Nhập: " + percentA.toString() + "%"
            }
            else if (model.equation.adaptability[1] < 0){
                percentA = Math.abs(model.equation.adaptability[1]*100/8)
                document.getElementById("a-score").innerText = "Thẳng Thắn: " + percentA.toString() + "%"
            }
            else{
                document.getElementById(a-score).innerText = "Hòa Nhập/Thẳng Thắn: Cân Bằng"
            }
            if (model.equation.conscientiousness[1] > 0){
                percentC = Math.abs(model.equation.conscientiousness[1]*100/8)
                document.getElementById("c-score").innerText = "Trách Nhiệm: " + percentC.toString() + "%"
            }
            else if (model.equation.conscientiousness[1] < 0){
                percentC = Math.abs(model.equation.conscientiousness[1]*100/8)
                document.getElementById("c-score").innerText = "Tự Do: " + percentC.toString() + "%"
            }
            else{
                document.getElementById(c-score).innerText = "Trách Nhiệm/Tự Do: Cân Bằng"
            }
            if (model.equation.neurotism[1] > 0){
                percentN = Math.abs(model.equation.neurotism[1]*100/8)
                document.getElementById("n-score").innerText = "Cảm Xúc: " + percentN.toString() + "%"
            }
            else if (model.equation.neurotism[1] < 0){
                percentN = Math.abs(model.equation.neurotism[1]*100/8)
                document.getElementById("n-score").innerText = "Lí trí: " + percentN.toString() + "%"
            }
            else{
                document.getElementById(n-score).innerText = "Cảm Xúc/Lí Trí: Cân Bằng"
            }
            if (model.equation.inquisitiveness[1] > 0){
                percentI = Math.abs(model.equation.inquisitiveness[1]*100/8)
                document.getElementById("i-score").innerText = "Tò Mò: " + percentI.toString() + "%"
            }
            else if (model.equation.inquisitiveness[1] < 0){
                percentI = Math.abs(model.equation.inquisitiveness[1]*100/8)
                document.getElementById("i-score").innerText = "Lãnh Đạm: " + percentI.toString() + "%"
            }
            else{
                document.getElementById(i-score).innerText = "Tò Mò/Lãnh Đạm: Cân Bằng"
            }
            if (model.equation.leadership[1] > 0){
                percentL = Math.abs(model.equation.leadership[1]*100/8)
                document.getElementById("l-score").innerText = "Lãnh Đạo: " + percentL.toString() + "%"
            }
            else if (model.equation.leadership[1] < 0){
                percentL = Math.abs(model.equation.leadership[1]*100/8)
                document.getElementById("l-score").innerText = "Cá Nhận: " + percentL.toString() + "%"
            }
            else{
                document.getElementById(l-score).innerText = "Lãnh Đạo/Cá Nhân: Cân Bằng"
            }
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
                })
            document.getElementById('redirect-toNPT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NPTScreen')
                })
            document.getElementById('redirect-toNNG')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNGScreen')
                })
            document.getElementById('redirect-toS')
                .addEventListener('click', () => {
                    view.setActiveScreen('SScreen')
                })
            document.getElementById('redirect-toNTH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTHScreen')
                })
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'NPTScreen':
            document.getElementById('app')
                .innerHTML = components.NPTScreen;
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
                })
            document.getElementById('redirect-toNNG')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNGScreen')
                })
            document.getElementById('redirect-toS')
                .addEventListener('click', () => {
                    view.setActiveScreen('SScreen')
                })
            document.getElementById('redirect-toNTH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTHScreen')
                })
            document.getElementById('redirect-to-NKH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NKHScreen')
                })
            document.getElementById('redirect-to-NTD')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTDScreen')
                })
            document.getElementById('redirect-to-NĐH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NĐHScreen')
                })
            document.getElementById('redirect-to-NNX')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNXScreen')
                })
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'NNGScreen':
            document.getElementById('app')
                .innerHTML = components.NNGScreen;
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
                })
            document.getElementById('redirect-toNPT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NPTScreen')
                })
            document.getElementById('redirect-toS')
                .addEventListener('click', () => {
                    view.setActiveScreen('SScreen')
                })
            document.getElementById('redirect-toNTH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTHScreen')
                })
            document.getElementById('redirect-to-NCC')
                .addEventListener('click', () => {
                    view.setActiveScreen('NCCScreen')
                })
            document.getElementById('redirect-to-NLTH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NLTHScreen')
                })
            document.getElementById('redirect-to-NCD')
                .addEventListener('click', () => {
                    view.setActiveScreen('NCDScreen')
                })
            document.getElementById('redirect-to-NTCH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTCHScreen')
                })
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'SScreen':
            document.getElementById('app')
                .innerHTML = components.SScreen;
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
                })
            document.getElementById('redirect-toNPT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NPTScreen')
                })
            document.getElementById('redirect-toNNG')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNGScreen')
                })
            document.getElementById('redirect-toNTH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTHScreen')

                })
            document.getElementById('redirect-to-NDNNV')
                .addEventListener('click', () => {
                    view.setActiveScreen('NDNNVScreen')
                })
            document.getElementById('redirect-to-NND')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNDScreen')
                })
            document.getElementById('redirect-to-NBH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NBHScreen')
                })
            document.getElementById('redirect-to-NQT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NQTScreen')
                })
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'NTHScreen':
            document.getElementById('app')
                .innerHTML = components.NTHScreen;
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
                })
            document.getElementById('redirect-toNPT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NPTScreen')
                })
            document.getElementById('redirect-toNNG')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNGScreen')
                })
            document.getElementById('redirect-toS')
                .addEventListener('click', () => {
                    view.setActiveScreen('SScreen')
                })
            document.getElementById('redirect-to-NCH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NCHScreen')
                })
            document.getElementById('redirect-to-NNS')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNSScreen')
                })
            document.getElementById('redirect-to-NTT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTTScreen')
                })
            document.getElementById('redirect-to-NTD')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTDScreen')
                })
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'NKHScreen':
            document.getElementById('app')
                .innerHTML = components.NKHScreen;
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
                })
            document.getElementById('redirect-toNPT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NPTScreen')
                })
            document.getElementById('redirect-toNNG')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNGScreen')
                })
            document.getElementById('redirect-toS')
                .addEventListener('click', () => {
                    view.setActiveScreen('SScreen')
                })
            document.getElementById('redirect-toNTH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTHScreen')
                })
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'NTDScreen':
            document.getElementById('app')
                .innerHTML = components.NTDScreen;
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
                })

            document.getElementById('redirect-toNPT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NPTScreen')
                })
            document.getElementById('redirect-toNNG')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNGScreen')
                })
            document.getElementById('redirect-toS')
                .addEventListener('click', () => {
                    view.setActiveScreen('SScreen')
                })
            document.getElementById('redirect-toNTH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTHScreen')
                })
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'NĐHScreen':
            document.getElementById('app')
                .innerHTML = components.NĐHScreen;
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
                })
            document.getElementById('redirect-toNPT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NPTScreen')
                })
            document.getElementById('redirect-toNNG')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNGScreen')
                })
            document.getElementById('redirect-toS')
                .addEventListener('click', () => {
                    view.setActiveScreen('SScreen')
                })
            document.getElementById('redirect-toNTH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTHScreen')
                })
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'NNXScreen':
            document.getElementById('app')
                .innerHTML = components.NNXScreen;
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
                })
            document.getElementById('redirect-toNPT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NPTScreen')
                })
            document.getElementById('redirect-toNNG')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNGScreen')
                })
            document.getElementById('redirect-toS')
                .addEventListener('click', () => {
                    view.setActiveScreen('SScreen')
                })
            document.getElementById('redirect-toNTH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTHScreen')
                })
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'NCCScreen':
            document.getElementById('app')
                .innerHTML = components.NCCScreen;
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
                })
            document.getElementById('redirect-toNPT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NPTScreen')
                })
            document.getElementById('redirect-toNNG')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNGScreen')
                })
            document.getElementById('redirect-toS')
                .addEventListener('click', () => {
                    view.setActiveScreen('SScreen')
                })
            document.getElementById('redirect-toNTH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTHScreen')
                })
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'NLTHScreen':
            document.getElementById('app')
                .innerHTML = components.NLTHScreen;
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
                })
            document.getElementById('redirect-toNPT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NPTScreen')
                })
            document.getElementById('redirect-toNNG')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNGScreen')
                })
            document.getElementById('redirect-toS')
                .addEventListener('click', () => {
                    view.setActiveScreen('SScreen')
                })
            document.getElementById('redirect-toNTH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTHScreen')
                })
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'NCDScreen':
            document.getElementById('app')
                .innerHTML = components.NLTHScreen;
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
                })
            document.getElementById('redirect-toNPT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NPTScreen')
                })
            document.getElementById('redirect-toNNG')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNGScreen')
                })
            document.getElementById('redirect-toS')
                .addEventListener('click', () => {
                    view.setActiveScreen('SScreen')
                })
            document.getElementById('redirect-toNTH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTHScreen')
                })
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'NTCHScreen':
            document.getElementById('app')
                .innerHTML = components.NLTHScreen;
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
                })
            document.getElementById('redirect-toNPT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NPTScreen')
                })
            document.getElementById('redirect-toNNG')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNGScreen')
                })
            document.getElementById('redirect-toS')
                .addEventListener('click', () => {
                    view.setActiveScreen('SScreen')
                })
            document.getElementById('redirect-toNTH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTHScreen')
                })
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'NDNNVScreen':
            document.getElementById('app')
                .innerHTML = components.NDNNVScreen;
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
                })
            document.getElementById('redirect-toNPT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NPTScreen')
                })
            document.getElementById('redirect-toNNG')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNGScreen')
                })
            document.getElementById('redirect-toS')
                .addEventListener('click', () => {
                    view.setActiveScreen('SScreen')
                })
            document.getElementById('redirect-toNTH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTHScreen')
                })
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'NBHScreen':
            document.getElementById('app')
                .innerHTML = components.NBHScreen;
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
                })
            document.getElementById('redirect-toNPT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NPTScreen')
                })
            document.getElementById('redirect-toNNG')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNGScreen')
                })
            document.getElementById('redirect-toS')
                .addEventListener('click', () => {
                    view.setActiveScreen('SScreen')
                })
            document.getElementById('redirect-toNTH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTHScreen')
                })
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'NNDScreen':
            document.getElementById('app')
                .innerHTML = components.NNDScreen;
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
                })
            document.getElementById('redirect-toNPT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NPTScreen')
                })
            document.getElementById('redirect-toNNG')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNGScreen')
                })
            document.getElementById('redirect-toS')
                .addEventListener('click', () => {
                    view.setActiveScreen('SScreen')
                })
            document.getElementById('redirect-toNTH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTHScreen')
                })
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'NQTScreen':
            document.getElementById('app')
                .innerHTML = components.NQTScreen;
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
                })
            document.getElementById('redirect-toNPT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NPTScreen')
                })
            document.getElementById('redirect-toNNG')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNGScreen')
                })
            document.getElementById('redirect-toS')
                .addEventListener('click', () => {
                    view.setActiveScreen('SScreen')
                })
            document.getElementById('redirect-toNTH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTHScreen')
                })
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'NCHScreen':
            document.getElementById('app')
                .innerHTML = components.NCHScreen;
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
                })
            document.getElementById('redirect-toNPT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NPTScreen')
                })
            document.getElementById('redirect-toNNG')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNGScreen')
                })
            document.getElementById('redirect-toS')
                .addEventListener('click', () => {
                    view.setActiveScreen('SScreen')
                })
            document.getElementById('redirect-toNTH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTHScreen')
                })
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'NNSScreen':
            document.getElementById('app')
                .innerHTML = components.NNSScreen;
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
                })
            document.getElementById('redirect-toNPT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NPTScreen')
                })
            document.getElementById('redirect-toNNG')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNGScreen')
                })
            document.getElementById('redirect-toS')
                .addEventListener('click', () => {
                    view.setActiveScreen('SScreen')
                })
            document.getElementById('redirect-toNTH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTHScreen')
                })
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'NTTScreen':
            document.getElementById('app')
                .innerHTML = components.NTTScreen;
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
                })
            document.getElementById('redirect-toNPT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NPTScreen')
                })
            document.getElementById('redirect-toNNG')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNGScreen')
                })
            document.getElementById('redirect-toS')
                .addEventListener('click', () => {
                    view.setActiveScreen('SScreen')
                })
            document.getElementById('redirect-toNTH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTHScreen')
                })
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'NTDScreen':
            document.getElementById('app')
                .innerHTML = components.NTDScreen;
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
                })
            document.getElementById('redirect-toNPT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NPTScreen')
                })
            document.getElementById('redirect-toNNG')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNGScreen')
                })
            document.getElementById('redirect-toS')
                .addEventListener('click', () => {
                    view.setActiveScreen('SScreen')
                })
            document.getElementById('redirect-toNTH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTHScreen')
                })
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
    }
}