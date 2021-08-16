const content = document.getElementById('getColor');
const colorPlace = document.querySelector('section');
const btn = document.getElementById('generate');

btn.addEventListener("click", () => {
    setSection(content.value.length);
    clear();
    for (let i = 0; i < content.value.length; i = i + 3) {
        let groupArray = [content.value[i], content.value[i + 1], content.value[i + 2]];
        check(groupArray);
        let codeArray = getUnicode(groupArray);
        print(codeArray);
    }

})

function setSection(length) {
    const symForBlock = 3;
    const blocks = length/symForBlock;
    const a = Math.sqrt(blocks);
    const full = Math.round(a);
    console.log(full);
    colorPlace.style.width = `${full*40}px`
}

function getUnicode(array) {
    let codeArray = array.map((el) => {
        return el.charCodeAt(0);
    })
    return codeArray
}

function check(array) {
    for (let j = 0; j < 3; j++) {
        if (array[j] === undefined) {
            array[j] = '0';
        }
    }
    return array;
}

function print(RGB) {
    const checkArray = checkUnicode(RGB);
    let div = document.createElement("div");
    div.style.width = "40px"
    div.style.height = "40px"
    div.style.backgroundColor = `rgb(${checkArray[0]},${checkArray[1]},${checkArray[2]})`
    colorPlace.append(div);
}

function checkUnicode(RGB) {
    for (let i = 0; i<RGB.length; i++){
        if (RGB[i] >=255 || RGB[i] < 0){
            RGB[i] = 0;
        }
    }
    return RGB;
}

function clear() {
    while (colorPlace.firstChild){
        colorPlace.removeChild(colorPlace.firstChild);
    }
}
