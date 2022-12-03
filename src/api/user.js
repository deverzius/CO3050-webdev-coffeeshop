import { fetchData, objToFormData, sendRequest } from ".";
const urlUser = `http://localhost/BKCoffee/api/user.php`;
const actions = {
	create: '?action=create',
	read: '?action=read',
	read_all: '?action=read_all',
	update: '?action=update',
	delete: '?action=delete',
	login: '?action=login',
	sign_up: '?action=sign_up'
}


async function login(username, password) {
	const data = { username, password };
	const formData = objToFormData(data);

	const responseData = await fetchData(urlUser, actions.login, formData);
	//console.log(responseData);

	localStorage.removeItem('username');
	localStorage.removeItem('name');
	localStorage.removeItem('point');
	localStorage.removeItem('address');
	localStorage.removeItem('role');

	if (responseData.id !== '-1')
	{
		localStorage.setItem('username', responseData.username);
		localStorage.setItem('name', responseData.name);
		localStorage.setItem('point', responseData.point ?? 0);
		localStorage.setItem('address', responseData.address);
		localStorage.setItem('role', responseData.role);
		return true;
	}
	return false;
}

async function signUp(username, password, name, email, address) {
	const data = { username, password, name, email, address };
	const formData = objToFormData(data);

	const responseData = await fetchData(urlUser, actions.sign_up, formData);

	if (responseData.status === 'OK')
	{
		localStorage.setItem('username', username);
		localStorage.setItem('name', name);
		localStorage.setItem('point', 0);
		localStorage.setItem('address', address);
		localStorage.setItem('role', 'cus');
		return true;
	}
	else if (responseData.status === 'DUP_USERNAME')
	{
		alert('Tên đăng nhập bị trùng!\nVui lòng chọn tên khác!')
	}
	return false;
}

export { login, signUp }