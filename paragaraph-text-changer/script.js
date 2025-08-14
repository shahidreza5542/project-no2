const para = document.querySelector('.para')
const btn = document.querySelector('.click-btn')

console.log("hello");

btn.addEventListener('click', function(event){
    console.log(event);
    para.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
})

