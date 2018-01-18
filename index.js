var person = {
    firstName: "chase",
    lastName: "mcguffie",
    career: "student",
    description: "cool guy",
    };

    function fullName() {
        console.log('Name: ' + person.firstName .toUpperCase() + " " + person.lastName .toUpperCase())
    };

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    let displayPosition = function(jobTitle, company, description){
        console.log(`*  ${jobTitle} at ${company}`)
        console.log(`- ${description} `)
    }

    let displaySkill = function(skill, iscool){
        if (iscool === true) {
            console.log("* Check it:", skill)
        } else {
            console.log("*", skill)
        }
    }

    /*
    for (item in person)
    {
        person[item] = capitalizeFirstLetter(person[item]);
    }*/



    //console.log(person);


fullName();
console.log("Career: " + capitalizeFirstLetter(person['career']));
console.log("Description: " + capitalizeFirstLetter(person['description']));
console.log("My interests: ")
console.log("* Fall TV (The best")
console.log("* Locomotives")
console.log("* Observing awkward situations")
console.log("* Film soundtracks")
console.log("My previous experience: ")
displayPosition("Math, Chemistry, Physics, Biology, and English tutor ", "Some School", "Tutored students in those areas.")
displayPosition("Undergraduate Teaching Assistant", "University of Georgia", "Helped grade assignments, answer questions, held lab hours, and held office hours for Java and C++ Computer Science classes.")
displayPosition("Lead Programmer for iBeacon Experiment", "Georgia Museum of Art", "Created native iOS virtual tour guide that used iBeacon technology to give information about a piece.")
console.log("My skills:")
displaySkill("Korean", false)
displaySkill("Super Smash Brothers", true)
displaySkill("Jumproping", false)
displaySkill("Typing", true)
