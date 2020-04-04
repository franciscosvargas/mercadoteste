import notify from './notify'
import login from './login'

const Templates = {
	notify,
	login
}

export default function getTemplate(name) {
	return Templates[name]
}