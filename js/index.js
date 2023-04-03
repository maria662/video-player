const $video = document.querySelector("#video") /*crear variables para asignar elementis html */
const $play = document.querySelector("#play")
const $pausa = document.querySelector("#pausa")
const $backward = document.querySelector("#backward")
const $forward = document.querySelector("#forward")

$play.addEventListener("click",handlePlay) /*asignar una accion al escuchar un evento*/
$pausa.addEventListener("click",handlePausa) /*asignar una accion al escuchar un evento*/
$backward.addEventListener("click",handleBackward )
$forward.addEventListener("click",handleForward )

function handlePlay(){ /*crear una funcion para asignarle un evento */
    $video.play()
    $play.hidden = true
    $pausa.hidden = false
    console.log("diste click a play")
}

function handlePausa(){
    $video.pause()
    $pausa.hidden = true
    $play.hidden = false
    console.log("pausa")
}

function handleBackward(){
    $video.currentTime = $video.currentTime - 10
    console.log("atras", $video.currentTime)
}

function handleForward(){
    $video.currentTime = $video.currentTime + 10
    console.log("adelante", $video.currentTime)
}

const $progress=document.querySelector("#progress")
$video.addEventListener("loadedmetadata", handleLoaded)
$video.addEventListener("timeupdate", handleTimeUpdate)

function handleLoaded(){
    $progress.max=$video.duration
    console.log("cargado", $video.duartion)
}

function handleTimeUpdate(){
    $progress.value=$video.currentTime
}

$progress.addEventListener("input", handleInput)

function handleInput(){
    $video.currentTime=$progress.value
    console.log($progress.value)
}