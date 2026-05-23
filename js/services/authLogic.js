export const authLogic = {
    registerUser: (server) => {
        let nameInput = document.querySelector("#register-UserName"); 
        let emailInput = document.querySelector("#register-Email");
        let passwordInput = document.querySelector("#register-password");

        if (nameInput.value.length > 10) {
            nameInput.value = "";
            nameInput.placeholder = "the max char is 10" ;
            nameInput.classList.add("error");
            setTimeout(() => {
                nameInput.classList.remove("error");
            }, 300);
        }   else {
            if (nameInput.value.length < 1) {
                nameInput.value = "";
                nameInput.placeholder = "please enter the name" ;
                nameInput.classList.add("error");
                setTimeout(() => {
                    nameInput.classList.remove("error");
                }, 300);
            }   else {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailInput.value)) {
                    emailInput.value = "";
                    emailInput.placeholder = "please check the email" ;
                    emailInput.classList.add("error");
                    setTimeout(() => {
                        emailInput.classList.remove("error");
                    }, 300);
                }   else {
                    if (passwordInput.value.length < 8) {
                        passwordInput.value = "";
                        passwordInput.placeholder = "the minmum char is 8" ;
                        passwordInput.classList.add("error");
                        setTimeout(() => {
                            passwordInput.classList.remove("error");
                        }, 300);
                    }   else {
                        let user = {Name : "" , Email : "" , Password : ""};
                        let test = server.find((s) => s.Email === emailInput.value );

                        if (!test) {    
                            user.Name = nameInput.value ;
                            user.Email = emailInput.value ;
                            user.Password = Number(passwordInput.value) ;

                            server.push(user);
                            localStorage.setItem("server" , JSON.stringify(server));
                            return true ;
                        }   else {
                            return false ;
                        }
                    }
                }
            }
        }
    },

    loginUser: (server) => {
        let emailInput = document.querySelector("#login-Email");
        let passwordInput = document.querySelector("#login-password");
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailInput.value = "";
            emailInput.placeholder = "please check the email" ;
            emailInput.classList.add("error");
            setTimeout(() => {
                emailInput.classList.remove("error");
            }, 300);
        }   else {
            if (passwordInput.value.length < 8) {
                passwordInput.value = "";
                passwordInput.placeholder = "the minmum char is 8" ;
                passwordInput.classList.add("error");
                setTimeout(() => {
                    passwordInput.classList.remove("error");
                }, 300);
            }   else {
                let test = server.find((s) => s.Email === emailInput.value && s.Password === Number(passwordInput.value));

                if (test) {    
                    return true ;
                }   else {
                    return false ;
                }
            }
        }
    }

};
