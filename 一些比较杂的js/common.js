this.a = 1
exports.b = 2


exports = {
    c:3
}
module.exports = {
    d:4
}
exports.e = 5
this.f = 6


 // this === exports === module.exports  但是最后返回的是module.exports 所以不管前两者怎么变 最后只返回module.exports的值