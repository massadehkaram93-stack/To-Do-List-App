let server = JSON.parse(localStorage.getItem("server") || "[]") ;
let allTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
let mode = localStorage.getItem("mode") || "";

if (mode === "dark") {
    document.body.classList.add("dark");
}

import { tasksLogic } from './services/tasksLogic.js';
import { render } from './ui/render.js';
import { renderAuth } from './ui/renderAuth.js';
import { navigation } from './ui/navigation.js';
import { authLogic } from './services/authLogic.js';

document.addEventListener("click" , (e) => {
    if (e.target.classList.contains("login-btn")) {
        navigation.closeReception();
    }   else if (e.target.classList.contains("register-btn")) {
        navigation.openReception();
    }   else if (e.target.classList.contains("submit-register")) {
        e.preventDefault();
        if (authLogic.registerUser(server)) {
            render.registerRenderName();
            navigation.goToMainScreen();
            renderAuth.renderAllTasks(allTasks);
        }   else {
            let customAlret = document.querySelector("#custom-alert");
            customAlret.classList.remove("none");
            customAlret.classList.add("open");
            setTimeout(()=> {
                customAlret.classList.remove("open");
                customAlret.classList.add("none");
            }, 2000);
        }
    }   else if (e.target.classList.contains("submit-login")) {
        e.preventDefault();
        if (authLogic.loginUser(server)) {
            render.loginRenderName(server);
            renderAuth.renderAllTasks(allTasks);
            navigation.goToMainScreen();
        }   else {
            let customAlret = document.querySelector("#custom-alert");
            let AlertText = customAlret.querySelector(".alert-text");
            AlertText.innerHTML = "Invalid email or password 🔐";
            customAlret.classList.remove("none");
            customAlret.classList.add("open");
            setTimeout(()=> {
                customAlret.classList.remove("open");
                customAlret.classList.add("none");
            }, 2000);
        }
    }   else if (e.target.classList.contains("add-btn")) {
        let input = document.querySelector(".add-input");
        if (input.value !== "") {
            tasksLogic.addTasks(allTasks);
            renderAuth.renderAllTasks(allTasks);
        }   
    }   else if (e.target.classList.contains("delete-btn")) {
        {let task = e.target.parentElement.parentElement;
        let name = task.querySelector("div.task-name").innerText;
        allTasks = tasksLogic.deleteTask(name , allTasks) ;
        renderAuth.renderAllTasks(allTasks);  }
    }   else if (e.target.classList.contains("done-btn")) {
        {let task = e.target.parentElement.parentElement;
        let name = task.querySelector(".task-name").innerText;
        tasksLogic.changeTaskCondition(name , allTasks);
        renderAuth.renderAllTasks(allTasks);}
    }   else if (e.target.classList.contains("all-btn")) {
        renderAuth.renderAllTasks(allTasks);
    }   else if (e.target.classList.contains("active-btn")) {
        renderAuth.renderActiveTasks(allTasks);
    }   else if (e.target.classList.contains("complet-btn")) {
        renderAuth.renderCompletTasks(allTasks);
    }   else if (e.target.classList.contains("red")) {
        renderAuth.renderColors(document.querySelector(".red"));
    }   else if (e.target.classList.contains("yellow")) {
        renderAuth.renderColors(document.querySelector(".yellow"));
    }   else if (e.target.classList.contains("green")) {
        renderAuth.renderColors(document.querySelector(".green"));
    }   else if (e.target.classList.contains("mode")) {
        render.mode(mode);
    }   else if (e.target.classList.contains("mode-icon")) {
        render.mode(mode);
    }
});

let searchInput = document.querySelector(".search-input");

searchInput.addEventListener("keydown" , function (event) {
    switch (event.code) {
        case "NumpadEnter":
        case "Enter" :
        let input = document.querySelector(".search-input");
        let name = input.value ;
        renderAuth.renderSearch(tasksLogic.searchLogic(name , allTasks));
        break;
    }
});
