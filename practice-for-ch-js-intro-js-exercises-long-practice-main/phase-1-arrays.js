// Your code here
Array.prototype.uniq = function() {
    let emptyArray = [];

    this.forEach( (el) => {
        if (!emptyArray.includes(el)) {
            emptyArray.push(el)

        }
    })
    //console.log(emptyArray)
    return emptyArray 
};

Array.prototype.twoSum = function() {
    let emptyArray = [];

    this.forEach((el1, idx1) => {
        this.forEach((el2, idx2) => {
            if(idx2>idx1 && el1 + el2 === 0) {
                emptyArray.push([idx1, idx2])
            } 
        })
    })
    return emptyArray
};

Array.prototype.transpose = function() {
    const rowlength = this.length;
    const collength = this[0].length;

    let emptyArray = [];
        for (let i = 0; i < collength; i++) {
    let newArray = [];
            emptyArray.push(newArray);
        for (let j = 0; j < rowlength; j++) {
               emptyArray[i][j] = this[j][i];
        }
    }
    return emptyArray
};




