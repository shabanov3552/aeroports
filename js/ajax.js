(function (){
    document.addEventListener('submit', submitForms);

    function submitForms(e) {

        if(e.target[0].name != 'action')
            return true;

        e.preventDefault();

        let form = this.querySelector('form');
        let data = new FormData(form);

        fetch('/ajax/feedback.php', {
            method: 'post',
            body: data
        })
        .then(response => response.text())
        .then(commits => {
            if(commits == 'true') {
                let message = renderMessage();

                form.style.display = 'none';
                form.insertAdjacentElement('beforeBegin', message);
            }
        });
    }

    function renderMessage() {
        let div = document.createElement('div');
        div.classList.add('message-sent__block');

        let span = document.createElement('span');
        span.classList.add('message-set');
        span.textContent = 'Сообщение отправлено';

        div.appendChild(span);

        return div;
    }

    const specialButton = document.getElementById('specialButton');

    specialButton.addEventListener('chenge', hendlerSpecialButton);

    function hendlerSpecialButton() {
        let special = document.getElementById('special');
        // if(specialSolor == null)
        //     return false;

        console.log(special);
        console.dir(special);
        alert(1);
    }
})();