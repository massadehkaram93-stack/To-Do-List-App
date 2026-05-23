export const navigation = {
    openReception: () => {
        let Element = document.querySelector(".reception-screen");
        let rigScreen = document.querySelector(".register-screen");
        let logScreen = document.querySelector(".login-screen");

        Element.classList.add("login");
        
        if (Element.classList.contains("login")) {
            Element.innerHTML = `<div class = "Empty"></div>
            <div class = "cont">
                <h1>Welcome,Back!</h1>
                <p>Already have an account ?</p>
                <button class = "login-btn">Login</button>
            </div>`
            Element.classList.remove("close-animation");
            Element.classList.add("open-animation");
            rigScreen.classList.remove("none");
            setTimeout( () => {
                logScreen.classList.add("none");
            } , 1000);
        }  
        Element.classList.remove("login");
    },

    closeReception: () => {
        let Element = document.querySelector(".reception-screen");
        let rigScreen = document.querySelector(".register-screen");
        let logScreen = document.querySelector(".login-screen");
        
        Element.classList.add("register");
        
        if (Element.classList.contains("register")) {
            Element.innerHTML = `<div class = "Empty"></div>
                <div class = "cont">
                    <h1>Hello,Welcome!</h1>
                    <p>Don't have an account ?</p>
                    <button class = "register-btn">Register</button>
                </div>`
            Element.classList.remove("open-animation");
            Element.classList.add("close-animation");
            logScreen.classList.remove("none");
            setTimeout( () => {
                rigScreen.classList.add("none");
            } , 1000);
        }
        Element.classList.remove("register"); 
    },

    goToMainScreen: () => {
        let mainScreen = document.querySelector("#app-main-screen");
        let authScreen = document.querySelector("#auth-box");
        let loadingScreen = document.querySelector("#loading-screen");
        authScreen.classList.add("none");
        loadingScreen.classList.remove("none");
        setTimeout (() => {
            loadingScreen.classList.add("none");
            mainScreen.classList.remove("none");
        } , 3000);
    }

};
