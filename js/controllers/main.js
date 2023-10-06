console.log('sada');

// ----------OPEN PRODUCT FORM---------------

window.openProductForm = ()=>{
    document.getElementById('exampleModal').style.display = 'block'
    document.getElementById('exampleModal').classList ='show'
}
// ----------CLOSE PRODUCT FORM---------------

window.closeProductForm = ()=>{
    document.getElementById('exampleModal').style.display = 'none'
    document.getElementById('exampleModal').classList =''
}




































function onForm() {
    let addClass = document.querySelector('#exampleModal');
    addClass.classList.add('show')
}
function offForm() {
    let removeClass = document.querySelector('#exampleModal');
    removeClass.classList.remove('show')
}