// // // // let prices=[250,645,300,900,50]

// // // // for(let i=0;i<prices.length;i++){
// // // //     let offer = prices[i]/10;
// // // //     prices[i]=prices[i]-offer;
// // // // }
// // // // console.log(prices)

// // // companies=["Bloomberg","Microsoft","Uber","Google","Apple","IBM"]
// // // companies.shift()
// // // companies.splice(2,1,"Ola")
// // // companies.push("Amazon")
// // // console.log(companies)

// // // function countVowels(str){
// // //     let count = 0;
// // //     for(let i=0;i<str.length;i++){
// // //         if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
// // //             count++;

    
// // //         }
// // //     }
// // //     return count;
// // // }
// // // let result = countVowels("lorem ipsum dolor sit amet");
// // // console.log(result)


// // let countVowels = (str)=>{
// //     let count = 0;
// //     for(i of str){
// //         if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){
// //             count++;
            
// //         }
// //     }
// //     return count;
// // }
// // let result = countVowels("lorem ipsum dolor sit amet");
// // console.log(result)


// // let countVowels = (str)=>{
// //     let count = 0;
// //     for(i of str){
// //         if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){
// //             count++;
            
// //         }
// //     }
// //     return count;
// // }
// // let result = countVowels("lorem ipsum dolor sit amet");
// // console.log(result)
// // let countVowels = (str)=>{
// //     let count = 0;
// //     for(i of str){
// //         if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){
// //             count++;
            
// //         }
// //     }
// //     return count;
// // }
// // let result = countVowels("lorem ipsum dolor sit amet");
// // console.log(result)


// let h2=document.querySelector("h2");

// console.log(h2.innerText);
// h2.innerText= h2.innerText + " By Yash Varale";


let divs = document.querySelectorAll(".box");
let idx = 1;
for(div of divs){
    div.innerText = `This is Unique ${idx}`;
    idx++;
}
let divs = document.querySelectorAll(".box");
let idx = 1;
for(div of divs){
    div.innerText = `This is Unique ${idx}`;
    idx++;
}
let divs = document.querySelectorAll(".box");
let idx = 1;
for(div of divs){
    div.innerText = `This is Unique ${idx}`;
    idx++;
}