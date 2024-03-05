// Nested Function:

function outerFunc() {
    let innerFunc = function () {
        console.log("Inside inner function");
    }
    innerFunc();
}

outerFunc();