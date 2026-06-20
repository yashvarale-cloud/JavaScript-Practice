// // let prices=[250,645,300,900,50]

// // for(let i=0;i<prices.length;i++){
// //     let offer = prices[i]/10;
// //     prices[i]=prices[i]-offer;
// // }
// // console.log(prices)

// companies=["Bloomberg","Microsoft","Uber","Google","Apple","IBM"]
// companies.shift()
// companies.splice(2,1,"Ola")
// companies.push("Amazon")
// console.log(companies)

function countVowels(str){
    let count = 0;
    for(let i=0;i<str.length;i++){
        if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
            count++;
        }
    }
    return count;
}
let result = countVowels("lorem ipsum dolor sit amet");
console.log(result)