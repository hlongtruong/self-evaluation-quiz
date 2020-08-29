const view = {};
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'welcomeScreen':
            document.getElementById('app')
                .innerHTML = components.welcomeScreen;
            const redirecToMbti = document.getElementById('redirect-to-mbti');
            redirecToMbti.addEventListener('click', () => {
                view.setActiveScreen('mbtiScreen')
            })
            document.getElementById('redirect-to-test')
                .addEventListener('click', () => {
                    view.setActiveScreen('testScreen');
                })
            document.getElementById('redirect-to-login')
                .addEventListener('click', () => {
                    view.setActiveScreen('loginScreen');
                })
            document.getElementById('redirect-to-register')
                .addEventListener('click', () => {
                    view.setActiveScreen('registerScreen');
                })

            break;
        case 'mbtiScreen':
            document.getElementById('app')
                .innerHTML = components.mbtiScreen;
            document.getElementById('redirect-to-login')
                .addEventListener('click', () => {
                    view.setActiveScreen('loginScreen');
                })
            document.getElementById('redirect-to-register').addEventListener('click', () => {
                view.setActiveScreen('registerScreen');
            })
            break;

        case 'testScreen':
            document.getElementById('app')
                .innerHTML = components.testScreen;
            document.getElementById('redirect-to-login')
                .addEventListener('click', () => {
                    view.setActiveScreen('loginScreen');
                })
            document.getElementById('redirect-to-register').addEventListener('click', () => {
                view.setActiveScreen('registerScreen');
            })
            break;
        case 'loginScreen':
            document.getElementById('app')
                .innerHTML = components.loginScreen;
            break;
        case 'registerScreen':
            document.getElementById('app')
                .innerHTML = components.loginScreen;
    }
}