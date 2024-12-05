let userName = ["Alice", "Bob","Charlie","Delta","John"];
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
function login(str, password){
    let filteredData = userName.filter((el, i)=> el ==str);
    if (filteredData.length==0){
        
        console.log("User Not Found...Please Signup");
    }else{
        if(password=="Emp@123"){
            console.log("Login Sucessfull....");      
        }else{
            console.log("Wrong Password...");
        }
    }
}
login("Alice", "Emp@123");

