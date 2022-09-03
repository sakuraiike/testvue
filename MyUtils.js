function MyUtils(){
    this.name="MyUtils";
    this.version="3.5.1";
    this.operate=function(){

        console.log("operated");
    }
    this.sleep=function(){

        console.log("slept");
    }




}

MyUtils.prototype.sayHello=function(){
    console.log("hello:i am ",this.name);



}

module.exports=MyUtils;