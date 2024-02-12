function streamvedio(){
    let vedio = document.querySelector('vedio')
    let option = (vedio.true)
    navigator.mediaDevices.getUserMedia(option)
    .then(stream=>vedio.srcobject=stream)
}