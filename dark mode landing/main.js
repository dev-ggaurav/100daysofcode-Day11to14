const body = document.body;
const toggle = document.getElementById('toggle');

toggle.addEventListener('click',function(){
    body.classList.toggle('dark-theme');
})