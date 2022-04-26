let navElements = document.querySelectorAll('.another-text_nav > div');
let contentElements = document.querySelectorAll('.another-text_content > div > div');

navElements.forEach(function(elem){
    elem.addEventListener('click', function(){
        if (elem.classList.contains('nav-active')) return;
        
        elem.classList.toggle('nav-active');
        navElements.forEach(navElem => {
            if (navElem.classList.contains('nav-active') && navElem !== elem) {
                navElem.classList.toggle('nav-active');
            }
        })

        contentElements.forEach(contentElement => {
            if (contentElement.dataset.id === elem.dataset.id) {
                contentElement.classList.add('content-active');
            } else {
                contentElement.classList.remove('content-active');
            }
        });
    });
});

let certImages = document.querySelectorAll('.cert-block-wrapper img');

certImages.forEach(function(elem){
    elem.addEventListener('click', function(event){
        var el = document.getElementsByTagName('body')[0];
        el.style.overflow = 'hidden';

        let popup = document.querySelector('.cert-block .popup');

        popup.classList.add('show-popup');
        popup.firstElementChild.setAttribute('src', event.target.currentSrc);
    });
});

let closeBtn = document.querySelector('.cert-block .popup .close-btn');

closeBtn.addEventListener('click', function(){
    let popup = document.querySelector('.cert-block .popup');
    popup.classList.remove('show-popup');

    var el = document.getElementsByTagName('body')[0];
    el.style.overflow = 'auto';
});



const accord = function(){
    const buttons = document.querySelectorAll('.accord .title');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(){
            let liBtn = button.closest('li');
            const list = document.querySelectorAll('.accord li.active');
            list.forEach(function(li) {
                if (li != liBtn) li.classList.remove('active');
            });
            
            if (liBtn.classList.contains('active')) liBtn.classList.remove('active');
            else liBtn.classList.add('active');
        });
    });
}
accord();