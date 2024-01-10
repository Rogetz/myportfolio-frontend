
/*for the animation trick js*/
let introDiv = document.querySelector("div.intro")
let greetings = document.querySelector(".greetings")
let pronoun = document.querySelector(".pronoun")
let myNames = document.querySelectorAll(".intro .my-name span")
let arrowButton = document.querySelector(".intro .arrow-container")
let profession = document.querySelector(".intro .profession")
let actionButton = document.querySelector(".intro .arrow-container .action-button")
let arrowRight = document.querySelector(".intro .fa-long-arrow-right")
let side = document.querySelector(".side")
let majorDiv = document.querySelector(".major-div")


window.addEventListener("load",function(){
    this.window.setTimeout(function(){
        side.classList.add("fade-in")
        /*for the ttitle*/
        this.window.setTimeout(function(){
            greetings.classList.add("slide-right")
            this.window.setTimeout(function(){
                pronoun.classList.add("active")
                this.window.setTimeout(function(){
                    myNames.forEach(function(element,index){
                        this.window.setTimeout(function(){
                            element.classList.add("active")
                        },index*100)
                    })
                    this.window.setTimeout(function(){
                        profession.classList.add("active")
                        this.window.setTimeout(function(){
                            side.classList.add("hidden")
                            majorDiv.classList.add("active")                        
                        },7000)
                    },1000)                 
                },1000)
            },1000)
        },1000)
    },1000)      
})
/* --end of the animation trick---------*/



// select all the elements you want to work on.
let projectProfiles = document.querySelectorAll(".project-profile")
let skills = document.querySelectorAll(".third-div .skills-section .single-skill")
let menuIcon = document.querySelector(".menu-icon")
let faBars = document.querySelector(".fa-bars")
let faClose = document.querySelector(".fa-close")
let toggledMenu = document.querySelector(".toggled-menu")

/*for th toggling of the menu icon */
faBars.addEventListener('click',function(e){
    faBars.classList.remove("active")
    faClose.classList.add("active")
    toggledMenu.classList.add("active")
})
faClose.addEventListener('click',function(e){
    faClose.classList.remove("active")
    faBars.classList.add("active")    
    toggledMenu.classList.remove("active")
})
/*----End of the menu-icon--- */

/*for the intersection trick*/


let intersectionObserver = new IntersectionObserver(function(entries){
    // the entries are an array
    entries.forEach(function(entry){
        if(entry.isIntersecting){
            // If you only want it to animate only once then you only live it out at this section, but for a looping one head over to the else block for removing them once more.
            entry.target.classList.add("show")
        }
        else{
            // remove it once more  so that it will be animating each time its reached
            entry.target.classList.remove("show")
        }
    })
})

// it works after initializing the intersection observer class.
projectProfiles.forEach(function(element,index){
    intersectionObserver.observe(element)
})

skills.forEach(function(element,index){
    intersectionObserver.observe(element)
})
/*--End of intersection trick --*/

