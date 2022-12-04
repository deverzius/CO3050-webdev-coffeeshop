import { fetchData, objToFormData, sendRequest } from ".";
const urlAdmin = `http://localhost/BKCoffee/api/admin.php`;
const actions = {
	create: '?action=create',
	read: '?action=read',
	update: '?action=update',
	delete: '?action=delete'
}

const takeAction = async (command) => {
	const data = { command: command };
	const formData = objToFormData(data);

	fetchData(urlAdmin, "", formData);
}

export { takeAction }