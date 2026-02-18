
document.getElementById('btn-update-title')
        .addEventListener('click', function(){
            console.log('button clicked');
            const pageTitleElement = document.getElementById('page-title');
            console.log(pageTitleElement);
            pageTitleElement.innerText = 'Updated the page title.'
        })

///

document.getElementById('btn-login')
        .addEventListener('click' , function(){
            console.log('login button click');
            const userinfoEl = document.getElementById('user-info');
            console.log(userinfoEl);

            userinfoEl.innerText = 'user logged in successfully'
            
        })

