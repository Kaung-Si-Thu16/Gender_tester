function test() {
    let name = document.querySelector("#checkbox").value;

    let gender = document.querySelector("input[name=gender]:checked").value;

    let likes = document.querySelector("input[name=likes]:checked").value;



    if(name == ""){
        return alert("Enter your name")
    }

    // Gender = male
    if(gender == "male" && likes == "men"){
        return alert(name + ", you're screwed.");
    }
    else if(gender == "male" && likes == "women"){
        return alert(name + ", good for you!");
    }
    else if(gender == "male" && likes == "both"){
        return alert(name + ", you're a pervert!");
    }
    else if(gender == "male" && likes == "animals"){
        return alert(name + ", you have serious problems");
    }
    else if(gender == "male" && likes == "pans"){
        return alert(name + ", you're pansexual. (Go see a doctor)");
    }

    // Gender = female
    if(gender == "female" && likes == "men"){
        return alert(name + ", you're normal. (And that's rare.)");
    }
    else if(gender == "female" && likes == "women"){
        return alert(name + ", oh no! You're one of these crazy lesbians.");
    }
    else if(gender == "female" && likes == "both"){
        return alert(name + ", you're a naughty girl.");
    }
    else if(gender == "female" && likes == "animals"){
        return alert(name + ", what is wrong with you?!");
    }
    else if(gender == "female" && likes == "pans"){
        return alert(name + ", you're weird!");
    }

    // Gay
    if(gender == "gay" && likes == document.querySelector("input[name=likes]:checked").value){
        return alert(name + ", why? why? why are you gay?!");
    }


}

