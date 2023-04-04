
let counter = 0;
const getData = () => {
    console.log("fetching data from the server..." + ++counter);
}

// debounce
const debounce = function (getData, delay) {
    let timmer;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timmer);
        timmer = setTimeout(() => {
            getData.apply(context, args);
        }, delay);
    }
}
const getResult = debounce(getData, 1000);

// thortling
const thortling = function (getData, delay) {
    let flag = true;
    return function() {
        let context = this;
        let args = arguments;
        if(flag) {
            getData.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, delay);
        }
    }
}
const getResult1 = thortling(getData, 500);