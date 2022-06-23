

function Armor(name, skills, defense, resist, slots) {
    this.name = name;
    this.skills = skills;
    this.defense = defense;
    this.resist = resist;
    this.slots = slots;
}


console.log(Armor);

// HR Kamura 
let kamuraHelm = new Armor
("Kamura Head Scarf S", 
["Divine Blessing x1", "Resuscitate x1"], 
30,
[2, 0, 0, 0, 0],
"single one slot");

let kamuraBody = new Armor("Kamura Garb S",
["Wirebug Whisperer x2", "Wall Runner x1", "Critical Eye x1"],
30,
[2, 0, 0, 0, 0],
"single one slot");

let kamuraBrace = new Armor("Kamura Braces S",
["Critical Eye x2", "Heroics x1"],
30,
[2, 0, 0, 0, 0],
"single two slot");

let kamuraSkirt = new Armor("Kamura Obi S", 
["Critical Eye x1", "Wirebug Whisperer x1"], 
30,
[2, 0, 0, 0, 0],
"double one slot");

let kaumraLegs = new Armor("Kamura Leggings S",
["Wall Runner x2", "Resuscitate x1"], 
30,
[2, 0, 0, 0, 0],
"single one slot");

console.log(kamuraHelm);

// HR Leather
let leatherHelm = new Armor("Leather Headgear S", ["Geologist x1", "Hunger Resistance x1"])
let leatherBody = new Armor("Leather Vest S", ["Botanist x1"])
let leatherBrace = new Armor("Leather Gloves S", ["Geologist x1", "Special Ammo Boost x1"])
let leatherSkirt = new Armor("Leather Belt S", ["Recovery Up x1", "Hunger Resistance x2"])
let leatherLegs = new Armor("Leather Pants S", ["Geologist x1"])

// HR Chainmail
let chainHelm = new Armor("Chainmail Headgear S", ["Botanist x1", "Defense Boost x1"])
let chainBody = new Armor("Chainmail Vest S", ["Defense Boost x1", "Flinch Free x2"])
let chainBrace = new Armor("Chainmail Gloves S", ["Botanist x1", "Defense Boost x1"])
let chainSkirt = new Armor("Chainmail Belt S", ["Defense Boost x1", "Guard x1"])
let chainLegs = new Armor("Chainmail Pants S", ["Botanist x1", "Stamina Surge x1"])
// all objects should be sorted by what class of armor they are//


// if i set the starting text for each block in the grid to be an empty str, then have the functions change those strings on a for loop search into an if statement match, maybe that would work? EX:

// updated idea: we do a function for each stat, and set them to run on the button press. Each function displays a different stat so they can each go into the proper text box- the biggest challenge will be sperating the array, but there i can just call it as obj.resists[0] for fire or whahtever

function displayName(obj) {
    console.log(obj);
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
// so i think it was these two lines that fixed things, but i dont get how or why yet BUT IT WORKS BABEY lets go
let kHelm = document.querySelector('[value=kamuraHelm]');
    kHelm.onclick = function(){document.querySelector('helmName').innerHTML = "waffles"};

function getHelmet() {
    let kHelm = document.querySelector('[value=kamuraHelm]');
    kHelm.onclick = function(){document.querySelector('helmName').innerHTML = "waffles"};
    selectElement = document.querySelector('#helmets');
    output = selectElement.value;
    console.log(output);

    // What does the console.log do here? Or was that just checking variables to see how they worked?
    
    if (output == 'kamuraHelm') {
        console.log(kamuraHelm)
        return kamuraHelm
    }

    if (output == 'leatherHelm') {
        console.log(leatherHelm)
        return leatherHelm
    }

    if (output = 'chainHelm') {
        console.log(chainHelm)
        return chainHelm
    }

    else {
        console.log("butterfingers!!")
    }
}

function helmet(){
    document.getElementById("helmName").innerHTML = displayName(getHelmet());
}


let kBody = document.querySelector('[value=kamuraBody]');
kHelm.onclick = function(){document.querySelector('bodyName').innerHTML = "waffles"};

function getBody() {
    let kBody = document.querySelector('[value=kamuraBody]');
    kBody.onclick = function(){document.querySelector('bodyName').innerHTML = "waffles"};
    selectElement = document.querySelector('#body');
    output = selectElement.value;
    console.log(output);

    if (output == 'kamuraBody') {
        console.log(kamuraBody)
        return kamuraBody
        }
    if (output == 'leatherBody') {
        console.log(leatherBody)
        return leatherBody
    }
    if (output == 'chainBody'){
        console.log(chainBody)
        return chainBody
    }
}


function bodyGet(){
    document.getElementById("bodyName").innerHTML = displayName(getBody());
}

// Also, what if i combined some global variables + a loop to change them dependant on the inserted obj to make display a little simpler to write
// Test first with just one row
//  for loop can only access one obj at a time bc of the way variables work. This means youll need 5 for in functions, but theyll be near identical so its cool
// ALSO you can use .join to make your arrays into strings for printing :)
// might have to do the conversions and place into an array to access later somehow



function row1(obj) {
    for (prop in obj){
        let cell1 = obj.name;
        let cell2 = obj.defense;
        let cell3 = obj.skills.join(" ");
        let cell4 = obj.resist[0];
        let cell5 = obj.resist[1];
        let cell6 = obj.resist[2];
        let cell7 = obj.resist[3];
        let cell8 = obj.resist[4];
        let cell9 = obj.slots;
        
        document.getElementById("helmName").innerHTML = cell1;
        document.getElementById("helmPhys").innerHTML = cell2;
        document.getElementById("helmSlots").innerHTML = cell9;
        document.getElementById("helmFire").innerHTML = cell4;
        document.getElementById('helmWater').innerHTML = cell5;
        document.getElementById('helmLight').innerHTML = cell6;
        document.getElementById('helmIce').innerHTML = cell7;
        document.getElementById('helmDragon').innerHTML = cell8;
}       
}

