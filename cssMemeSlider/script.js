

  const images = ['img1.jpg','img2.jpg', 'img3.jpg', 'img4.jpg'];  
  const texts = ["I'm the best of the best", "Keep going", "Good luck", "Success is coming"]
  let activeImage = 0;

 
  const  slide = document.querySelector('.slide');
  const slideText = document.querySelector('.slide__text');
  const paginationDots = document.querySelectorAll('.pagination__dot');

  const initSlider = (index)=> {  
    slide.classList.remove('visible');
    slideText.classList.remove('visible');
    slideText.innerHTML = '';
     const sliderContent = `   
            <img src="images/${images[index]}" alt="slider">
     `;

     setTimeout(()=>{  
        slide.innerHTML = sliderContent;
        slide.classList.add('visible');
        slideText.innerText = texts[index];
        slideText.classList.add('visible');
     }, 300);

  };

initSlider(activeImage);


paginationDots.forEach(dot=> {    
        dot.addEventListener('click', (e)=> {

        const dotElem = e.currentTarget;
        if(dotElem.classList.contains('active')) {  
           return;
        }
        const slideNum = dotElem.dataset.slide; 
        //  удаление атрибутов и класов      
        paginationDots.forEach((dot) => {   
            dot.removeAttribute('aria-current');
            dot.classList.remove('active');
        }); 

       // добавление нового слайда
        initSlider(slideNum); 
        dotElem.classList.add('active');
        dotElem.setAttribute('aria-current', 'page');
    });
});