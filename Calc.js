const btn = document.getElementById('btn');
const output = document.getElementById('output');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const slash = document.getElementById('slash');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const multiply = document.getElementById('multiply');
const equal = document.getElementById('equal');
const zero = document.getElementById('zero')
const clear = document.getElementById('clear');
const outputDiv = document.getElementById('ouputDiv')

const numbers = [one, two, three, four, five, six, seven, eight, nine, zero];
const operators = [minus, plus, multiply, slash];
let firstNum;
let secNum;
let fullNum;
let sum;


/* --------------------------------*/
for(let el of numbers)
{
    el.addEventListener('click', () => 
    {
        output.innerHTML += el.innerHTML
    })
}
/* --------------------------------*/
for(let el of operators)
{
    el.addEventListener('click', () => 
    {
        output.innerHTML += el.innerHTML
    })
}
/* --------------------------------*/
equal.addEventListener('click', () => 
{
    makeSum();
    makeSubstact();
    makeMultiply();
    makeDivide();
})
/* --------------------------------*/
function makeSum()
{
    fullNum = output.innerHTML;
    firstNum = Number(fullNum.split('+')[0]);
    secNum = Number(fullNum.split('+')[1]);
    for(let el of fullNum)
    {
        if(el === '+')
        {
            output.innerHTML = '';
            sum = firstNum + secNum;
            output.innerHTML += sum;
            console.log(firstNum)
            console.log(secNum)
            console.log(sum)
        }
    }
}
/* --------------------------------*/
function makeSubstact()
{
    fullNum = output.innerHTML;
    firstNum = Number(fullNum.split('-')[0]);
    secNum = Number(fullNum.split('-')[1]);
    for(let el of fullNum)
    {
        if(el === '-')
        {
            output.innerHTML = '';
            sum = firstNum - secNum;
            output.innerHTML += sum;
            console.log(firstNum)
            console.log(secNum)
            console.log(sum)
        }
    }
}
/* --------------------------------*/
function makeMultiply()
{
    fullNum = output.innerHTML;
    firstNum = Number(fullNum.split('*')[0]);
    secNum = Number(fullNum.split('*')[1]);
    for(let el of fullNum)
    {
        if(el === '*')
        {
            output.innerHTML = '';
            sum = firstNum * secNum;
            output.innerHTML += sum;
            console.log(firstNum)
            console.log(secNum)
            console.log(sum)
        }
    }
}
/* --------------------------------*/
function makeDivide()
{
    fullNum = output.innerHTML;
    firstNum = Number(fullNum.split('/')[0]);
    secNum = Number(fullNum.split('/')[1]);
    for(let el of fullNum)
    {
        if(el === '/')
        {
            output.innerHTML = '';
            sum = firstNum / secNum;
            output.innerHTML += sum;
            console.log(firstNum)
            console.log(secNum)
            console.log(sum)
        }
    }
}
/* --------------------------------*/
clear.addEventListener('click', () => 
{
    output.innerHTML = '';
    fullNum = '';
    firstNum = '';
    secNum = '';

})








































































