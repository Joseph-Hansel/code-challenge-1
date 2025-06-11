function calculateBodaFare(){
    let  distanceInKm, distanceInKmInput,baseFare, chargePerKm, totalFare
    distanceInKmInput = window.prompt(`Unafika wapi Mkubwa? Kilometer ngapi?:`)
    distanceInKm = parseInt(distanceInKmInput)
    baseFare = 50
    chargePerKm = 15
    totalFare = baseFare + distanceInKm * chargePerKm
    if(!distanceInKm){
        console.log(`Please enter a valid value`)
        calculateBodaFare()
    }else{
        console.log(`Kama ni ${distanceInKm}km,
            Kukalia pikipiki ni: KES${baseFare}
            Kubebwa kilomita ${distanceInKm}: KES${totalFare - baseFare}
            Total: KES${totalFare}
            
            
            Panda Pikipiki!`)
    }
}