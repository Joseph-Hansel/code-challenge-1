// The function that calculates the fare.
function calculateBodaFare(){
    // Declareing variables to be used.
    let  distanceInKm, distanceInKmInput,baseFare, chargePerKm, totalFare
    // Prompting the user to enter distance in kilometres and changing the input into an integer.
    distanceInKmInput = window.prompt(`Unafika wapi Mkubwa? Kilometer ngapi?:`)
    distanceInKm = parseInt(distanceInKmInput)

    baseFare = 50
    chargePerKm = 15
    // Total fare calculation.
    totalFare = baseFare + distanceInKm * chargePerKm

    if(!distanceInKm){
        // Error message.
        console.log(`Please enter a valid value`)
        calculateBodaFare()
    }else{
        // Success message.
        console.log(`Kama ni ${distanceInKm}km,
            Kukalia pikipiki ni: KES${baseFare}
            Kubebwa kilomita ${distanceInKm}: KES${totalFare - baseFare}
            Total: KES${totalFare}
            
            
            Panda Pikipiki!`)
    }
}