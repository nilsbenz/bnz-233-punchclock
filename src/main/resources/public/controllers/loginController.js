class LoginController {

    constructor() {
        this._applySubmitListener();
    }

    _applySubmitListener() {
        document.getElementById("submit").addEventListener('click', async () => {
            const user = {
                username: document.getElementById('username-input').value,
                password: document.getElementById('password-input').value,
            };

            this._loginUser(user);
        });
    }

    async _loginUser(user) {
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        });
        if (res.status === 200) {
            localStorage.setItem('authorization', res.headers.get('Authorization'));
            window.location.href = '/';
        } else {
            document.getElementById('alert').innerHTML = 'Falsche Eingabe';
        }
    }
}

new LoginController();
