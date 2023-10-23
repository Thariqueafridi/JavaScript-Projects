class Car{ // class defined
    drive(){
        console.log("Driving")
    }
}

function fillGas(){  // function 1
    console.log('Filling Gas')
}

function repair(){  // function 2
    console.log('Repairing')
}

export default Car
export {fillGas,repair}