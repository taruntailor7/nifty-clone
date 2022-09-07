

let div1 = document.createElement("div");
let heading1 = document.createElement("h1");
heading1.innerText = "Establish Knowledge Hub";
// let para = document.createElement("h4");
// para.innerText = "Empower all members to share ideas, finalize specifications, & gather feedback in real-time with chat and one-click video calls. span Learn more >";

div1.append(heading1);

let divMain = document.getElementById("visible");
let image = document.createElement("img");
image.src = "https://niftypm.com/_nuxt/img/large@1x.f90d042.webp";
divMain.append(div1, image);

document.getElementById("divA").addEventListener("click",function(){
    // let divMain = document.getElementById("visible");
    // let image = document.createElement("img");
    // let div1 = document.createElement("div");
    // let heading1 = document.createElement("h1");
    divMain.innerHTML = "";
    heading1.innerText = "Establish Knowledge Hub";
    div1.append(heading1);    
    image.src = "https://niftypm.com/_nuxt/img/large@1x.f90d042.webp";
    divMain.append(div1,image);
})

document.getElementById("divB").addEventListener("click",function(){
    // let divMain = document.getElementById("visible");
    // let image = document.createElement("img");
    divMain.innerHTML = "";
    heading1.innerText = "Collaborate on Tasks";
    div1.append(heading1); 
    image.src = "https://niftypm.com/_nuxt/img/large@1x.dd989ad.webp";
    divMain.append(div1, image);
})

document.getElementById("divC").addEventListener("click",function(){
    // let divMain = document.getElementById("visible");
    // let image = document.createElement("img");
    divMain.innerHTML = "";
    heading1.innerText = "Automate Reporting";
    div1.append(heading1); 
    image.src = "https://niftypm.com/_nuxt/img/large@1x.4472281.png";
    divMain.append(div1, image);
})

document.getElementById("divD").addEventListener("click",function(){
    // let divMain = document.getElementById("visible");
    // let image = document.createElement("img");
    divMain.innerHTML = "";
    heading1.innerText = "Create Docs & Wikis";
    div1.append(heading1); 
    image.src = "https://niftypm.com/_nuxt/img/large@1x.e2a66e9.webp";
    divMain.append(div1, image);
})




// slide 2


let div2 = document.createElement("div");
let heading2 = document.createElement("h1");
heading2.innerText = "Establish Knowledge Hub";
// let para = document.createElement("h4");
// para.innerText = "Empower all members to share ideas, finalize specifications, & gather feedback in real-time with chat and one-click video calls. span Learn more >";

div2.append(heading2);

let divMain2 = document.getElementById("visible2");
let image2 = document.createElement("img");
image2.src = "https://niftypm.com/_nuxt/img/large@1x.f90d042.webp";
divMain2.append(div2, image2);

document.getElementById("divE").addEventListener("click",function(){
    // let divMain = document.getElementById("visible");
    // let image = document.createElement("img");
    // let div1 = document.createElement("div");
    // let heading1 = document.createElement("h1");
    divMain2.innerHTML = "";
    heading2.innerText = "Establish Knowledge Hub";
    div2.append(heading2);
    image2.src = "https://niftypm.com/_nuxt/img/large@1x.f90d042.webp";
    divMain2.append(div2,image2);
})

document.getElementById("divF").addEventListener("click",function(){
    // let divMain = document.getElementById("visible");
    // let image = document.createElement("img");
    divMain2.innerHTML = "";
    heading2.innerText = "Collaborate on Tasks";
    div2.append(heading2); 
    image2.src = "https://niftypm.com/_nuxt/img/large@1x.dd989ad.webp";
    divMain2.append(div2, image2);
})

document.getElementById("divG").addEventListener("click",function(){
    // let divMain = document.getElementById("visible");
    // let image = document.createElement("img");
    divMain2.innerHTML = "";
    heading2.innerText = "Automate Reporting";
    div2.append(heading2); 
    image2.src = "https://niftypm.com/_nuxt/img/large@1x.4472281.png";
    divMain2.append(div2, image2);
})

document.getElementById("divH").addEventListener("click",function(){
    // let divMain = document.getElementById("visible");
    // let image = document.createElement("img");
    divMain2.innerHTML = "";
    heading2.innerText = "Create Docs & Wikis";
    div2.append(heading2); 
    image2.src = "https://niftypm.com/_nuxt/img/large@1x.e2a66e9.webp";
    divMain2.append(div2, image2);
})