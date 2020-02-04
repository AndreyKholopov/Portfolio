"use strict"

const category = document.querySelector('.header-menu');
const categoryItem = document.querySelectorAll('.category-item');

const homePage = document.querySelector('.header-top');
const aboutPage = document.querySelector('.about');
const portfolioPage = document.querySelector('.portfolio');
const contactPage = document.querySelector('.contact');
const headerPage = document.querySelector('.header');

const aboutSkills = document.querySelector('.about-skills');
const aboutSkillsCell = document.querySelectorAll('.about-skills__cell');

const setingsButton = document.querySelector('.setings-button');
const setingsWindow = document.querySelector('.setings-window');

const checkboxLang = document.querySelector('.setings-lang__check');
const contentEn = document.querySelectorAll('.content-EN');
const contentRu = document.querySelectorAll('.content-RU');

const checkboxLight = document.querySelector('.setings-light__check');
const body = document.body;

const headerTopInner = document.querySelector('.header-top__inner');
const headerInner = document.querySelector('.header-inner');
const aboutInner = document.querySelector('.about-inner');
const portfolioInner = document.querySelector('.portfolio-inner');
const contactInner = document.querySelector('.contact-inner');

const homePageStyle = getComputedStyle(homePage);
const aboutPageStyle = getComputedStyle(aboutPage);
const portfolioPageStyle = getComputedStyle(portfolioPage);
const contactPageStyle = getComputedStyle(contactPage);

const chooseCategory = (event) => {
   event.preventDefault();
   const target = event.target;

   if (target.classList.contains('category-item')) {
      categoryItem.forEach(item => item.classList.remove('active'));
      target.classList.add('active');
      displaySection(target.id);
   } else if (target.parentNode.classList.contains('category-item')) {
      categoryItem.forEach(item => item.classList.remove('active'));
      target.parentNode.classList.add('active');
      displaySection(target.parentNode.id);
   }
}

const chooseSkillCell = (event) => {
   event.preventDefault();
   const target = event.target;

   if (target.classList.contains('portfolo-cell__content')) {
      target.parentNode.classList.remove('active');
   } else if (target.parentNode.classList.contains('portfolo-cell__content')) {
      target.parentNode.parentNode.classList.remove('active');
   } else if (target.classList.contains('about-skills__cell')) {
      aboutSkillsCell.forEach(item => item.classList.remove('active'));
      target.classList.add('active');
   } else if (target.parentNode.classList.contains('about-skills__cell')) {
      aboutSkillsCell.forEach(item => item.classList.remove('active'));
      target.parentNode.classList.add('active');
   }
}

const openSetings = (event) => {
   event.preventDefault();
   const target = event.target;

   if (target.classList.contains('active')) {
      target.classList.remove('active');
      setingsWindow.style.transform = 'scaleX(0)';
   } else if (target.parentNode.classList.contains('active')) {
      target.parentNode.classList.remove('active');
      setingsWindow.style.transform = 'scaleX(0)';
   } else if (target.classList.contains('setings-button')) {
      target.classList.add('active');
      setingsWindow.style.transform = 'scaleX(1)';
   } else if (target.parentNode.classList.contains('setings-button')) {
      target.parentNode.classList.add('active');
      setingsWindow.style.transform = 'scaleX(1)';
   }
}

