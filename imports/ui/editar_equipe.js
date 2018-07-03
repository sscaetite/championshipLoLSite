import { Template } from 'meteor/templating';

import { Equipes } from '../api/equipes.js';
/* 
Template.editar_equipe.events({
    'submit .novoNomeEquipe'(event){
        event.preventDefault();
    
        const targget = event.target;
        const novoNome = targget.nome.value;

        console.log(novoNome);

        Equipes.update(this._id, {
            $set: { nome: novoNome },
        });
    }


});

*/