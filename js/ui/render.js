export const render = {
    mode: function (mode) {
        console.log("hiii");
        document.body.classList.toggle("dark");
        if (document.body.classList.contains("dark")) {
            console.log("helloo");
            mode = "dark" ;
        }   else {
            console.log("halelad");
            mode = "" ;
        }
        localStorage.setItem("mode" , mode);
        return mode ;
    },

    registerRenderName: function () {
        let theCont = document.querySelector(".main-screen .mode-name-box .user-name");
        let nameInput = document.querySelector("input#register-UserName"); 

        theCont.innerHTML = `Welcome,${nameInput.value} ✨` ;
    },

    loginRenderName: function (server) {
        let theCont = document.querySelector(".main-screen .mode-name-box .user-name");
        let emailInput = document.querySelector("#login-Email");
        let user = server.find((u) => u.Email === emailInput.value);

        theCont.innerHTML = `Welcome,${user.Name} ✨` ;
    }

};