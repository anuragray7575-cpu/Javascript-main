const requesrUrl = 'https://randomuser.me/api/'
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requesrUrl)
    xhr.onreadystatechange = function(){
        console.log(xhr.readyState)
        console.log(xhr.status);
        
       
        if(xhr.readyState === 4){
            const data = JSON.parse( this.responseText)
            console.log(typeof data);
            console.log(data);
            console.log(data.info)
        }
    }

   
    xhr.send()