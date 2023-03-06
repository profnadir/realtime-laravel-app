import './bootstrap';

Echo.private('notifications')
    .listen('UserSessionChanged',(e) =>{
        console.log(e);
        let divnotification = document.getElementById('notification')
        divnotification.classList.remove('invisible')
        divnotification.innerHTML = e.message;
        divnotification.classList.remove('alert-danger');
        divnotification.classList.remove('alert-success');
        divnotification.classList.add('alert-'+e.type);
})
