class RegisterController {

    constructor() {
        this._applySubmitListener();
    }

    _applySubmitListener() {
        document.getElementById("submit").addEventListener('click', async () => {
            const user = {
                username: document.getElementById('username-input').value,
                password: document.getElementById('password-input').value,
            };

            this._registerUser(user);
        });
    }

    async _registerUser(user) {
        const registerResponse = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        });
        if (registerResponse.status === 200) {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'content-type': 'application/json'
                }
            });
            localStorage.setItem('authorization', res.headers.get('Authorization'));
            window.location.href = '/';
        } else {
            document.getElementById('alert').innerHTML = 'Benutzername ist bereits vergeben';
        }
    }
}

new RegisterController();
