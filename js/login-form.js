document.addEventListener('DOMContentLoaded', async function () {
	let form = document.getElementById('dz_login_signup_form');
	const data = {
		"username": form.elements['val-username'].value,
		"email": form.elements['val-email'].value,
		"password": form.elements['dz-password'].value
	}

	form.addEventListener('submit', async function (e) {
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:3000/v1/api/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});
			
			if(response.status === 200) {
				const responseData = await response.json();
				localStorage.setItem('token', responseData['token']);
				// window.location.href = 'index.html';
			}
		} catch (error) {
			console.log(error);
		}
		
		
	});
}, false);