const CONFIG_MAIN = {
	inputs:[
		{
			id: 1,
			type: 'email',
			name: 'email',
			placeholder:'Correo Electrónico',
			clase:''
		},
		{
			id: 2,
			type: 'text',
			name: 'name',
			placeholder:'Nombre Completo',
			clase:''
		},
		{
			id: 3,
			type: 'text',
			name: 'username',
			placeholder:'Nombre de Usuario',
			clase:''
		},
		{
			id: 4,
			type: 'password',
			name: 'password',
			placeholder:'Contraseña',
			clase:''
		},
		{
			id:5,
			type:'text',
			name: 'direccion',
			placeholder: 'direccion',
			clase: ''
		}
	],
	buttons:[
		{
			id: 1,
			name: 'Registrate',
			type: 'submit',
			clase: 'btn btn-signup waves-effect waves-light'
		}
	],
	links: {
		redes:[
			{
				id: 1,
				name: 'Iniciar sesión con Facebook',
				href: '#',
				clase: 'btn btn-fb hide-on-small-only'
			},
			{
				id: 2,
				name: 'Iniciar sesión',
				href: '#',
				clase: 'btn btn-fb hide-on-med-and-up'
			}
		],
		local:[
			{
				id:1,
				name: 'Entrar',
				href: '/signin',
				clase: ''
			}
		]
	},
	imgs: {
		phone:[
			{
				id:1,
				src: 'http://pngimg.com/upload/iphone_PNG5729.png',
				alt: 'Phone',
				clase: 'iphone'
			}
		]
	}

}

export default CONFIG_MAIN;