
// ===== MODULE CLICK LOGIC =====
function openModule(module){

// If Web Development → open FabLab page
if(module === "web"){
window.location.href = "fablab.html";
}

// For other modules → show message
else{
document.getElementById("module-msg").innerText =
"This module is yet to be completed. It will be updated soon.";
}

}


// ===== SMOOTH SCROLL (BASIC JS) =====
document.querySelectorAll("a[href^='#']").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

target.scrollIntoView({
behavior: "smooth"
});

});

});


// ===== PAGE LOAD MESSAGE (OPTIONAL) =====
console.log("Portfolio loaded successfully");
function openPopup(){
document.getElementById("popup").style.display = "flex";
}

function closePopup(){
document.getElementById("popup").style.display = "none";
}



