let tools = ["Selenium", "cypress", "wdio", "uft", "protractor"]

const string  = tools.toString(); 

console.log(string); 

const join = tools.join('*')
console.log(join) 

const pop = tools.pop()
console.log(tools); 

const push = tools.push('webshare')
console.log(tools)

const sort = tools.sort()
console.log(tools)

const reverse = tools.reverse()
console.log(tools)


tools.forEach((value)=>{
    if(value == "cypress"){
        console.log("Cypress is trending")
    }else{
        console.log("Element is not found")
    }
})



