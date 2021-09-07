// Excersize One
//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/


let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    for (let i = 0; i < dog_names.length; i++){
        if(dog_string.includes(dog_names[i])){
            console.log(`matched ${dog_names[0]}`) 
        } else {
        console.log('No matches')}
    }
}
console.log(findWords())


//Call method here with parameters




//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */
// Excersize 2

let given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replace_evens(){
    for(let i = 0; i < given_arr.length; i++){
        if(i % 2 == 0){
            given_arr.splice(i,1,'Even')
        }
    }
    return given_arr
}

console.log(replace_evens())




// Basically the same thing from classwork 
    // for(let i = 0; i < group_of_names.length; i++){
    //     if(i % 2 == 0){
    //         group_of_names.splice(i,1, 'My lord and savior')
    //     }
    // }
    // return group_of_names
