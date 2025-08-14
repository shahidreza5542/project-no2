let show = document.querySelector('.show')
let btn = document.querySelector('.btn')

let otp = Math.floor(1000 + Math.random() * 9000);
console.log(otp);

btn.addEventListener('click', function(event){
    console.log(`${otp}`);
    show.innerHTML = `${otp}`
})

