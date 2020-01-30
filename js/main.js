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

const homePageStyle = getComputedStyle(homePage);
const aboutPageStyle = getComputedStyle(aboutPage);
const portfolioPageStyle = getComputedStyle(portfolioPage);
const contactPageStyle = getComputedStyle(contactPage);
const headerPageStyle = getComputedStyle(headerPage);


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

         headerPage.style.transform = 'translateY(-248px)';

         aboutPage.style.transform = 'translateX(0px)';
         aboutPage.style.paddingBottom = '100px';
         aboutPage.style.marginTop = '-248px';

         portfolioPage.style.transform = 'translateX(-2000px)';
         portfolioPage.style.paddingBottom = '0px';
         portfolioPage.style.marginTop = `-${portfolioPageStyle.getPropertyValue("height")}`;
         
         contactPage.style.transform = 'translateX(-2000px)';
         contactPage.style.paddingBottom = '0px';
         contactPage.style.marginTop = `-${contactPageStyle.getPropertyValue("height")}`;
         
         break;         

      case 'portfolio':
         homePage.style.transform = 'scaleY(0)';

         headerPage.style.transform = 'translateY(-248px)';

         aboutPage.style.transform = 'translateX(2000px)';
         aboutPage.style.paddingBottom = '0px';
         aboutPage.style.marginTop = `-${aboutPageStyle.getPropertyValue("height")}`;

         portfolioPage.style.transform = 'translateX(0px)';
         portfolioPage.style.paddingBottom = '100px';
         portfolioPage.style.marginTop = '-248px';
         
         contactPage.style.transform = 'translateX(-2000px)';
         contactPage.style.paddingBottom = '0px';
         contactPage.style.marginTop = `-${contactPageStyle.getPropertyValue("height")}`;
         
         break;

      case 'contact':
         homePage.style.transform = 'scaleY(0)';

         headerPage.style.transform = 'translateY(-248px)';

         aboutPage.style.transform = 'translateX(2000px)';
         aboutPage.style.paddingBottom = '0px';
         aboutPage.style.marginTop = `-${aboutPageStyle.getPropertyValue("height")}`;
         
         portfolioPage.style.transform = 'translateX(2000px)';
         portfolioPage.style.paddingBottom = '0px';
         portfolioPage.style.marginTop = `-${portfolioPageStyle.getPropertyValue("height")}`;
         
         contactPage.style.transform = 'translateX(0px)';
         contactPage.style.paddingBottom = '100px';
         contactPage.style.marginTop = '-248px';
         
         break;
   }   
}


category.addEventListener('click', chooseCategory);
aboutSkills.addEventListener('click', chooseSkillCell);