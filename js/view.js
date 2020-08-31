let number = 1;
const view = {};
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
                    view.setActiveScreen('testScreen');
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
            break;

        case 'testScreen':
            document.getElementById('app')
                .innerHTML = components.testScreen;
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
                })
            let random = Math.floor(Math.random() * 120) + 1;
            document.getElementById('question').innerText = model.questions[random];
            document.getElementById('form-test')
                .addEventListener('submit', (e) => {
                    e.preventDefault();

                    number++;
                    const score = document.getElementById('myRange')
                    console.log(score.value)

                    if (number < 25) {
                        document.getElementById('question').innerText = model.questions[random];
                        let random1 = Math.floor(Math.random() * 120) + 1;
                        document.getElementById('question').innerText = model.questions[random1];
                    } else if (number >= 25) {
                        view.setActiveScreen('resultScreen');
                    }
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
            break;
        case 'loginScreen':
            document.getElementById('app')
                .innerHTML = components.loginScreen;
            break;
        case 'registerScreen':
            document.getElementById('app')
                .innerHTML = components.registerScreen;
            break;
        case 'resultScreen':
            document.getElementById('app')
                .innerHTML = components.resultScreen;
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
            break;

    }
}