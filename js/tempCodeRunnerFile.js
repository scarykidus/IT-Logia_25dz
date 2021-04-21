    document.getElementsByTagName('a')[0].addEventListener('click', (event) => {
        var name = parseInt(event.key);
        if (name.length == 0) {
            event.preventDefault();
        } else {
            console.log(name);
            
        }
    });