let btnDaliy = document.getElementById('btn-daily');
let btnWeekly = document.getElementById('btn-weekly');
let btnMonthly = document.getElementById('btn-monthly');
let btnText = document.querySelectorAll('.text p')
let selfCur = document.querySelector('.self-cur-hr span')
let selfPre = document.querySelector('.self-pre-hr span')
let workCur = document.querySelector('.work-cur-hr span')
let workPre = document.querySelector('.work-pre-hr span')
let studyCur = document.querySelector('.study-cur-hr span')
let studyPre = document.querySelector('.study-pre-hr span')
let playCur = document.querySelector('.play-cur-hr span')
let playPre = document.querySelector('.play-pre-hr span')
let socialCur = document.querySelector('.social-cur-hr span')
let socialPre = document.querySelector('.social-pre-hr span')
let excCur= document.querySelector('.exc-cur-hr span')
let excPre= document.querySelector('.exc-pre-hr span')

  btnDaliy.addEventListener('click', start, ()=>{
    console.log('yes')
    if (btnDaliy) {
      btnDaliy.style.color = "white"
      btnMonthly.style.color ='rgb(201, 201, 201)'
      btnWeekly.style.color ='rgb(201, 201, 201)'
      console.log('yse')
    }
  })
  btnWeekly.addEventListener('click', start2, )
  btnMonthly.addEventListener('click', start3)

  console.log(btnMonthly)

 




async function start() {
  if (btnDaliy.style.color != 'white') {
    console.log('yes');
    btnDaliy.style.color = 'white'
    btnMonthly.style.color = 'hsl(235, 45%, 61%)'
    btnWeekly.style.color = 'hsl(235, 45%, 61%)'
    
  }
  const url =  "data.json";
  const response = await fetch(url);
  const data =  await response.json();
 
  if (this.innerHTML == "Daily") {
   
    data.forEach(item => {
      if(item.title == "Work") {
        if (item.timeframes.daily.current > 1) {
          workCur.innerHTML = item.timeframes.daily.current + 'hrs'
        } else {
          workCur.innerHTML = item.timeframes.daily.current + 'hr'

        }
        if (item.timeframes.daily.previous != 1) {
          workPre.innerHTML = item.timeframes.daily.previous + 'hr'
        } else {
          workPre.innerHTML = item.timeframes.daily.previous + 'hrs'
        }
        

      } else {
        
        
      }
      if(item.title == "Play") {

        if(item.timeframes.daily.current != 1) {
          playCur.innerHTML = item.timeframes.daily.current + 'hrs'
        } else {
          playCur.innerHTML = item.timeframes.daily.current + 'hr'
        }
      
        if(item.timeframes.daily.previous != 1) {
          playPre.innerHTML = item.timeframes.daily.previous + 'hrs'
        } else {
          playPre.innerHTML = item.timeframes.daily.previous + 'hr'
        }
        
       

      } else {
        
        
      } 
     
      if(item.title == "Study") {

        if(item.timeframes.daily.current != 1) {
          studyCur.innerHTML = item.timeframes.daily.current + 'hrs'
        } else {
          studyCur.innerHTML = item.timeframes.daily.current + 'hr'
        }
        if(item.timeframes.daily.current != 1) {
          studyPre.innerHTML = item.timeframes.daily.previous + 'hrs'
        } else {
          studyPre.innerHTML = item.timeframes.daily.previous + 'hr'
        }
  

      } else {
        
        
      } 
      if(item.title == "Exercise") {

        if(item.timeframes.daily.current != 1) {
          excCur.innerHTML = item.timeframes.daily.current + 'hrs'
        } else {
          excCur.innerHTML = item.timeframes.daily.current + 'hr'
        }
        if(item.timeframes.daily.current != 1) {
          excPre.innerHTML = item.timeframes.daily.previous + 'hrs'
        } else {
          excPre.innerHTML = item.timeframes.daily.previous + 'hr'
        }
  

      } else {
        
        
      } 
      if(item.title == "Social") {

        if(item.timeframes.daily.current != 1) {
          socialCur.innerHTML = item.timeframes.daily.current + 'hrs'
        } else {
          socialCur.innerHTML = item.timeframes.daily.current + 'hr'
        }
        if(item.timeframes.daily.current != 1) {
          socialPre.innerHTML = item.timeframes.daily.previous + 'hrs'
        } else {
          socialPre.innerHTML = item.timeframes.daily.previous + 'hr'
        }
  

      } else {
        
        
      } 
      if(item.title == "Self Care") {

        if(item.timeframes.daily.current != 1) {
          selfCur.innerHTML = item.timeframes.daily.current + 'hrs'
        } else {
          selfCur.innerHTML = item.timeframes.daily.current + 'hr'
        }
        if(item.timeframes.daily.current != 1) {
          selfPre.innerHTML = item.timeframes.daily.previous + 'hrs'
        } else {
          selfPre.innerHTML = item.timeframes.daily.previous + 'hr'
        }
  

      } else {
        
        
      } 


    });
  } else {
    
    
  }
}


