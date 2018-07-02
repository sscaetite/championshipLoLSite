import { Template } from 'meteor/templating';
 
import { Equipes } from '../api/equipes.js';
 
import './equipe.html';
 
Template.equipe.events({
  'click .del-equipe'() {
    Equipes.remove(this._id);
  },
});