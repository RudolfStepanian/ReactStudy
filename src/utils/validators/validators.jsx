export const required = (value) => {
    if (value) return undefined;
    return 'Field is required';
};


export const maxLengthCreator = (maxLenght) => (value) => {
    if (value && value.length > maxLenght) return 'Max lenght is ' + maxLenght + ' symbols';
    return undefined;
};

export const minLengthCreator = (minLenght) => (value) => {
    if (value && value.length < minLenght) return 'Max lenght is ' + minLenght + ' symbols';
    return undefined;
};