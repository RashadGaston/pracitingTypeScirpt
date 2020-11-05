let myName = "Rashad Gaston"
console.log ("Name: " + myName.toUpperCase())

let career=["web developer","student"]
console.log ("Career: " + career[0] + " " + career[1])

let myDescription= "My name is Rashad and I like computers";
console.log ("Description: " + myDescription)

let myExperience= ["Math", "Chemistry", "Physics", "Biology","Geology",
"Undergraduate at the univerty of Alabama"]
console.log ("Previous Experience: " + myExperience[0] + " " + myExperience[1] + " " + myExperience[2]+ " " + myExperience[3]+ " " +myExperience[4]+ " " +myExperience[5])

let interests= ["Greek Gods movies","hiking","traveling","white water rafting"]

for (let i = 0; i < interests.length; i++) {
    console.log ("Interests: " + interests[i]);
}
 
let company string[]= ["Peakcampus","Avenue Pub","Red mountion ParK"]
let title string[]= ["Leasing Consultant","kitchen staff","zip line Guide"]
let duties string[]= ["marketing and filing","cooking","helping others on zipline"]

function displayPosition(company,title,duties){
    console.log (company.toUpperCase(),title,duties)
}

for (let i= 0; i < company.length; i++) {
    displayPosition (company[i],title[i],duties[i])  
}

function displaySkill(skill, isCool) {
    if(isCool === true) {
        console.log("BAM: " + skill);
    } else {
        console.log(skill);
    }
}
let myskills string[] = [
    {
        skill: "Revit",
        isCool: true
    },
    {
        skill: "Auto-CAD",
        isCool: false
    },
    {
        skill: "SolidWord",
        isCool: true
    },
    {
        skill: "HTML",
        isCool: true
    },
    {
        skill: "CSS",
        isCool: false
    },
    {
        skill: "JavaScript",
        isCool: false
    },

  // " ","SolidWord ", "HTML","CSS","JavaScript"
]


//for (let i = 0; i < myskills.length; i++) {
  //console.log("skills:" + myskills[i]);
 //}

    

