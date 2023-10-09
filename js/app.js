let zSpacing = -1000,
    lastPos = zSpacing / 5,
    $frames = document.getElementsByClassName('frame'),
    frames = Array.from($frames),
    zVals = [];

window.onscroll = () => {
    let top = document.documentElement.scrollTop;
    let delta = lastPos - top;
    
    lastPos = top

    frames.forEach((el, index) => {
        zVals.push((index * zSpacing) + zSpacing)
        zVals[index] += delta * -5

        let fr = frames[index];
        let transform = `translateZ(${zVals[index]}px)`;
        let opacity = zVals[index] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
        
        fr.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
    })
}    

window.scrollTo(0, 1)

// Audio
let soundBtn = document.querySelector('.soundbutton');
let audio = document.querySelector('.audio');

soundBtn.addEventListener('click', e => {
    soundBtn.classList.toggle('paused')
    audio.paused ? audio.play() : audio.paused()
})

window.onfocus = () => {
    soundBtn.classList.contains('paused') ? audio.paused() : audio.play()
}

window.onblur = () => {
   audio.paused()
}