// Weekly Data

async function start2(){
  if (btnWeekly.style.color != 'white') {
    console.log('yes');
    btnWeekly.style.color = 'white'
    btnMonthly.style.color = 'hsl(235, 45%, 61%)'
    btnDaliy.style.color = 'hsl(235, 45%, 61%)'
    
  }
  const url =  "data.json";
  const response = await fetch(url);
  const data =  await response.json();
 
  if (this.innerHTML == "Weekly") {
   
    data.forEach(item2 => {
      if(item2.title == "Work") {
        if (item2.timeframes.weekly.current != 1) {
          workCur.innerHTML = item2.timeframes.weekly.current + 'hrs'
        } else {
          workCur.innerHTML = item2.timeframes.weekly.current + 'hr'

        }
        if (item2.timeframes.weekly.previous != 1) {
          workPre.innerHTML = item2.timeframes.weekly.previous + 'hrs'
        } else {
          workPre.innerHTML = item2.timeframes.weekly.previous + 'hr'
        }
        

      } else {
        
        
      }
    
        
      if(item2.title == "Play") {

        if(item2.timeframes.weekly.current != 1) {
          playCur.innerHTML = item2.timeframes.weekly.current + 'hrs'
        } else {
          playCur.innerHTML = item2.timeframes.weekly.current + 'hr'
        }
      
        if(item2.timeframes.weekly.previous != 1) {
          playPre.innerHTML = item2.timeframes.weekly.previous + 'hrs'
        } else {
          playPre.innerHTML = item2.timeframes.weekly.previous + 'hrs'
        }
        
       

      } else {
        
        
      } 
      if(item2.title == "Study") {

        if(item2.timeframes.weekly.current != 1) {
          studyCur.innerHTML = item2.timeframes.weekly.current + 'hrs'
        } else {
          studyCur.innerHTML = item2.timeframes.weekly.current + 'hr'
        }
        if(item2.timeframes.weekly.previous != 1) {
          playPre.innerHTML = item2.timeframes.weekly.previous + 'hrs'
        } else {
          studyPre.innerHTML = item2.timeframes.weekly.previous + 'hr'
        }
  

      } else {
        
        
      } 
      if(item2.title == "Exercise") {

        if(item2.timeframes.weekly.current != 1) {
          excCur.innerHTML = item2.timeframes.weekly.current + 'hrs'
        } else {
          excCur.innerHTML = item2.timeframes.weekly.current + 'hr'
        }
        if(item2.timeframes.weekly.previous != 1) {
          excPre.innerHTML = item2.timeframes.weekly.previous + 'hrs'
        } else {
          excPre.innerHTML = item2.timeframes.weekly.previous + 'hr'
        }
  

      } else {
        
        
      } 
      if(item2.title == "Social") {

        if(item2.timeframes.weekly.current != 1) {
          socialCur.innerHTML = item2.timeframes.weekly.current + 'hrs'
        } else {
          socialCur.innerHTML = item2.timeframes.weekly.current + 'hr'
        }
        if(item2.timeframes.weekly.previous != 1) {
          socialPre.innerHTML = item2.timeframes.weekly.previous + 'hrs'
        } else {
          socialPre.innerHTML = item2.timeframes.weekly.previous + 'hr'
        }
  

      } else {
        
        
      } 
      if(item2.title == "Self Care") {

        if(item2.timeframes.weekly.current != 1) {
          selfCur.innerHTML = item2.timeframes.weekly.current + 'hrs'
        } else {
          selfCur.innerHTML = item2.timeframes.weekly.current + 'hr'
        }
        if(item2.timeframes.weekly.previous != 1) {
          selfPre.innerHTML = item2.timeframes.weekly.previous + 'hrs'
        } else {
          selfPre.innerHTML = item2.timeframes.weekly.previous + 'hr'
        }
  

      } else {
        
        
      } 


    });
  } else {
    
    
  }

}

