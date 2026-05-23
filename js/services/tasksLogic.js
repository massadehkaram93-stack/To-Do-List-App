export const tasksLogic = {
    addTasks: (allTasks) => {
        let newTask = {Name: "" , condition: false , color : ""};
        let nameInput = document.querySelector("input.add-input");
        let check = false ;

        document.querySelectorAll(".color-task ul li button").forEach((ele) => {
            if (ele.classList.contains("clicked")) {
                check = true ;
                if (ele.classList.contains("red")) {
                        newTask.color = "#be123c" ;
                    }   else if (ele.classList.contains("yellow")) {
                        newTask.color = "#c2410c" ;
                    }   else {
                        newTask.color = "#15803d" ;
                }
            }
        });
        
        if (check) {
            newTask.Name = nameInput.value ;
            allTasks.push(newTask);

            nameInput.value = "" ;

            localStorage.setItem("tasks" , JSON.stringify(allTasks));
        }   else {
            nameInput.classList.add("error");
            setTimeout (() => {
                nameInput.classList.remove("error");
            }, 300);
            nameInput.value = "";
            nameInput.placeholder = "Please Chose Priority " ;
        }
    } , 
    
    changeTaskCondition: (name , allTasks) => {
        let updateTasks = allTasks ;
        let test = allTasks.find((ele) => ele.Name === name);

        if (test) {
            test.condition = true ;
        }
        localStorage.setItem("tasks" , JSON.stringify(allTasks));
    },

    deleteTask: (name , allTasks) => {
        let updateAllTasks = allTasks;
        updateAllTasks = allTasks.filter((ele)=> ele.Name !== name);
        localStorage.setItem("tasks" , JSON.stringify(updateAllTasks));
        return updateAllTasks ;
    },

    searchLogic: (name , allTask) => {
        let input =  document.querySelector(".search-input");
        let searchElement = {} ;
        if (input.value !== "") {
        searchElement = allTask.find((ele) => ele.Name === name);
            return searchElement ;
        }   else {
            searchElement = {} ;
            return searchElement ;
        }
    }
};

