import Ember from 'ember';
import AuthenticatedRouteMixin
  from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(params) {
    var users = ['sean', 'sebastian', 'alli'];
    return users[params.id];
  }
});
