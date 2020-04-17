import notify from './notify'
import login from './login'
import editData from './editData'

const Templates = {
	notify,
	login, 
	editData
}

export default function getTemplate(name) {
	return Templates[name]
}