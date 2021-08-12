const content = document.getElementById('getColor');
const colorPlace = document.querySelector('section');
const btn = document.getElementById('generate');

btn.addEventListener("click", (e) => {
    for (let i = 0; i < content.value.length; i = i + 3) {
        let groupArray = [content.value[i], content.value[i + 1], content.value[i + 2]];
        let checkedArray = check(groupArray);
        let codeArray = getCode(checkedArray);
        //print(codeArray);
    }
})

function getCode(array) {
    let codeArray = array.map((el) => {
        return el.charCodeAt(0);
    })
    return codeArray
}

function check(array) {
    for (let j = 0; j < 3; j++) {
        if (array[j] == undefined) {
            array[j] = '0';
        }
    }
    return array;
}

function print() {

}

