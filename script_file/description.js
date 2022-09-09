let projectId = localStorage.getItem("projectId");
let username = localStorage.getItem("username");
let userRole = localStorage.getItem("userRole");
let token = localStorage.getItem("token") || "";

if(token === ""){
    location = "./login.html"
}

document.getElementById("username").innerText = "Hey, "+username;

const projectManager = ()=>{
    const showProject = async ()=>{
        let projectRes = await fetch(`https://nifty-clone.herokuapp.com/projects/${projectId}`);
        let project = await projectRes.json();
        console.log(project);
        document.getElementById("projectName").innerText = project.name;
    
        let developerRes = await fetch (`https://nifty-clone.herokuapp.com/projects/${projectId}/developers`);
        let developers = await developerRes.json();
        console.log(developers,"developers");
        developers.map((element)=>{
            let option = document.createElement('option');
            // option.addEventListener("click", ()=>{
            //     localStorage.setItem("developerId", element.id);
            // });
            option.innerText = element.developer;
            option.setAttribute('value', element.developer);
            document.getElementById("developersList").append(option);
            // setDeveloperIdOnLocal();
        });
    }
    showProject();
    
    const selectedOne = ()=>{
        // let developerName = document.getElementById("developersList").value;
        document.getElementById("assigning").style.display = "block";
    }
    document.getElementById("developersList").addEventListener("change", selectedOne)
    // let developerId = localStorage.getItem("developerId");
    // console.log(developerId,"devID");
    
    const addTask = async ()=>{
        let taskObj = {
            taskk : document.getElementById("assigne").value,
            developerName : document.getElementById("developersList").value,
        }
        console.log(taskObj, "taskobj");
        await fetch(`https://nifty-clone.herokuapp.com/projects/${projectId}/tasks`,{
            method : "POST",
            body: JSON.stringify(taskObj),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        console.log(taskObj,"taskonj"); 
        location.reload();
    }
    
    const showAllTask = async()=>{
        document.getElementById("showTasks").innerHTML = "";
        let allTasksRes = await fetch(`https://nifty-clone.herokuapp.com/projects/${projectId}/tasks`);
        let allTasks = await allTasksRes.json();
        console.log(allTasks , "tasks");
    
        allTasks.map((elem)=>{
            
            let div = document.createElement("div");
                let developerName = document.createElement("h3");
                developerName.innerText = "Developer : "+elem.developerName
    
                let task = document.createElement("p");
                task.innerText = "Task : "+elem.taskk
    
                let remove = document.createElement("button");
                remove.innerText = "Remove";
                remove.addEventListener("click",()=>{
                    removeTask(elem.id);
                })
    
            div.append(developerName,task,remove);
            document.getElementById("showTasks").append(div);
        })
    
    }
    showAllTask();
    document.getElementById("addTask").addEventListener("click", addTask)
    
    const removeTask = async(id)=>{
        await fetch(`https://nifty-clone.herokuapp.com/tasks/${id}`,{
            method: "DELETE",
        });
        showAllTask();
    }
}

const developer = ()=>{

}

if(userRole === "Developer"){
    document.getElementById("developersList").style.display = "none";
    developer();
}
else{
    projectManager();
}
// const showProject = async ()=>{
//     let projectRes = await fetch(`http://localhost:3000/projects/${projectId}`);
//     let project = await projectRes.json();
//     console.log(project);
//     document.getElementById("projectName").innerText = project.name;

//     let developerRes = await fetch (`http://localhost:3000/projects/${projectId}/developers`);
//     let developers = await developerRes.json();
//     console.log(developers);
//     developers.map((element)=>{
//         let option = document.createElement('option');
//         // option.addEventListener("click", ()=>{
//         //     localStorage.setItem("developerId", element.id);
//         // });
//         option.innerText = element.developer;
//         option.setAttribute('value', element.developer);
//         document.getElementById("developersList").append(option);
//         // setDeveloperIdOnLocal();
//     });
// }
// showProject();

// const selectedOne = ()=>{
//     let developerName = document.getElementById("developersList").value;
//     document.getElementById("assigning").style.display = "block";
// }
    
// // let developerId = localStorage.getItem("developerId");
// // console.log(developerId,"devID");

// const addTask = async ()=>{
//     let taskObj = {
//         taskk : document.getElementById("assigne").value,
//         developerName : document.getElementById("developersList").value,
//     }
//     await fetch(`http://localhost:3000/projects/${projectId}/tasks`,{
//         method : "POST",
//         body: JSON.stringify(taskObj),
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     });
//     console.log(taskObj,"taskonj"); 
// }

// const showAllTask = async()=>{
//     document.getElementById("showTasks").innerHTML = "";
//     let allTasksRes = await fetch(`http://localhost:3000/projects/${projectId}/tasks`);
//     let allTasks = await allTasksRes.json();
//     console.log(allTasks , "tasks");

//     allTasks.map((elem)=>{
        
//         let div = document.createElement("div");
//             let developerName = document.createElement("h3");
//             developerName.innerText = "Developer : "+elem.developerName

//             let task = document.createElement("p");
//             task.innerText = "Task : "+elem.taskk

//             let remove = document.createElement("button");
//             remove.innerText = "Remove";
//             remove.addEventListener("click",()=>{
//                 removeTask(elem.id);
//             })

//         div.append(developerName,task,remove);
//         document.getElementById("showTasks").append(div);
//     })

// }
// showAllTask();
// document.getElementById("addTask").addEventListener("click", addTask)

// const removeTask = async(id)=>{
//     await fetch(`http://localhost:3000/tasks/${id}`,{
//         method: "DELETE",
//     });
//     showAllTask();
// }

const logout = ()=>{
    localStorage.clear();
    location = "./login.html";
}
document.getElementById("logout").addEventListener("click",logout);
