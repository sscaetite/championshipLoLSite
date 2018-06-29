import { Template } from 'meteor/templating';
 
import { Equipes } from '../api/equipes.js';
 
import './body.html';
 
Template.body.helpers({
  equipes: function() {
    return Equipes.find();
  },
});