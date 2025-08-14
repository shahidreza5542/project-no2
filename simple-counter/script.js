const increase = document.querySelector('.increase')
const decrease = document.querySelector('.decrease')
const num = document.querySelector('.num')

let number = 0;

increase.addEventListener('click', function (event) {
    console.log('1+');
    number++;
    num.innerHTML = `${number}`

})

decrease.addEventListener('click', function (event) {
    console.log('1-');
    number--;
    num.innerHTML = `${number}`
    if (number === -1) {
        alert('Stop Decreasing')
    }

})

