// Your code here

Array.prototype.myEach = function(banana) {
    for (let i = 0; i < this.length; i++) {
        banana(this[i])
    }
};
function bracketer(el) {
    console.log([el]);
}
[1,2].myEach(bracketer)

