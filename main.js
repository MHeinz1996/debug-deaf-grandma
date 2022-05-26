let cont = true
let goodbyes = 0
let userInput = window.prompt('HEY, KID!')

while ( cont  ) {

    if ( userInput === "" ) {
        userInput=window.prompt("WHAT!?")
    }else {
        if ( userInput !== userInput.toUpperCase() ) {
            userInput=window.prompt("SPEAK UP, KID!")
        }
        else if ( userInput === "GOODBYE!" ) {
            if ( goodbyes < 1 ) {
                userInput=window.prompt("LEAVING SO SOON?")
                goodbyes++
            }
            else {
                alert("LATER, SKATER!")
                cont = false
            }
        } else {
            userInput=window.prompt('NO, NOT SINCE 1946!')
        } 
    } 
    
}