window.onload = function() {
    document.getElementById('name1').addEventListener('keypress', (event) => {
        var name = parseInt(event.key);
        if (!isNaN(name)) {
            event.preventDefault();
        } else {
            console.log(name);
        }
    });

    document.getElementById('name3').addEventListener('keypress', (event) => {
        if (~event.code.indexOf('Key')) {
            event.preventDefault();
        } else {
            console.log(name);
        }
    });

    document.getElementById('accept2').addEventListener('click', (event) => {
        if (event.target.checked) {
            console.log('Подписаться на рассылку');
        } else {
            console.log('Не подписываться на рассылку');
        };
    });

    document.getElementsByTagName('a')[0].addEventListener('click', (event) => {
        var name = parseInt(event.key);
        if (name.length == 0) {
            event.preventDefault();
        } else {
            console.log(name);

        }
    });
};