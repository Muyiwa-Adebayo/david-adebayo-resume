"use strict";


/**
 * Calculator Logic
 */
const name = "David Adebayo";
let age = 30;

function add(num1, num2){
    return num1 + num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function division(num1, num2){
    return num1 / num2;
}

let result1 = add(20,10);
let result2 = multiply(10,2);
let result3 = division(20,10);

console.log("Addition result: ", result1)
console.log("Mulitplication result: ", result2)
console.log("Division result: ", result3)


// DOM interactive Title

const mainTitle = document.querySelector('header h1')

mainTitle.innerHTML = "David's Dynamic Resume"

const header = document.querySelector('header')

header.addEventListener('click', function(){
    header.style.backgroundColor = "darkblue"
    // alert("Header colour changed")
})

// DOM interactive Skills

// const skills = document.querySelectorAll('#skills ul li')

// skills.forEach(skill => {
//     skill.addEventListener('mouseover', function (){
//         skill.style.backgroundColor = "#FCF4D6"
//         skill.style.fontWeight = "bold"
//         skill.style.animation = "0.8s"
//     })

//     skill.addEventListener('mouseout', function(){
//         skill.style.backgroundColor = "#eeeeee"
//         skill.style.fontWeight = "400"
//     })
// });


// Tooltip for header
const tooltipContainer = document.querySelector('.tooltip-container');
const tooltipText = document.querySelector('.tooltip-text');

const showTooltip = (event) => {
    tooltipText.style.visibility = "visible"
    tooltipText.style.opacity = "1"
    tooltipText.style.transition = "0.5s"
    tooltipText.stlye.top = `${event.clientY + 10}px`;
    tooltipText.stlye.left = `${event.clientX + 10}px`;
}

const hideTooltip = () => {
    tooltipText.style.visibility = "hidden"
    tooltipText.style.opacity = "0"
    tooltipText.style.transition = "0.5s"
}

tooltipContainer.addEventListener('mouseover', showTooltip)
tooltipContainer.addEventListener('mousemove', showTooltip)
tooltipContainer.addEventListener('mouseout', hideTooltip)

