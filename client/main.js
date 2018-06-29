import { Template } from 'meteor/templating'

import './main.html';

Template.body.helpers({
	equipes:[
		{
			nome: 'zHao123',
			capitao: 'Capitâo Br',
			top: 'i4D DragonKame',
			jungler: 'Monux Zyrow',
			mid: 'Capitâo Br',
			adc: 'Lord Zorg',
			supp: 'MasterHamlet'
		},

		{
			nome: 'zHao123',
			capitao: 'Capitâo Br',
			top: 'i4D DragonKame',
			jungler: 'Monux Zyrow',
			mid: 'Capitâo Br',
			adc: 'Lord Zorg',
			supp: 'MasterHamlet'
		},

		{
			nome: '7 Pecados',
			capitao: 'Gula',
			top: 'Preguiça',
			jungler: 'Inveja',
			mid: 'Gula',
			adc: 'Ira',
			supp: 'Avareza'
		},

		{
			nome: '7 Pecados',
			capitao: 'Gula',
			top: 'Preguiça',
			jungler: 'Inveja',
			mid: 'Gula',
			adc: 'Ira',
			supp: 'Avareza'
		}
	]
});