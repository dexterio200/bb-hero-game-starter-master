// Create hero
const hero = {
    "name": "Zelda",
    "heroic": true,
    "inventory": [],
    "health": 10,
    "weapon": {
        "type": "sword",
        "damage": 2
    }
}

// Create function to restore hero's health
function rest (hero) {
    // Alert if hero is already at full health
    if (hero.health == 10) {
        alert("Your hero is already at full health!")
        return null
    }

    // Restore hero's health
    hero.health = 10
    return hero
}

// Create function to pick up item
function pickUpItem (hero, weapon) {
    // Add weapon to inventory array
    hero.inventory.push(weapon)
}

// Create function to equip weapon
function equipWeapon (hero) {
    // If the inventory is empty, do nothing
    if (!hero.inventory[0]) {
        return null
    }

    // Reassign weapon property to the first element of the inventory array
    hero.weapon = hero.inventory[0]
}
