let harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];
for( let i = 0; i < harryPotterTitles.length; i++){
    
    console.log(`Harry Potter ${harryPotterTitles[i]}`)
}


let grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]
for(let i = 0; i < grades.length; i++){
    console.log(grades[i])
 if(grades[i] >= 0 && grades[i] <= 69){
    console.log("You got an F")
} else if(grades[i] >= 70 && grades[i] <= 76){
    console.log("You got a D")
} else if(grades[i] >= 77 && grades[i] <= 84){
    console.log("You got a C")
}else if(grades[i] >= 84 && grades[i] <= 92){
    console.log("You got a B")
} else if(grades[i] >= 93 && grades[i] <= 100){
    console.log("You got an A")
}}

    
