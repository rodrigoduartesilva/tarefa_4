let btnLogin = document.querySelector("#btn-login");

btnLogin.addEventListener('click', function () {
    let formSpace = document.querySelector(".form-space");
    let loginField = document.querySelector(".login-user-form");
    let inputEmail = document.querySelector(".input-email");
    let inputPass = document.querySelector(".input-password");
    let loginSuccess = document.getElementById("login-success");

    if (inputEmail.value === '' && inputPass.value === '') {
        alert('Digite seu email e sua senha para realizar o login!');
    } else if (inputEmail.value === '') {
        alert('Digite seu seu email!');
    } else if (inputPass.value === '') {
        alert('Digite sua senha!');
    } else if (inputPass.value !== '123456') {
        alert('Email ou senha incorretos, verificar e tentar novamente!');
    } else {
        document.querySelector(".login-user-form").remove();
        loginSuccess.innerHTML = "<p class='login-success-container'>Login realizado com sucesso. Seja bem-vindo(a) a Kreativ!</p>"

        setTimeout(() => {
            loginSuccess.remove();
            formSpace.appendChild(loginField);
            inputEmail.value = '';
            inputPass.value = '';
            window.location.reload();
        }, 3000);

    }
});
