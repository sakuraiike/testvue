// var ww=require("./ww")

// console.log(ww.person)

// const w2=require("./w2")

// console.log(w2.name)

const Utils=require("./MyUtils")
const util=new Utils()
util.sayHello=function(){
    console.log("hello:i am not ",this.name)

}
util.__proto__.sayHello.call(util)
