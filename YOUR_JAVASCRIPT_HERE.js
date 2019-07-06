// Create hero object
const hero = {
    "name": "Zelda",
    "heroic": true,
    "inventory": [],
    "health": 10,
    "weapon": {
        "type": "Sword",
        "damage": 2
    }
}

const enemy = {
    "name": "Red",
    "health": 10,
    "weapon": {
        "type": "Claw",
        "damage": 2
    }
}

// Restore hero's health
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

// Pick up item
function pickUpItem (hero, weapon) {
    // Add weapon to inventory array
    hero.inventory.push(weapon)
}

// Equip weapon
function equipWeapon (hero) {
    // If the inventory is empty, do nothing
    if (!hero.inventory[0]) {
        return null
    }

    // Reassign weapon property to the first element of the inventory array
    hero.weapon = hero.inventory[0]
}

// Create new hero
function createHero (name, weaponType) {
    // Gather data    
    const inputName = document.getElementById("heroName")
    name = inputName.value
    const inputWeapon = document.getElementById("heroWeapon")
    weaponType = inputWeapon.value

    if (!name) {
        alert("Please enter your name")
        return false
    }

    // Clone hero 
    newHero = JSON.parse(JSON.stringify(hero))
    
    // Assign new hero's name
    newHero.name = name
    newHero.weapon.type = weaponType

    // Update damage
    if (newHero.weapon.type == "Bow") {
        newHero.weapon.damage = 1
    }

    if (newHero.weapon.type == "Gun") {
        newHero.weapon.damage = 3
    }

    //Display info
    displayHero()
    displayHeroStats(newHero)
    displayEnemy()
    displayEnemyStats(enemy)
    displayAction()
}

// Display hero stats
function displayHeroStats (hero) {
    // Empty field
    document.getElementById("heroStats").innerHTML = null
    
    // Create elements
    const name = document.createElement("p")
    const health = document.createElement("p")
    const weaponType = document.createElement("p")
    const weaponDamage = document.createElement("p")

    // Adjust elements
    name.innerHTML = "Name: " + hero.name
    health.innerHTML = "Health: " + hero.health
    weaponType.innerHTML = "Weapon Type: " + hero.weapon.type
    weaponDamage.innerHTML = "Weapon Damage: "+ hero.weapon.damage

    // Display elements
    const heroStats = document.getElementById("heroStats")
    heroStats.appendChild(name)
    heroStats.appendChild(health)
    heroStats.appendChild(weaponType)
    heroStats.appendChild(weaponDamage)
}

// Display hero
function displayHero () {
    // Empty field
    const heroImage = document.getElementById("heroImage")
    heroImage.innerHTML = null
    
    // Create elements
    const img = document.createElement("img")
    
    // Adjust elements
    img.src = "https://media1.tenor.com/images/d79dbb3d2f70aa3b6e488c8c4bbdd36e/tenor.gif?itemid=5780130"
    img.alt = "Hero"

    // Display elements
    heroImage.appendChild(img)
}

// Display enemy
function displayEnemy() {
    // Empty field
    const enemyImage = document.getElementById("enemyImage")
    enemyImage.innerHTML = null
    
    // Create elements
    const img = document.createElement("img")
    
    // Adjust elements
    img.src = "https://static.skillshare.com/uploads/project/9a7e0522fdef08e3e684c48aeb8b5943/eed07ee4"
    img.alt = "Enemy"

    // Display elements
    enemyImage.appendChild(img)
}

// Display enemy stats
function displayEnemyStats (enemy) {
    // Empty field
    document.getElementById("enemyStats").innerHTML = null
    
    // Create elements
    const name = document.createElement("p")
    const health = document.createElement("p")
    const weaponType = document.createElement("p")
    const weaponDamage = document.createElement("p")

    // Adjust elements
    name.innerHTML = "Name: " + enemy.name
    health.innerHTML = "Health: " + enemy.health
    weaponType.innerHTML = "Weapon Type: " + enemy.weapon.type
    weaponDamage.innerHTML = "Weapon Damage: "+ enemy.weapon.damage

    // Display elements
    const enemyStats = document.getElementById("enemyStats")
    enemyStats.appendChild(name)
    enemyStats.appendChild(health)
    enemyStats.appendChild(weaponType)
    enemyStats.appendChild(weaponDamage)
}

// Display action button
function displayAction () {

    // Empty field
    const heroAction = document.getElementById("heroAction")
    const enemyAction = document.getElementById("enemyAction")
    
    // Create elements
    const button1 = document.createElement("button")
    const button2 = document.createElement("button")
    
    // Adjust elements
    button1.innerHTML = "Attack!"
    // button1.onclick = attackEnemy(hero, enemy)
    button2.innerHTML = "Grwll!"
    // button2.onclick = attackHero(hero, enemy)

    // Display elements
    heroAction.appendChild(button1)
    enemyAction.appendChild(button2)
}

function attackEnemy(hero, enemy) {
    enemy.health = enemy.health - hero.weapon.damage
    displayEnemyStats(enemy)
}

function attackHero(hero, enemy) {
    hero.health = hero.health - enemy.weapon.damage
    displayHeroStats(hero)
}