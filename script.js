// const profile = {
//     name :"Yash",
//     isFollowed : false,
//     postCount : 195,
//     follwersCount : 569,
//     followingCount : 4,
//     Expeince : "2 years",
//     about : "I am a web developer and designer. I have been working in this field for 2 years. I have a lot of experience in web development and design. I have worked on many projects and have a lot of experience in this field. I am a very passionate person and I love to learn new things. I am always looking for new opportunities to learn and grow in this field."
    
// };
// console.log(profile);


// let num = prompt("Enter the number");
// if(num%5 === 0)
// {
//     console.log("The number is multiple by 5");
// }
// else{
//     console.log("The number is not multiple by 5");
// }

let marks = prompt("Enter the marks");
let Grade;
if (marks >=90 && marks <=100) {
    
    console.log("Grade A");
}else if (marks >=80 && marks <90) {
    console.log("Grade B");
} else if (marks >=70 && marks <80) {
    console.log("Grade C");
} else if (marks >=60 && marks <70) {
    console.log("Grade D");
} else if (marks >=0 && marks <60) {
    console.log("Grade F");
} else {
    console.log("Invalid marks");
}