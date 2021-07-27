export const incNumber = (num) => {
    return{
        type:"INCREMENT",
        payload: num,
    }
}

export const decNumber = () => {
    return{
        type:"DECREMENT"
    }
}

export const multiNumber = (num) => {
    return{
        type:"MULTIPLICATION",
        payload: num,
    }
}

export const divideNumber = (num) => {
    return{
        type:"DIVIDE",
        payload: num,
    }
}