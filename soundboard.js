function playAudio(clickedObject){
    const dataNumber = clickedObject.getAttribute('data-number')
    
    const audio = document.querySelector(`audio[data-number="${dataNumber}"]`)
    const sound = document.querySelector(`button[data-number="${dataNumber}"]`)

    if(!audio)  { return }

    const durationInMilliseconds = audio.duration * 1000

    sound.classList.add('playing')
    console.log(audio.duration)
    audio.currentTime = 0;
    audio.play();
    
    setTimeout(() => {sound.classList.remove('playing')}, durationInMilliseconds - 100)
       
}