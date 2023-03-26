// learning asyncJS features from free codecamp

let stocks = {
    fruit : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
}

// let order = (f_name, call_prod)=>{
//     //console.log("order recieved");
//     setTimeout(()=>{
//         console.log(stocks.fruit[f_name]+" was selected");
//     },1000)
//     call_prod(f_name);
// }

// let production = (f_name) =>{
//     setTimeout(()=>{
//         console.log("production started");
//         setTimeout(()=>{
//             console.log(`${stocks.fruit[f_name]} has been chopped`);
//             setTimeout(()=>{
//                 console.log(`adding water and ice..`);
//                 setTimeout(()=>{
//                     console.log(`stating the machine..`);
//                     setTimeout(()=>{
//                         console.log(`selected ${stocks.holder[0]} ...`);
//                         setTimeout(()=>{
//                             console.log(`selected ${stocks.toppings[0]} ...`);
//                             setTimeout(()=>{
//                                 console.log(`Serving Delicious ${stocks.fruit[f_name]} ice cream :)`);
//                             },2000)
//                         },3000)
//                     },2000)
//                 },1000)
//             },1000)
//         },2000)
//     },3000)
// }

// order(1,production);

// the above mentioned code shows exactly the problem with the callbacks
// it's known as the pyramid of doom or callback hell
// and makes the code structure grow horizontally and makes it unmanagable

// to solve this issue we use something known as promises in javascript

// call backs form relationships eg => parent -> child -> grand child -> grand grand child .. and so on
// where as promises work like instructions eg => 1st do this then do that then do that and so on...

let is_shop_open = true;

// let order = (time, work) =>{
    

//     return new Promise((resolve, reject)=>{
        
//         if(is_shop_open){
//             setTimeout(()=>{
//                 resolve(work())
//             },time)
//         }else{
//             reject(console.log("shop is close rnw"))
//         }
//     })
// }

// order(2000, ()=>{
//     console.log(`${stocks.fruit[1]} is selected`)
// })
// .then(()=>{
//     return order(2000,()=>console.log(`production has started...`))
// })
// .then(()=>{
//     return order(2000,()=>console.log(`preparing your ice cream..`))
// })
// .catch(()=>{
//     console.log("Not serving rnw...");
// })
// .finally(()=>{
//     console.log("please allow us to serve you next time :)");
// })


// now let's see async / await

// async function order (){
//     try{
//         await abc;
//     }
//     catch(err){
//         console.log("abc doesn't exists",err);
//     }

//     finally{
//         console.log("finally hit");
//     }
// }

// order();

let toppings_choice = ()=>{

    return new Promise((resolve, reject)=>{

        setTimeout(() => {
            resolve(()=>console.log("which topping would you like?"))
        }, 3000);
    })
}

async function kitchen(){
    console.log("a");
    console.log("b");
    console.log("c");
    await toppings_choice()
    console.log("d");
    console.log("e");
}


kitchen()
console.log("task 1 ");
console.log("task 2 ");
console.log("task 3 ");