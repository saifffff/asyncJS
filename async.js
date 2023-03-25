// learning asyncJS features from free codecamp

let stocks = {
    fruit : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
}

let order = (f_name, call_prod)=>{
    //console.log("order recieved");
    setTimeout(()=>{
        console.log(stocks.fruit[f_name]+" was selected");
    },1000)
    call_prod(f_name);
}

let production = (f_name) =>{
    setTimeout(()=>{
        console.log("production started");
        setTimeout(()=>{
            console.log(`${stocks.fruit[f_name]} has been chopped`);
            setTimeout(()=>{
                console.log(`adding water and ice..`);
                setTimeout(()=>{
                    console.log(`stating the machine..`);
                    setTimeout(()=>{
                        console.log(`selected ${stocks.holder[0]} ...`);
                        setTimeout(()=>{
                            console.log(`selected ${stocks.toppings[0]} ...`);
                            setTimeout(()=>{
                                console.log(`Serving Delicious ${stocks.fruit[f_name]} ice cream :)`);
                            },2000)
                        },3000)
                    },2000)
                },1000)
            },1000)
        },2000)
    },3000)
}

order(1,production);