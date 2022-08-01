if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
}
else{
    ready()
}
function ready(){
    var removeBtn = document.getElementsByClassName('btn-remove')

    console.log(removeBtn)
    for(var i = 0; i < removeBtn.length; i++){
        var btn = removeBtn[i]
        btn.addEventListener('click',removeCartItem)
    
    }
    var quantityCheck = document.getElementsByClassName('cart-quantity-input')   

    for(var i = 0; i < quantityCheck.length; i++){
        var input = quantityCheck[i]
        input.addEventListener('change',changeCartQuantity)
    }

    var addtoCartButtons = document.getElementsByClassName('cartbtn')
    for(var i = 0; i < addtoCartButtons.length; i++){
        var button = addtoCartButtons[i]
        button.addEventListener('click',addToCartClicked)
    }

    var purchaseAmount = document.getElementsByClassName('purchase-button')[0].addEventListener('click',purchaseTotalAmount)

}
function purchaseTotalAmount(){
    alert('Thanks for purchasing! Thanks for Shopping with LILY')
    var cartItem = document.getElementsByClassName('cart-items')[0]
    while(cartItem.hasChildNodes()){
        cartItem.removeChild(cartItem.firstChild)
    }
    updateTotal()
}
function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateTotal()
}
function changeCartQuantity(event){
    var changeValue = event.target
    if(isNaN(changeValue.value) || changeValue.value <= 0){
        changeValue.value = 1
    }
    updateTotal()
}
function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement

    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('imag')[0].src
    addItemToCart(title,price,imageSrc)
    updateTotal()
    window.scrollBy(0,document.body.scrollHeight)

}
function addItemToCart(title,price,image){
    var cartRow = document.createElement('div')
    var cartItem = document.getElementsByClassName('cart-items')[0]
    var cartItemName = cartItem.getElementsByClassName('cart-item-title')
    for(var i = 0; i < cartItemName.length;i++){
        if(cartItemName[i].innerText == title){
            alert('This item is already added to the cart!  If you want to adjust your quality of product, you can adjust it below')
            return
        }
    }
    var cartRowContent = `
    <div class="cart-row">
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${image}">
        <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
        <input type="number" class="cart-quantity-input" value="2">
        <button class="btn-remove">Remove</button>
    </div>

    </div>`
    cartRow.innerHTML = cartRowContent
    cartItem.append(cartRow)
    cartRow.getElementsByClassName('btn-remove')[0].addEventListener('click',removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', changeCartQuantity)
}


function updateTotal(){
    var cartItemContainer = document.getElementsByClassName("cart-items")[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for(var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$',''))
        var quantities = quantityElement.value
        total = total + (price*quantities)
    }
    total = Math.round(total * 100)/100
    document.getElementsByClassName('cart-total-value')[0].innerText = '$'+ total
}

