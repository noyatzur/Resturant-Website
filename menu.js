function calculatePrice(select){
    const gram = parseInt(select.value);
    let price;

    switch(gram){
        case 200:
            price = 13;
            break;

        case 250:
            price = 16;
            break;

        case 300:
            price = 19;
            break;

        case 350:
            price = 22;
            break;

        default:
            price = 16; 
            break;
    }
    
    const divElement = document.querySelector('.hamburger');
    divElement.textContent = `hamburger.........................................${price}$`; 
}

function calculateIceCream(select){
    const gram = parseInt(select.value);
    let flavor;

    switch(gram){
        case 200:
            flavor = "strawberry";
            break;

        case 250:
            flavor = "chocolate";
            break;

        case 300:
            flavor = "vanilla";
            break;

        default:
            flavor = "strawberry"; 
            break;
    }
    
    const divElement = document.querySelector('.IceCream');
    divElement.textContent = `IceCream.........................................${flavor}`; 
}
