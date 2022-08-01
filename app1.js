/*var shopDoc = document.getElementsByClassName('shop')[0].addEventListener('click',pageChanged)

function pageChanged(){
    //document.getElementById('para').innerHTML = "You can order any crochet and knit"
    var removeHead = document.getElementById('head')
    var removeFooter = document.getElementById('footer') 
    removeHead.remove()
    removeFooter.remove()

}*/

var email = document.getElementById('email')
var clickedButton = document.getElementsByClassName('subbtn')[0].addEventListener('click',clickedSubmitButton)
function clickedSubmitButton(){
    if (email.value == ""){
        alert('Plaese enter your email address!')
    }
    else{
        alert('Your subscrition succeed! We will send new updates to you Thank you')
    }
}

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if(bar){
    bar.addEventListener('click',() => {
    nav.classList.add('active');
})
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
    
}

