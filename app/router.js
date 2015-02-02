import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("image", function() {
    this.resource("comment");
  });
});

export default Router;
