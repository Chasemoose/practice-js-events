const divElements = document.querySelectorAll('div')


// #04.01
divElements.forEach(function(el){
    el.addEventListener('click', function() {
        this.className = 'clicked'
    })
})

// #04.02

document.body.addEventListener('click', function(){
    if (divElements.forEach(function(el){
        el.classList.contains('clicked')
    })) {
        el.classList.add =
    }


})



