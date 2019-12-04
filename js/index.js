// Your code goes here

/*
let element = document.getORqueryByWhatever("element");
element.addEventListener("event", () => {
    console.log("random");
});
element.addEventListener("event", (e) => {
    console.log(e.something);
});
keydown*
resize*
mouseover*
mouseout*
click*
wheel*
copy*
dragend*
dblclick*
mousemove*
*/

/*
Nest two similar events somewhere in the site and prevent the event propagation properly*
Stop the navigation items from refreshing the page by using preventDefault()*
*/

const logo = document.querySelector(".nav-container .logo-heading"); //done
const navItems = document.querySelectorAll("nav a"); //done
const headerImg = document.querySelector("header img"); //done
const headerParagrah = document.querySelector("header p"); //done
const textContentHeader = document.querySelectorAll(".text-content h2"); //done
const imgContent = document.querySelectorAll(".img-content"); //done
const contentPSect = document.querySelectorAll(".content-pick"); //done
const buttons = document.querySelectorAll(".content-pick .btn"); //done
const footer = document.querySelector("footer"); //done

window.addEventListener("keydown", () => { //done
    document.querySelector("header").style.backgroundColor = "orange";

});

window.addEventListener("resize", () => { //done
    document.querySelector("body").style.backgroundColor = "#"+window.screenX+window.screenY;
});

logo.addEventListener("mouseenter", () => { //done
    gsap.to(".logo-heading", {
        duration: 5,
        rotation: 180,
        ease: "elastic"
    });
});

logo.addEventListener("mouseleave", () => { //done
    gsap.to(".logo-heading", {
        duration: 5,
        rotation: 360,
        ease: "elastic"
    });
});

navItems.forEach((aTag) => {
   aTag.addEventListener("click", (e) => { //done
       aTag.style.color = "green";
       e.preventDefault();
   });
});

headerImg.addEventListener("wheel", () => { //done
    headerImg.style.transform = "rotate(0.5turn)";
});

headerParagrah.addEventListener("", () => {

});

textContentHeader.forEach((headerTag) => {  //done
    headerTag.addEventListener("copy", () => {
        headerTag.style.fontSize = "10rem";
    });
});

imgContent.forEach((imgTag) => { //done
   imgTag.addEventListener("dragend", () => {
        imgTag.children[0].setAttribute("src", "https://images.unsplash.com/photo-1565713729907-ab9cd4b5b0c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80");
   });
});

buttons.forEach((btnTag) => { //done
   btnTag.addEventListener("dblclick", (e) => {
       btnTag.parentNode.removeChild(btnTag);
   });
});

footer.addEventListener("mousemove", (e) => { //done
    footer.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+","+((e.offsetX+e.offsetY)/2)+")";
});

// Stop Propagation

contentPSect.forEach((elem) => {
    elem.addEventListener('click', (e) => {
        console.log("me second");
    }, {
        capture: false
    });
});

document.querySelector('.content-pick .destination h4').addEventListener("click", (e) => {
    console.log("me first");
    e.stopPropagation(); //stop bubbling
});