let promiseOne = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Displayed text is here");
        resolve({'name': 'Anurag', 'roll': 56});
    },2000)
})
 
promiseOne.then((data)=>{
    console.log(data);
    console.log(data.roll);
})
.catch((error)=>{
    console.log(error);
    
})
.finally(()=>{
    console.log("Promise Excecuted");
    
})