// Monthly Data
async function start3(){
  if (btnMonthly.style.color != 'white') {
  
    btnMonthly.style.color = 'white'
    btnDaliy.style.color = 'hsl(235, 45%, 61%)'
    btnWeekly.style.color = 'hsl(235, 45%, 61%)'
    
  }
  const url =  "data.json";
  const response = await fetch(url);
  const data =  await response.json();
 
  if (this.innerHTML == "Monthly") {
   
    data.forEach(item3 => {
      if(item3.title == "Work") {
        if (item3.timeframes.monthly.current != 1) {
          workCur.innerHTML = item3.timeframes.monthly.current + 'hrs'
        } else {
          workCur.innerHTML = item3.timeframes.monthly.current + 'hr'

        }
        if (item3.timeframes.monthly.previous != 1) {
          workPre.innerHTML = item3.timeframes.monthly.previous + 'hrs'
        } else {
          workPre.innerHTML = item3.timeframes.monthly.previous + 'hr'
        }
        

      } else {
       
      }
    
        
      if(item3.title == "Play") {

        if(item3.timeframes.monthly.current != 1) {
          playCur.innerHTML = item3.timeframes.monthly.current + 'hrs'
        } else {
          playCur.innerHTML = item3.timeframes.monthly.current + 'hr'
        }
      
        if(item3.timeframes.monthly.previous != 1) {
          playPre.innerHTML = item3.timeframes.monthly.previous + 'hrs'
        } else {
          playPre.innerHTML = item3.timeframes.monthly.previous + 'hrs'
        }
        
       

      } else {
       
      } 
      if(item3.title == "Study") {

        if(item3.timeframes.monthly.current != 1) {
          studyCur.innerHTML = item3.timeframes.monthly.current + 'hrs'
        } else {
          studyCur.innerHTML = item3.timeframes.monthly.current + 'hr'
        }
        if(item3.timeframes.monthly.previous != 1) {
          playPre.innerHTML = item3.timeframes.monthly.previous + 'hrs'
        } else {
          studyPre.innerHTML = item3.timeframes.monthly.previous + 'hr'
        }
  

      } else {
       
      } 
      if(item3.title == "Exercise") {

        if(item3.timeframes.monthly.current != 1) {
          excCur.innerHTML = item3.timeframes.monthly.current + 'hrs'
        } else {
          excCur.innerHTML = item3.timeframes.monthly.current + 'hr'
        }
        if(item3.timeframes.monthly.previous != 1) {
          excPre.innerHTML = item3.timeframes.monthly.previous + 'hrs'
        } else {
          excPre.innerHTML = item3.timeframes.monthly.previous + 'hr'
        }
  

      } else {
       
      } 
      if(item3.title == "Social") {

        if(item3.timeframes.monthly.current != 1) {
          socialCur.innerHTML = item3.timeframes.monthly.current + 'hrs'
        } else {
          socialCur.innerHTML = item3.timeframes.monthly.current + 'hr'
        }
        if(item3.timeframes.monthly.previous != 1) {
          socialPre.innerHTML = item3.timeframes.monthly.previous + 'hrs'
        } else {
          socialPre.innerHTML = item3.timeframes.monthly.previous + 'hr'
        }
  

      } else {
       
      } 
      if(item3.title == "Self Care") {

        if(item3.timeframes.monthly.current != 1) {
          selfCur.innerHTML = item3.timeframes.monthly.current + 'hrs'
        } else {
          selfCur.innerHTML = item3.timeframes.monthly.current + 'hr'
        }
        if(item3.timeframes.monthly.previous != 1) {
          selfPre.innerHTML = item3.timeframes.monthly.previous + 'hrs'
        } else {
          selfPre.innerHTML = item3.timeframes.monthly.previous + 'hr'
        }
  

      } else {
       
      } 


    });
  } else {
    
    
  }

}
