import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
 
import { Equipes } from '../api/equipes.js';
 
import './equipe.html';
 
Template.equipe.events({
  'click #remover-equipe'() {
    Equipes.remove(this._id);
  },
});