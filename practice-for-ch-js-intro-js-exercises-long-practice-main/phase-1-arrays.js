// Your code here
Array.prototype.uniq = function() 
    let emptyArray = [];

    this.forEach( (el) => {
        if (!emptyArray.includes(el)) {
            emptyArray.push(el)

        }
    })
    //console.log(emptyArray)
    return emptyArray 
};


