var ages = [20, 25, 19, 32]

var subs_status = [true, false, false, true]




for(var index = 0; index < 4; index++) {
    var age = ages[index];
    var is_subscribed = subs_status[index];


    if (age < 18 && is_subscribed == false) {
    console.log(age + " is too youg and you are not subscribed");
    }

    else if(age >= 18 && is_subscribed == false) {
    console.log(age + " is permitted but you are not subscribed");
    }

    else if(age < 18 && is_subscribed == true) {
    console.log(age + " is too young but you are subscribed");
    }

    else {
    console.log(age + " is the correct age and you are subscribed");
    }
}