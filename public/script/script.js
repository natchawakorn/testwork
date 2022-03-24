const ADD_ORDER = document.getElementById('ADD_ORDER')
const addorder = document.querySelector('.addorder')
const gohome = document.querySelector('.gohome')
const backhome = document.querySelector('.backhome')
const manage = document.querySelector('.manage')
ADD_ORDER.addEventListener('click',()=>{
    addorder.style.left = "0";
})
gohome.addEventListener('click',()=>{
    addorder.style.left = "-100%";
})
backhome.addEventListener('click',()=>{
    manage.style.left = "-100%";
})