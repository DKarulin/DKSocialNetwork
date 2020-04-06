export const reqiredField = value => {
    if (value) return undefined
    return 'Field is required'
}

export const maxLengthCreater = (maxLength) =>(value) =>{
    if (value.length > maxLength) return `Max length is ${maxLength} symbol`
    return undefined
}
