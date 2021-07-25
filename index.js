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