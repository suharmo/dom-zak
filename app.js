//esercizio 1

document.getElementsByClassName('title')[0].innerHTML = "le titre est modifié";
document.getElementsByClassName('title')[0].setAttribute("style", "background-color : blue; color : red")

//esercizio 2
var link = document.querySelectorAll('.link')
var sec = link.length
console.log(sec)

function allSection(except) {
    for (var i = 0; i < sec; i++) {
        link[i].classList.add('link')



    }
    document.getElementById(except).classList.remove('link')

}

//esercizio 3
var input = document.querySelector('input')
var btn = document.getElementsByTagName('button')[0]
var span = document.querySelector('.span')

btn.addEventListener('click', function () {
    span.innerHTML = input.value

})

//esercizio 4

var counter = document.getElementsByClassName('counter')[0];
var trues = document.querySelector('.sec-left');
var secRight = document.getElementsByClassName('sec-right')[0];
var roode = document.getElementsByClassName('roode')[0];
var tr = 0;
console.log(trues.childNodes.length)

function changePlace() {

    if (secRight.childNodes.length < trues.childNodes.length) {
        secRight.appendChild(roode)
    } else {
        trues.appendChild(roode)
    }
    tr += 1
    counter.innerHTML = tr


}

function back() {
    counter.innerHTML = 0;
    tr = 0;
}

//esercizio 5

var btnAdd = document.getElementById('btn-add');
var containerImage = document.getElementById('container-image');


function addImage() {
    var image = document.createElement('img')
    image.src = ('./imaggini/241357427029212.png')
    image.setAttribute('style', 'width: 28%')


    containerImage.appendChild(image)
}

//esercizio 6
var firstP = document.getElementById('first-p');
var secondP = document.getElementById('second-p');
var sign = document.getElementsByClassName('sign')
var dropDown = document.getElementsByClassName('dropdown')[0]
var sum = document.getElementById('sum')

function dropDownMenu() {
    dropDown.innerHTML = sign.innerHTML
}


function sumNum() {

    if (dropDown.selectedIndex === 0) {
        sum.innerHTML = parseInt(firstP.value) + parseInt(secondP.value)

    } else if (dropDown.selectedIndex === 1) {
        sum.innerHTML = parseInt(firstP.value) - parseInt(secondP.value)
    } else if (dropDown.selectedIndex === 2) {
        sum.innerHTML = parseInt(firstP.value) * parseInt(secondP.value)
    } else if (dropDown.selectedIndex === 3) {
        sum.innerHTML = parseInt(firstP.value) / parseInt(secondP.value)
    }
}
var button = document.querySelectorAll('.num');
var inputCalcul = document.getElementsByClassName('input-calcul')[0];
var inputCalcul1 = [];
var inputCalcul2 = [];
var signCalcul = document.querySelectorAll('.sign');

function calcul(button) {


    inputCalcul1.push(button.value);
    inputCalcul2.push(button.value);

    inputCalcul.value = inputCalcul1.join('')


}
var arr = [];
var joined;

function signCal(signCalcul) {
    if (signCalcul.value === "+") {
        if (inputCalcul1.length > 0) {
            inputCalcul1.push(signCalcul.value)
            inputCalcul2.push(signCalcul.value)
            for (var i = 0; i < inputCalcul2.length; i++) {
                if (inputCalcul2[i] === "+") {
                    inputCalcul2.pop();
                    arr.push(parseInt(inputCalcul2.join('')))
                    inputCalcul2.length = 0
                    console.log(arr)
                    console.log(inputCalcul2)
                }

            }
            arr.push(signCalcul.value)

        }
    } else if (signCalcul.value === "-" || signCalcul.value === "*" || signCalcul.value === "/") {
        inputCalcul1.push(signCalcul.value)
        inputCalcul2.push(signCalcul.value)
        for (var i = 0; i < inputCalcul2.length; i++) {
            if (inputCalcul2[i] === "-" || inputCalcul2[i] === "*" || inputCalcul2[i] === "/") {
                inputCalcul2.pop();
                arr.push(parseInt(inputCalcul2.join('')))
                arr.push(signCalcul.value)
                inputCalcul2.length = 0
                console.log(arr)
                console.log(inputCalcul2)
            }

        }
    }

}
var cancel = document.querySelector('.cancel');
var splitted;

function eraseNum() {
    inputCalcul1.length = 0
    for (var i = 0; i < arr.length; i++) {



    }
    arr.length = 0


    inputCalcul.value = inputCalcul1.join('')
}
var som;

function sumCal() {
    arr.push(parseInt(inputCalcul2.join('')))
    console.log(arr)
    
    for (var i = 0; i < arr.length; i++) {
        if (arr[i + 1] === "*") {
            som = arr[i] * arr[i + 2]
            inputCalcul.value = som
        }
        if (arr[i + 1] === "/") {
            som = arr[i] / arr[i + 2]
            inputCalcul.value = som
        }
        if (arr[i + 1] === "+") {
            som = arr[i] + arr[i + 2]
            inputCalcul.value = som
        }
        if (arr[i + 1] === "-") {
            som = arr[i] - arr[i + 2]
            inputCalcul.value = som
        }

    }
}