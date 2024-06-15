document.addEventListener('mousemove',function(e){
    let dx = e.pageX - window.innerWidth / 2
    let dy = e.pageY - window.innerHeight / 2
    let angleX = 40 * dx / window.innerWidth / 2
    let angleY = 40 * dy / window.innerHeight / 2
    block.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`       
})

