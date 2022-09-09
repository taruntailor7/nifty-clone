

// Raj code started

let div1 = document.createElement("div");
let heading1 = document.createElement("h1");
heading1.innerText = "Establish Knowledge Hub";
let para = document.createElement("p");
para.innerText = "Empower all members to share ideas, finalize specifications, & gather feedback in real-time with chat and one-click video calls.";

div1.append(heading1, para);
// div2.append(heading1, para);

let divMain = document.getElementById("visible");
let image = document.createElement("img");
image.src = "https://niftypm.com/_nuxt/img/large@1x.f90d042.webp";
divMain.append(div1, image);

document.getElementById("divA").addEventListener("click",function(){
    divMain.innerHTML = "";
    heading1.innerText = "Establish Knowledge Hub";
    para.innerText = "Empower all members to share ideas, finalize specifications, & gather feedback in real-time with chat and one-click video calls.";
    div1.append(heading1, para);
    image.src = "https://niftypm.com/_nuxt/img/large@1x.f90d042.webp";
    divMain.append(div1,image);
})

document.getElementById("divB").addEventListener("click",function(){
    divMain.innerHTML = "";
    heading1.innerText = "Collaborate on Tasks";
    para.innerText = "Flexibly organize, prioritize, and track daily work with a high level of detail using Kanban, List, Timeline, Calendar, and Swimlane views.";
    div1.append(heading1, para);
    image.src = "https://niftypm.com/_nuxt/img/large@1x.dd989ad.webp";
    divMain.append(div1, image);
})

document.getElementById("divC").addEventListener("click",function(){
    divMain.innerHTML = "";
    heading1.innerText = "Automate Reporting";
    para.innerText = "Access automated progress reporting across all your projects and team activities to ensure operational clarity.";
    div1.append(heading1, para); 
    image.src = "https://niftypm.com/_nuxt/img/large@1x.4472281.png";
    divMain.append(div1, image);
})

document.getElementById("divD").addEventListener("click",function(){
    
    divMain.innerHTML = "";
    heading1.innerText = "Create Docs & Wikis";
    para.innerText = "Create beautiful docs, notes, and wikis for your projects and share with anyone. Nifty even integrates natively with Google Docs.";    
    div1.append(heading1, para); 
    image.src = "https://niftypm.com/_nuxt/img/large@1x.e2a66e9.webp";
    divMain.append(div1, image);
})

// slide 2


let div2 = document.createElement("div");
let heading2 = document.createElement("h1");
heading2.innerText = "Establish Knowledge Hub";
// let para = document.createElement("p");
para.innerText = "Empower all members to share ideas, finalize specifications, & gather feedback in real-time with chat and one-click video calls. span Learn more >";

div2.append(heading2);

let divMain2 = document.getElementById("visible2");
let image2 = document.createElement("img");
image2.src = "https://niftypm.com/_nuxt/img/large@1x.c481d6e.webp";
divMain2.append(div2, image2);

document.getElementById("divE").addEventListener("click",function(){
    divMain2.innerHTML = "";
    heading2.innerText = "Engineering";
    para.innerText = "Let go of fragmented tools. Plan, track, and manage your workflows with award-winning ease — in one collaborative workspace.";
    div2.append(heading2, para);
    image2.src = "https://niftypm.com/_nuxt/img/large@1x.c481d6e.webp";
    divMain2.append(div2,image2);
})

document.getElementById("divF").addEventListener("click",function(){
    divMain2.innerHTML = "";
    heading2.innerText = "Sales";
    para.innerText = "Empower your sales teams by adding flow to their work with real-time reporting and insights using automated workflows.";
    div2.append(heading2, para); 
    image2.src = "https://niftypm.com/_nuxt/img/large@1x.a9e1772.webp";
    divMain2.append(div2, image2);
})

document.getElementById("divG").addEventListener("click",function(){
    divMain2.innerHTML = "";
    heading2.innerText = "Product";
    para.innerText = "Build better products with team alignment. Create clear product roadmaps and automate progress reporting as tasks are completed.";
    div2.append(heading2, para);
    image2.src = "https://niftypm.com/_nuxt/img/large@1x.fade5e2.webp";
    divMain2.append(div2, image2);
})

document.getElementById("divH").addEventListener("click",function(){
    divMain2.innerHTML = "";
    heading2.innerText = "Client Management";
    para.innerText = "Never lose a client due to poor communication again. Real-time collaboration to shorten feedback cycles and automate progress reporting.";
    div2.append(heading2, para); 
    image2.src = "https://niftypm.com/_nuxt/img/large@1x.0c3cfc6.webp";
    divMain2.append(div2, image2);
})

// Raj code ended



// shubham code

function changebgColor() {
    const content=document.querySelector(".innerinputbox");
    content.style.backgroundColor="white";

    const content2=document.querySelector("#emailinput");
    content2.style.backgroundColor="white";
}

// shubham code ended