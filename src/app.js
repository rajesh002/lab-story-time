//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable
function moreAboutHome(address, distanceFromTown, hasNeighbours) {
    return typeof (address) + typeof (distanceFromTown) + typeof (hasNeighbours);
}






//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean


function moreAboutKaren(parents, noOfSiblings, isNuclearFamily) {
    var typeParents = typeof (parents);
    var typeNoOfSiblings = typeof (noOfSiblings)
    var typeIsNuclearFamily = typeof (isNuclearFamily)
    if ((typeParents == "string") && (typeNoOfSiblings == "number") && (typeIsNuclearFamily == "boolean"))
        return true;
    else
        return false;
}





//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value

function doesFriendExist(text, num) {
    if ((text == "NaN") && typeof (num == NaN))
        return 'NaN'
    if (typeof (text) == 'NaN')
        return NaN;
    else
        return NaN;
}







//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?

function sweetTooth(totalNoOfSweets, sweetsConsumedByKaren, sweetsConsumedInNMeters, metersToTravel) {
    if ((typeof (totalNoOfSweets) == 'undefined') || (typeof (sweetsConsumedByKaren) == 'undefined') || (typeof (sweetsConsumedInNMeters) == 'undefined') || (typeof (metersToTravel) == 'undefined')) {
        return 'No sweets for Karen\'s friend'
    }
    if ((typeof (totalNoOfSweets) != 'number') || (typeof (sweetsConsumedByKaren) != 'number') || (typeof (sweetsConsumedInNMeters) != 'number') || (typeof (metersToTravel) != 'number')) {
        return 'No sweets for Karen\'s friend'
    }

    var sweetInTravel = metersToTravel * sweetsConsumedInNMeters;

    var res = (totalNoOfSweets - (sweetsConsumedByKaren + sweetInTravel)) / 2
    if (res <= 0)
        return 0
    if (totalNoOfSweets == 0)
        return 0;
    else
        return res;
    return 0

}









//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.


function convertToCelsius(fahrenheit) {
    if (typeof (fahrenheit) == 'number')
        return 5 / 9 * (fahrenheit - 32);
    else
        return 'Technical Error!'
}






//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take
function aDifficultChoice(choice) {
    switch (choice) {
        case 1:
            return "Take her daughter to a doctor"
            break;
        case 2:
            return "Talk to her husband about it"
            break;
        case 3:
            return "Counsel her daughter herself"
            break;
        case 4:
            return "Lock her daughter in her room"
            break;
        case 'I give up':
            return "Refused to do anything for Karen"
            break;
        case undefined:
            return "Wasn't able to decide"
            break;
        case -1:
            return "Break down and give up all hope"
            break;

    }

}









//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy

function consoleKaren(strategies) {
    var temp = "",
        temp1 = ""
    for (var start = 0; start < strategies.length; start++) {
        temp += strategies[start]
    }
    return temp.length + (strategies.length - 1)
}