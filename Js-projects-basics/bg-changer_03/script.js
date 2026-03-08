let buttons = document.querySelectorAll('button')
   let body = document.querySelector('body')
   buttons.forEach((btn)=>{
        console.log(btn);
        btn.addEventListener('click',(e)=>{
            // console.log(e);
            // console.log(e.target);
            if (e.target.id==='FADADD') {
                body.style.backgroundColor = "#FADADD";
            }
            if (e.target.id==='C1E1C1') {
                body.style.backgroundColor = "#C1E1C1";
            }
            
            if (e.target.id==='CFE8FF') {
                body.style.backgroundColor = "#CFE8FF";
            }
            
            
        })
        
   });