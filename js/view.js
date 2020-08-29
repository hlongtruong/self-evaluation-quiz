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
            break;
        case 'mbtiScreen':
            document.getElementById('app')
                .innerHTML = components.mbtiScreen;
        
    }
}