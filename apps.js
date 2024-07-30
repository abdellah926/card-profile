let profile= document.getElementById('profile-box')
document.addEventListener('mousemove',function(profile){
    let dx = profile.pageX - window.innerWidth / 2
    let dy = profile.pageY - window.innerHeight / 2
    let angleX = 40 * dx / window.innerWidth / 2
    let angleY = 40 * dy / window.innerHeight / 2
    profile.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`       
})