const displaySection = (item) => {
   switch(item) {
      case 'home':
         homePage.style.transform = 'scaleY(1)';

         headerPage.style.transform = 'translateY(0px)';

         aboutPage.style.transform = 'translateX(-2000px)';
         aboutPage.style.paddingBottom = '0px';
         aboutPage.style.marginTop = `-${aboutPageStyle.getPropertyValue("height")}`;
         
         portfolioPage.style.transform = 'translateX(-2000px)';
         portfolioPage.style.paddingBottom = '0px';
         portfolioPage.style.marginTop = `-${portfolioPageStyle.getPropertyValue("height")}`;
         
         contactPage.style.transform = 'translateX(-2000px)';
         contactPage.style.paddingBottom = '0px';
         contactPage.style.marginTop = `-${contactPageStyle.getPropertyValue("height")}`;
         
         break;

      case 'about':
         homePage.style.transform = 'scaleY(0)';

         headerPage.style.transform = `translateY(-${homePageStyle.getPropertyValue("height")})`;

         aboutPage.style.transform = 'translateX(0px)';
         aboutPage.style.paddingBottom = '100px';
         aboutPage.style.marginTop = `-${homePageStyle.getPropertyValue("height")}`;

         portfolioPage.style.transform = 'translateX(-2000px)';
         portfolioPage.style.paddingBottom = '0px';
         portfolioPage.style.marginTop = `-${portfolioPageStyle.getPropertyValue("height")}`;
         
         contactPage.style.transform = 'translateX(-2000px)';
         contactPage.style.paddingBottom = '0px';
         contactPage.style.marginTop = `-${contactPageStyle.getPropertyValue("height")}`;
         
         break;         

      case 'portfolio':
         homePage.style.transform = 'scaleY(0)';

         headerPage.style.transform = `translateY(-${homePageStyle.getPropertyValue("height")})`;

         aboutPage.style.transform = 'translateX(2000px)';
         aboutPage.style.paddingBottom = '0px';
         aboutPage.style.marginTop = `-${aboutPageStyle.getPropertyValue("height")}`;

         portfolioPage.style.transform = 'translateX(0px)';
         portfolioPage.style.paddingBottom = '100px';
         portfolioPage.style.marginTop = `-${homePageStyle.getPropertyValue("height")}`;
         
         contactPage.style.transform = 'translateX(-2000px)';
         contactPage.style.paddingBottom = '0px';
         contactPage.style.marginTop = `-${contactPageStyle.getPropertyValue("height")}`;
         
         break;

      case 'contact':
         homePage.style.transform = 'scaleY(0)';

         headerPage.style.transform = `translateY(-${homePageStyle.getPropertyValue("height")})`;

         aboutPage.style.transform = 'translateX(2000px)';
         aboutPage.style.paddingBottom = '0px';
         aboutPage.style.marginTop = `-${aboutPageStyle.getPropertyValue("height")}`;
         
         portfolioPage.style.transform = 'translateX(2000px)';
         portfolioPage.style.paddingBottom = '0px';
         portfolioPage.style.marginTop = `-${portfolioPageStyle.getPropertyValue("height")}`;
         
         contactPage.style.transform = 'translateX(0px)';
         contactPage.style.paddingBottom = '100px';
         contactPage.style.marginTop = `-${homePageStyle.getPropertyValue("height")}`;
         
         break;
   }   
}

const changeLang = () => {
   if (checkboxLang.checked) {
      for (let i = 0; i <= contentRu.length - 1; i++) {
         contentEn[i].style.display = 'inline-block';
         contentRu[i].style.display = 'none';
      }
   } else {
      for (let i = 0; i < contentRu.length; i++) {
         contentEn[i].style.display = 'none';
         contentRu[i].style.display = 'inline-block';
      }
   }
}

const changeBg = () => {
   if (checkboxLight.checked) {
      body.style.background = '#efefef';
   } else {
      body.style.background = '#2b3747';
   }
}

const LightenDarkenColor = (col, amt) => {
   let usePound = false;
 
   if (col[0] == "#") {
       col = col.slice(1);
       usePound = true;
   }

   let num = parseInt(col,16);

   let r = (num >> 16) + amt;

   if (r > 255) r = 255;
   else if  (r < 0) r = 0;

   let b = ((num >> 8) & 0x00FF) + amt;

   if (b > 255) b = 255;
   else if  (b < 0) b = 0;

   let g = (num & 0x0000FF) + amt;

   if (g > 255) g = 255;
   else if (g < 0) g = 0;

   return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}

const changeMainColor = (color) => {
   let darkenColor = LightenDarkenColor(color, -37);
   let darkenmoreColor = LightenDarkenColor(color, -64);

   setingsButton.style.background = color;
   setingsWindow.style.background = color;

   headerTopInner.style.background = color;
   headerTopInner.style.boxShadow = `6px 6px ${darkenColor}, 12px 12px ${darkenmoreColor}`;

   headerInner.style.background = color;
   headerInner.style.boxShadow = `6px 6px ${darkenColor}, 12px 12px ${darkenmoreColor}`;

   aboutInner.style.background = color;
   aboutInner.style.boxShadow = `6px 6px ${darkenColor}, 12px 12px ${darkenmoreColor}`;

   portfolioInner.style.background = color;
   portfolioInner.style.boxShadow = `6px 6px ${darkenColor}, 12px 12px ${darkenmoreColor}`;

   contactInner.style.background = color;
   contactInner.style.boxShadow = `6px 6px ${darkenColor}, 12px 12px ${darkenmoreColor}`;
}

category.addEventListener('click', chooseCategory);
aboutSkills.addEventListener('click', chooseSkillCell);
setingsButton.addEventListener('click', openSetings);