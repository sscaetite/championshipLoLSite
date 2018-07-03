import { Template } from 'meteor/templating';
 
import { Equipes } from '../api/equipes.js';
 
import './equipe.html';
import './editar_equipe.html';
 
Template.equipe.events({
  'click #remover-equipe'() {
    Equipes.remove(this._id);
  },
});