let userName = ["Alice", "Bob","Charlie","Delta","Stephen"];
function signup(str){
    let filteredData = userName.filter((el,i)=> el==str);
    if(filteredData.length==0){
        // I need to push
        userName.push(str)
        console.log("Signup Sucessfull......")
    }else{
        console.log("Already Registerd.......")
    }
}
signup("Meenu")
//signup("Delta")