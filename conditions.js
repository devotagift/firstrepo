//condition statements
/*
if(expression){
    //code goes here
}
*/
const IG_MIN_AGE= 13;
let susan ={
    age:12
};
if(susan.age >= IG_MIN_AGE){
    console.log('congats you can join instagram')
}
//send exit message for age between 45-60
let oldiesAge = 45;
if(oldiesAge >=45 && oldiesAge <=60){
    console.log('you should leave instagram')
}
//or we can do it this way
const MIN_EXIT_AGE = 45;
const MAX_EXIT_AGE = 60;
if(MIN_EXIT_AGE >=45 && MAX_EXIT_AGE <=60){
    console.log('EXIT INSTAGRAM PLEASE')
}
// if else 
if(susan.age >= IG_MIN_AGE){
    console.log('congats you can join instagram')
} else{
    console.log ('you cannot join instagram yet!')
}
//else if
if(susan.age >= IG_MIN_AGE){
    console.log('congats you can join instagram')}
    else if(susan.age == IG_MIN_AGE-1){
        console.log('just one year to join intsgram!')}
        else if(susan.age == IG_MIN_AGE-2){
            console.log ('two more years to go please!')
        }
        else{
            console.log('please you are to young to join instragram')
        }
        //switch case condition
        switch (susan.age){
            case susan.age >=IG_MIN_AGE:
                console.log('congats you can join instagram')
                break;
                case susan.age == IG_MIN_AGE-1:
                    console.log('just one year to join intsgram!')
                    break;
                    case susan.age == IG_MIN_AGE-2:
                        console.log ('two more years to go please!')
                        break;
                        default:
                            console.log('please you are to young to join instragram')
        }
        // ternary operator, used when we have only two options YES or NO
        // (condition) ? truthy: falsely;
        let  ageGroup = ( susan.age >=18) ? "Adult": "Minor";

        
        const TEMP =20;
        if(TEMP>=20 && TEMP <=36){
            console.log('your temperature is normal, your are healthy')}
            else if(TEMP>=37 && TEMP <=40){
                console.log('your temperature is above the normal,visit your doctor soon')
            }
            else{
                console.log('your temperature is erratic')
            }



                        
                      
        }


    }
}
