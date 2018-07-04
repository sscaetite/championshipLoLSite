import { Template } from 'meteor/templating';

import { Equipes } from '../api/equipes.js';

import './body.html';
import './equipe.js';
import './editar_equipe.js';

Template.body.helpers({
  equipes() {
    return Equipes.find({});
  },
});

Template.body.events({
  'submit .inscEquipe'(event) {
    event.preventDefault();

    const target = event.target;
    const nome = target.nome.value;
    const capitao = target.capitao.value;
    const top = target.top.value;
    const jungler = target.jungler.value;
    const mid = target.mid.value;
    const adc = target.adc.value;
    const supp = target.supp.value;

    Equipes.insert(
      {
        nome,
        capitao,
        top,
        jungler,
        mid,
        adc,
        supp,
        createdAt: new Date()
      },
    );

    target.nome.value = '';
    target.capitao.value = '';
    target.top.value = '';
    target.jungler.value = '';
    target.mid.value = '';
    target.adc.value = '';
    target.supp.value = '';

  },

  'submit .novoNomeEquipe'(event) {
    event.preventDefault();

    const targget = event.target;
    const novoNome = targget.nome.value;

    Equipes.update(this._id, {
      $set: { nome: novoNome },
    });

    targget.nome.value = '';
  },

});
