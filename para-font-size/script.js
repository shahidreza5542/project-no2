const button = document.querySelector('button')
const para = document.querySelector('p')

button.addEventListener('click', function (event) {
    // console.log(event);
    para.style.fontSize = '30px'
    if (para.style.fontSize === '30px') {
        button.addEventListener('click', function (event){
            para.style.fontSize = '15px'
        })

    }
})

