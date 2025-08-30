document.addEventListener('DOMContentLoaded',()=>{
    
   let activeCarousal = null; 
   const scroll=330;
   let dotNo = 0;
   let cards = 0;
   let scrollPos = 0;
   let scrolledCards = 0; document.querySelectorAll('.carousalContainer').forEach(targetCarousal =>{
      
    
     const left = targetCarousal.querySelector('.left');
     const right = targetCarousal.querySelector('.right');
     const carousal = targetCarousal.querySelector('.carousal');
     
     cards = carousal.querySelectorAll('.card').length;
     const dots = targetCarousal.querySelector('.cardCount').querySelectorAll('.dots');

     left.addEventListener('click', ()=>{
           carousal.scrollBy({left:-scroll, behavior:"smooth"})          
           if(dotNo>0)
           {
              dots.forEach(item=>{
                  item.classList.remove('glow');
              });
              dots[--dotNo].classList.add('glow');
           }
     });


     right.addEventListener('click', ()=>{
          carousal.scrollBy({left:scroll, behavior:"smooth"})
           if(dotNo<cards-1){
             dots.forEach(item=>{
                  item.classList.remove('glow');
              });
              dots[++dotNo].classList.add('glow');
           }
               
     });
      carousal.addEventListener('scroll', ()=>{
          scrollPos = carousal.scrollLeft;
          scrolledCards = Math.round(scrollPos / scroll);
          if(scrolledCards >=0){
              dots.forEach(item=>{
                  item.classList.remove('glow');
              });
              dots[scrolledCards].classList.add('glow');
          }
     });
     
   });
   
   const questions = document.querySelectorAll('#faqs .answer-section .sections');
   questions.forEach(question =>{
       question.addEventListener('click', ()=>{
                  question.querySelector('p').classList.toggle('answer');
       });
   });
});
function pageChange(pageId){

   const pageIds = document.querySelector('main').querySelectorAll('[id]');
   
   pageIds.forEach(target =>{
   target.style.display="none";
   });
   document.getElementById(pageId).style.display="flex";
}

