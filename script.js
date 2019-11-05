function methodXMLHTTPRequest() {
    const req = new XMLHttpRequest(); 
    req.open('GET', 'https://jsonplaceholder.typicode.com/users'); 
    req.onload = function () { 
        if (req.status == 200) {
            let responseJson = JSON.parse(req.response);

            let listEmail = [];
            for(i in responseJson) {
                listEmail.push(responseJson[i].email);
            }
            listEmail.sort();

            var container  = document.getElementsByClassName('listContainer');
            var ul = document.createElement('ul');
            container[0].appendChild(ul);

            for(var i=0; i < listEmail.length; i++) {
                var li = document.createElement('li');
                li.innerHTML = listEmail[i];
                ul.appendChild(li);
            }
        } else { 
            console.log('ERROR', req.statusText); 
        } 
    };
    req.onerror = function () { 
        console.log('Network Error'); 
    }; 

    req.send();
}

function methodFetch() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            
            let listUser = [];
            for(i in myJson) {
                listUser.push(myJson[i].username);
            }
            listUser.sort(function(a, b){
                return (a.length - b.length); 
            });
            
            var container  = document.getElementsByClassName('listContainer');
            var ul = document.createElement('ul');
            container[1].appendChild(ul);

            for(var i=0; i < listUser.length; i++) {
                var li = document.createElement('li');
                li.innerHTML = listUser[i];
                ul.appendChild(li);
            }
        });
}

function APIRequest() {
    methodXMLHTTPRequest();
    methodFetch();
}
