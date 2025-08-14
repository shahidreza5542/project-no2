const hide = document.querySelector('.hide')
const show = document.querySelector('.show')
const para = document.querySelector('.para')
const buttonbtn = document.querySelectorAll('button')

show.addEventListener('click', function(event){
    console.log(event);
    para.style.display = 'block';
    
})

hide.addEventListener('click', function(event){
    console.log(event);
    para.style.display = 'none';
    
})