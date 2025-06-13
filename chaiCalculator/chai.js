function calculateChaiIngredients(){
    // Declaring variables to be used.
    let numbOfCupsInput, numbOfCups, water, milk, tea, sugar

    // Prompts user for number of cups and changes it to an integer.
    numbOfCupsInput = window.prompt(`Karibu! How many cups of Chai Bora would you like to make?`)
    numbOfCups = parseInt(numbOfCupsInput)

    water = 200
    milk = 50
    tea = 1
    sugar = 2

    if(!numbOfCups){
        // Error message.
        alert(`Please enter a valid value.`)
        calculateChaiIngredients()
    }else{
        // Success message.
        water *= numbOfCups
        milk *= numbOfCups
        tea *= numbOfCups
        sugar *= numbOfCups
        alert(`To make ${numbOfCups} cups of Kenyan Chai, you will need:
            Water: ${water}ml,
            Milk: ${milk}ml
            Tea Leaves (Majani): ${tea} tablespoons
            Sugar (Sukari): ${sugar} teaspoons.
            
            Enjoy your Chai Bora!`)
    }
}

calculateChaiIngredients()
