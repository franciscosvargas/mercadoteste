import notify from './notify'
import login from './login'
import editData from './editData'
import register from './register'

const Templates = {
	notify,
	login, 
	editData,
	register
}

export default function getTemplate(name) {
	return Templates[name]
}