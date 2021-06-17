//Delete
var removeItemButtons = document.getElementsByClassName('delete')
for (let i = 0; i < removeItemButtons.length; i++) {
    var button = removeItemButtons[i]
    button.addEventListener('click', function (event) {
        let buttonClicked = event.target
        buttonClicked.parentElement.remove()
        totalprice()
    })
}
//Like
var likes = document.getElementsByClassName('like')
for (let i = 0; i < likes.length; i++) {
    let like = likes[i]
    like.addEventListener('click', function () {
        if (like.style.color !== 'red') {

            like.style.color = 'red'
        }
        else {
            like.style.color = 'black'
        }
    })
}
// Add/Minus

var adds = document.getElementsByClassName('plus-btn')
for (let i = 0; i < adds.length; i++) {
    let add = adds[i]
    add.addEventListener('click', function () {
        add.previousElementSibling.value++
        totalprice()
    })
}

var minuss = document.getElementsByClassName('minus-btn')
for (let i = 0; i < minuss.length; i++) {
    let Minus = minuss[i]
    Minus.addEventListener('click', function () {
        if (Minus.nextElementSibling.value > 1) {
            Minus.nextElementSibling.value--
            totalprice()
        }
    })
}

// Total price 
function totalprice() {
    var items = document.getElementsByClassName("Item")
    var total = 0
    for (let i = 0; i < items.length; i++) {
        var Price = items[i].querySelector(".price")
        var qyt = items[i].querySelector(".Quant")
        total = Price.innerHTML * qyt.value
    }
    document.getElementById("finalPrice").value = total
}

















