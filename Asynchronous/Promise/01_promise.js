// Method_1
// let promiseOne = new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         console.log("Async task is done.");
//         resolve()

//     },2000)
// })

// promiseOne
// .then(()=>{
//     console.log("Promise is consumed.");

// })

//Method_2
//  new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         console.log("Async task is done.");
//         resolve({'Name': "Anurag",'Id':1234})

//     },2000)
// })
// .then((data)=>{
//     console.log("Promise is consumed.");
//     console.log(data);
//     console.log(data.Id);



// })

// Method_3
new Promise((resolve, reject) => {

    setTimeout(() => {

        let error = true;
        if (!error) {
            console.log("Async task is done.");
            resolve({ 'Name': "Anurag", 'Id': 1234 })
        } else {
            reject("Something went wrong!")

        }


    }, 2000)
})
.then((data) => {
        console.log("Promise is consumed.");
        console.log(data);
        console.log(data.Id);



    })
.catch((error)=>{
    console.log("Promise has been rejected !");

    console.log(error);
    
})