// var sum = function (a,b){
//     return a+b;
// }
// sum(1,2);

const { request } = require("http");
const httpStatus = require("http-status");

((calculationHelper) =>{
    // calculationHelper.sum = function(a,b){
    //     setTimeout(() => {
    //         console.log("Hi");
    //     })
    //     return a+b;
    // }
    calculationHelper.login = async(request) => {
        const isvalid = await calculationHelper.loginValidation(request);
        if(request.username == "Niva"){
            return{
                status: httpStatus.BAD_GATEWAY, message:"Username is required"
            }
        }
    }
    calculationHelper.loginValidation = async(request) => {
        if(request.username){
            return true;
        }
        return false;
    }
})(module.exports)