let rmvd;
let car;
let resetArr;
function add(arr) {
     if (rmvd) {
        console.log(arr + 'bbbb');
        arr.join('');
        console.log(arr + `aaaaaa`)
        let test = rmvd.toString() * 1 + arr.toString() * 1;
        console.log(test);
        resetArr = arr;
        rmvd = test;
        console.log(rmvd);
    } else {
        rmvd = arr.shift();
    
    arr.join('');

    let test = rmvd.toString() + arr.toString();
    console.log(arr.toString());
    console.log(rmvd.toString());
    console.log(test);
    } 
}


function subtract(arr) {
    if (rmvd) {
        console.log(arr + 'bbbb');
        arr.join('');
        console.log(arr + `aaaaaa`)
        let test = (rmvd.toString() * 1) - (arr.toString() * 1);
        console.log(test);
        resetArr = arr;
        rmvd = test;
        console.log(rmvd);
    } else {
        rmvd = arr.shift();
    
    arr.join('');

    let test = rmvd.toString() - arr.toString();
    console.log(arr.toString());
    console.log(rmvd.toString());
    console.log(test);
    } 
};

function multiply(arr){
        if (rmvd) {
        console.log(arr + 'bbbb');
        arr.join('');
        console.log(arr + `aaaaaa`)
        let test = (rmvd.toString() * 1) * (arr.toString() * 1);
        console.log(test);
        resetArr = arr;
        rmvd = test;
        console.log(rmvd);
    } else {
        rmvd = arr.shift();
    
    arr.join('');

    let test = rmvd.toString() * arr.toString();
    console.log(arr.toString());
    console.log(rmvd.toString());
    console.log(test);
    } 
};

function divide(arr){
            if (rmvd) {
        console.log(arr + 'bbbb');
        arr.join('');
        console.log(arr + `aaaaaa`)
        let test = (rmvd.toString() * 1) / (arr.toString() * 1);
        console.log(test);
        resetArr = arr;
        rmvd = test;
        console.log(rmvd);
    } else {
        rmvd = arr.shift();
    
    arr.join('');

    let test = rmvd.toString() / arr.toString();
    console.log(arr.toString());
    console.log(rmvd.toString());
    console.log(test);
    } 
};

let buttons = document.getElementsByClassName(`button`);
for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('mousedown', function(){
        this.classList.add('active');
    });
    buttons[i].addEventListener('mouseenter', function(){
        this.classList.add('hover');
    });
    buttons[i].addEventListener('mouseleave', function(){
        this.classList.remove('hover');
    });
    buttons[i].addEventListener('mouseup', function(){
        setTimeout(function (){
            let rmvhvr = document.querySelector('.active');
            rmvhvr.classList.remove(`active`);
        }, 150)
    });
};

function convert(x) {
    let string = x.join('');
    let string2 = Array.of(string);
    return string2;
}

let arr = [];

function addNum(x){
    if (resetArr == arr){
        arr = [];
        arr[0] = x;
        console.log(arr);
        screen.textContent = arr;
    }else {

    arr[arr.length] = x;
    console.log(arr + `ccc`);
    screen.textContent = arr;
    }
};

for (let i = 0; i <= 9; i++){
document.getElementById(`${i}`).addEventListener('click', function() {
    addNum(i);
});
};



let counter = 0;
document.getElementById(`add`).addEventListener('click', function() {
    
    arr = convert(arr); // tuki je problem da nardi 5,55
    console.log(arr);
    counter++;
    arr.splice(counter, arr.length);
    console.log(arr);
    add(arr);
    screen.textContent = arr;
})

document.getElementById(`subtract`).addEventListener('click', function() {
    
    arr = convert(arr); // tuki je problem da nardi 5,55
    console.log(arr);
    counter++;
    arr.splice(counter, arr.length);
    console.log(arr);
    subtract(arr);
    screen.textContent = arr;
})

document.getElementById(`multiply`).addEventListener('click', function() {
    
    arr = convert(arr); // tuki je problem da nardi 5,55
    console.log(arr);
    counter++;
    arr.splice(counter, arr.length);
    console.log(arr);
    multiply(arr);
    screen.textContent = arr;
})

document.getElementById(`divide`).addEventListener('click', function() {
    
    arr = convert(arr); // tuki je problem da nardi 5,55
    console.log(arr);
    counter++;
    arr.splice(counter, arr.length);
    console.log(arr);
    divide(arr);
    screen.textContent = arr;
});


let screen = document.getElementById('screen');
console.log(arr)
screen.textContent = arr;



