
export const renderAuth = {
    renderAllTasks: (allTasks) => {
        let theCont = document.querySelector(".all-tasks");
        if (allTasks.length === 0 ) {
            theCont.innerHTML = `You didn't add any task yet` ;
            theCont.classList.add("none");
        }   else {
            theCont.innerHTML = allTasks.map((element) => {
                return `<li style = "--color:${element.color}">
                            <div class = "task-name">${element.Name}</div>
                            <div class="btns">
                                <button class = "done-btn">✔</button>
                                <button class = "delete-btn">✖</button>
                            </div>
                        </li>`
            }).join("");
            theCont.classList.remove("none");
        }
    },

    renderActiveTasks: (allTasks) => {
        let theCont = document.querySelector(".all-tasks");
        let allActiveTasks = allTasks.filter((ele) => ele.condition === false);
        
        if (allActiveTasks.length === 0) {
            theCont.innerHTML = `You don't have any active task` ;
            theCont.classList.add("none");
        }   else {
            theCont.innerHTML = allActiveTasks.map((element) => {
                return `<li style = "--color:${element.color}">
                            <div class = "task-name">${element.Name}</div>
                            <div class="btns">
                                <button class = "done-btn">✔</button>
                                <button class = "delete-btn">✖</button>
                            </div>
                        </li>`
            }).join("");
            theCont.classList.remove("none");
        }
    },

    renderCompletTasks: (allTasks) => {
        let theCont = document.querySelector(".all-tasks");
        let allCompletTasks = allTasks.filter((ele) => ele.condition === true);

        if (allCompletTasks.length === 0) {
            theCont.innerHTML = `You don't have any completed task` ;
            theCont.classList.add("none");
        }   else {
            theCont.innerHTML = allCompletTasks.map((element) => {
                return `<li style = "--color:${element.color}">
                            <div class = "task-name">${element.Name}</div>
                            <div class="btns">
                                <button class = "done-btn">✔</button>
                                <button class = "delete-btn">✖</button>
                            </div>
                        </li>`
            }).join("");
            theCont.classList.remove("none");
        }
    },

    renderColors: (element) => {
        let colors = document.querySelectorAll(".color-task ul li button");

        colors.forEach((ele) => {
            ele.classList.remove("clicked");
        });
        element.classList.add("clicked");
    },

    renderSearch: (element) => {
        let theCont = document.querySelector(".all-tasks");
        let input =  document.querySelector(".search-input");

        if (element !== {}) {
            theCont.innerHTML = `<li style = "--color:${element.color}">
                        <div class = "task-name">${element.Name}</div>
                        <div class="btns">
                            <button class = "done-btn">✔</button>
                            <button class = "delete-btn">✖</button>
                        </div>
                    </li>`
            theCont.classList.remove("none");
        }   else {
            input.value = "";
            input.placeholder = "the task not found" ;
        }
    }
};

