

function Armor(name, skills, defense, resist, slots) {
    this.name = name;
    this.skills = [skills];
    this.defense = defense;
    this.resist = [resist];
    this.slots = slots;
}
// HR Kamura 
let kamuraHelm = new Armor
("Kamura Head Scarf S", 
["Divine Blessing x1", "Resuscitate x1"], 
30,
[2, 0, 0, 0, 0],
"single one slot")

let kamuraBody = new Armor("Kamura Garb S",
["Wirebug Whisperer x2", "Wall Runner x1", "Critical Eye x1"],
30,
[2, 0, 0, 0, 0],
"single one slot")

let kamuraBrace = new Armor("Kamura Braces S",
["Critical Eye x2", "Heroics x1"],
30,
[2, 0, 0, 0, 0],
"single two slot")

let kamuraSkirt = new Armor("Kamura Obi S", 
["Critical Eye x1", "Wirebug Whisperer x1"], 
30,
[2, 0, 0, 0, 0],
"double one slot")

let kaumraLegs = new Armor("Kamura Leggings S",
["Wall Runner x2", "Resuscitate x1"], 
30,
[2, 0, 0, 0, 0],
"single one slot")

// HR Leather
let leatherHelm = Armor("Leather Headgear S", ["Geologist x1", "Hunger Resistance x1"])
let leatherBody = Armor("Leather Vest S", ["Botanist x1"])
let leatherBrace = Armor("Leather Gloves S", ["Geologist x1", "Special Ammo Boost x1"])
let leatherSkirt = Armor("Leather Belt S", ["Recovery Up x1", "Hunger Resistance x2"])
let leatherLegs = Armor("Leather Pants S", ["Geologist x1"])

// HR Chainmail
let chainHelm = Armor("Chainmail Headgear S", ["Botanist x1", "Defense Boost x1"])
let chainBody = Armor("Chainmail Vest S", ["Defense Boost x1", "Flinch Free x2"])
let chainBrace = Armor("Chainmail Gloves S", ["Botanist x1", "Defense Boost x1"])
let chainSkirt = Armor("Chainmail Belt S", ["Defense Boost x1", "Guard x1"])
let chainLegs = Armor("Chainmail Pants S", ["Botanist x1", "Stamina Surge x1"])
// all objects should be sorted by what class of armor they are//


// if i set the starting text for each block in the grid to be an empty str, then have the functions change those strings on a for loop search into an if statement match, maybe that would work? EX:

// updated idea: we do a function for each stat, and set them to run on the button press. Each function displays a different stat so they can each go into the proper text box- the biggest challenge will be sperating the array, but there i can just call it as obj.resists[0] for fire or whahtever

function displayName(obj) {
    return obj.name;
}

function display_defense(obj) {
    let armor_defense = obj.defense;
    return armor_defense;
}

function display_skills(obj) {
    let armor_skills = obj.skills;
    return armor_skills.join(" ");
    
}

function display_resist_fire(obj) {
    let armor_resist = obj.resist[0][0];
    return armor_resist;  
}

function display_resist_water(obj) {
    let armor_resist = obj.resist[0][1];
    return armor_resist;  
}

function display_resist_lightning(obj) {
    let armor_resist = obj.resist[0][2];
    return armor_resist;  
}

function display_resist_ice(obj) {
    let armor_resist = obj.resist[0][3];
    return armor_resist;  
}

function display_resist_dragon(obj) {
    let armor_resist = obj.resist[0][4];
    return armor_resist;  
}

function display_slots(obj) {
    return obj.slots;
}

function getHelmet() {
    selectElement = document.querySelector('#helmets');
    output = selectElement.value;
    // this returning as a str is the problem
    return output;
    }
    getHelmet()
function helmet(){
    document.getElementById("helmName").innerHTML = displayName(getHelmet());
}
