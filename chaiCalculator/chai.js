let numbOfCupsInput, numbOfCups, water, milk, tea, sugar
function calculateChaiIngredients(){

    numbOfCupsInput = window.prompt(`Karibu! How many cups of Chai Bora would you like to make?`)
    numbOfCups = parseInt(numbOfCupsInput)
    water = 200
    milk = 50
    tea = 1
    sugar = 2
    if(!numbOfCups){
        console.log(`Please enter a valid value.`)
        calculateChaiIngredients()
    }else{
        water *= water
        milk *= milk
        tea *= tea
        sugar *= sugar
        console.log(`To make ${numbOfCups} cups of Kenyan Chai, you will need:
            Water: ${water}ml,
            Milk: ${milk}ml
            Tea Leaves (Majani): ${tea} tablespoons
            Sugar (Sukari): ${sugar} teaspoons.
            
            Enjoy your Chai Bora!`)
    }
}
