const equal = document.getElementById('equal');
const btnNum = document.querySelectorAll('[data-number]')
const btnOper = document.querySelectorAll('[data-operator]')
let fullNum;





for(let el of btnNum)
{
    el.addEventListener('click', () => 
    {
        output.innerHTML += el.innerHTML
    })
}


for(let el of btnOper)
{
    el.addEventListener('click', () => 
    {
        output.innerHTML += el.innerHTML
    })
}


equal.addEventListener('click', () => 
{
    makeSum();
    makeSubstact();
    makeMultiply();
    makeDivide();
})

function makeSum()
{
    fullNum = output.innerHTML;
    for(let el of fullNum)
    {
        if(el === '+')
        {
            output.innerHTML = '';
            output.innerHTML += (Number(output.innerHTML.split('+')[0])) + (Number(output.innerHTML.split('+')[1]));
        }
    }
}


function makeSubstact()
{
    for(let el of output.innerHTML)
    {
        if(el === '-')
        {
            output.innerHTML = '';
            output.innerHTML += (Number(fullNum.split('-')[0])) - (Number(fullNum.split('-')[1]));
        }
    }
}


function makeMultiply()
{
    for(let el of output.innerHTML)
    {
        if(el === '*')
        {
            output.innerHTML = '';
            output.innerHTML += (Number(fullNum.split('*')[0])) * (Number(fullNum.split('*')[1]));
        }
    }
}


function makeDivide()
{
    for(let el of output.innerHTML)
    {
        if(el === '/')
        {
            output.innerHTML = '';
            output.innerHTML += (Number(fullNum.split('/')[0])) / (Number(fullNum.split('/')[1]));
        }
    }
}


clear.addEventListener('click', () => 
{
    output.innerHTML = '';
    fullNum = '';
    firstNum = '';
    secNum = '';

})

