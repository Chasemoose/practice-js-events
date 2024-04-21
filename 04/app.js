const divElements = document.querySelectorAll('div')


// #04.01
divElements.forEach(function(el){
    el.addEventListener('click', function(event) {
        this.classList.add('clicked')
        event.stopPropagation()
    })
})

// #04.02

document.body.addEventListener('click', function(){
    divElements.forEach(function(el){
        if(el.classList.contains('clicked')) {
            el.classList.remove('clicked')
        }
    })
})

// #04.04




