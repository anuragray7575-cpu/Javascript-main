let buttons = document.querySelectorAll('button')
   let body = document.querySelector('body')
   buttons.forEach((btn)=>{
        console.log(btn);
        btn.addEventListener('click',(e)=>{
            // console.log(e);
            // console.log(e.target);
            if (e.target.id==='ca8c93') {
                body.style.backgroundColor = "#ca8c93";
            }
            if (e.target.id==='5bb189') {
                body.style.backgroundColor = "#5bb189";
            }
            if (e.target.id==='6e97b6') {
                body.style.backgroundColor = "#6e97b6";
            }
            if (e.target.id==='cbbd6d') {
                body.style.backgroundColor = "#cbbd6d";
            }
            
            
        })
        
   });