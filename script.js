//Category hover
const categories = document.querySelectorAll('.body-container');
categories.forEach(category => category.addEventListener ('mouseover', background))
categories.forEach(category => category.addEventListener ('mouseout', reset))


function background (e) {
    if(e.target.classList.contains('current') || e.target.classList.contains('prev')) {
        
        e.target.parentElement.parentElement.parentElement.style.backgroundColor='hsl(0deg 0% 100% / 12%)';
        
    }
    e.target.parentElement.style.backgroundColor='hsl(0deg 0% 100% / 12%)'
    catDaily.forEach(cat => {
        cat.style.backgroundColor=''
    })
    catWeekly.forEach(cat => {
        cat.style.backgroundColor=''
    })
    catMonthly.forEach(cat => {
        cat.style.backgroundColor=''
    })
    //console.log(e.target); 
}
function reset (e) {
    if(e.target.classList.contains('current') || e.target.classList.contains('prev')) {
        e.target.parentElement.parentElement.parentElement.style.backgroundColor=''
        e.target.removeEventListener('mouseout', background);
    }
    e.target.parentElement.style.backgroundColor = '';
}
//Choose Interval
const interval = document.querySelector('.interval');
const daily = document.querySelector('.daily');
const weekly = document.querySelector('.weekly');
const monthly = document.querySelector('.monthly');
const catDaily = document.querySelectorAll('.cat-daily');
const catWeekly = document.querySelectorAll('.cat-weekly');
const catMonthly = document.querySelectorAll('.cat-monthly');
console.log(catDaily);
console.log(catWeekly);
daily.addEventListener('click', active);
weekly.addEventListener('click', active);
monthly.addEventListener('click', active);
function active (e) {
  
    if(e.target === daily) {
      
        catDaily.forEach(cat => {
          cat.classList.remove('display');
        })
        catWeekly.forEach(cat => {
          cat.classList.add('display');
        })
        catMonthly.forEach(cat => {
          cat.classList.add('display')
        })
    } else if (e.target === weekly) {
          catDaily.forEach(cat => {
            cat.classList.add('display');
          })
          catWeekly.forEach(cat => {
            cat.classList.remove('display');
          })
          catMonthly.forEach(cat => {
            cat.classList.add('display')
          })
    } else if (e.target === monthly) {
          catDaily.forEach(cat => {
            cat.classList.add('display');
          })
          catWeekly.forEach(cat => {
            cat.classList.add('display');
          })
          catMonthly.forEach(cat => {
            cat.classList.remove('display')
          })
    }
}


    
daily.addEventListener('click', activestate);
weekly.addEventListener('click', activestate);
monthly.addEventListener('click', activestate);
function activestate (e) {
    if (e.target === daily) {
        daily.style.color='#fff';
        weekly.style.color='';
        monthly.style.color='';
          
    } else if (e.target === weekly) {
        daily.style.color='';
        weekly.style.color='#fff';
        monthly.style.color='';

    } else if (e.target === monthly) {
        daily.style.color='';
        weekly.style.color='';
        monthly.style.color='#fff';
    }
}