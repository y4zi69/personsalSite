function display (label){
    const ed = document.querySelector('.js-ed')
    const skill = document.querySelector('.js-section')
    const prj = document.querySelector('.js-prj')
    if (label === 'education'){
        ed.classList.add("section-ed-aftr")
        skill.classList.add('skills-section-aftr')
        prj.classList.remove('section-prj-aftr')

        
    }else if (label === 'project'){
        prj.classList.add('section-prj-aftr')
        ed.classList.remove('section-ed-aftr')
        skill.classList.add('skills-section-aftr')


    }else if (label === 'skills'){
        skill.classList.add('section-main')
        skill.classList.remove('skills-section-aftr')
        prj.classList.remove('section-prj-aftr')
        ed.classList.remove('section-ed-aftr')

    }

   

}
var sideMenu = document.getElementById("side-menu");

function openMenu(){
    sideMenu.style.right = '0';

}
function closeMenu(){
    sideMenu.style.right = '-200px';
}