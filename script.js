const dynamicText = document.querySelector("#dynamic_text")
var index = 0
dynamicText.onclick = showNewText

function showNewText(){
    const texts = [
        "Where dreams become real",
        "Where horses fly",
        "Where beggars ride",
        "Where nothing is true",
        "And everything is permitted",
    ]
    
    if(index >= texts.length -1) index = -1
    dynamicText.innerText = texts[++index]

    var myjson = "djfkd".json
}
