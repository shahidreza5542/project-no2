const currentdate = document.querySelector('.currentdate')
const refreshBtn = document.getElementById("refreshButton");
const show = document.querySelector('.show')

let currentDate = new Date();
const date = currentDate.toLocaleString()

console.log(date);

show.addEventListener('click', function (event) {
    console.log(event);
    currentdate.innerHTML = `${date}`

})


refreshBtn.addEventListener("click", function () {
    location.reload();
});

