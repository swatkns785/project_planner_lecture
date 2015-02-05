import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('project');
  },

  setupController: function(controller, model) {
    controller.set('model', model);

    var newProject = this.store.createRecord('project');
    controller.set('newProject', newProject);
  },

  actions: {
    createProject: function() {
      var project = this.get('controller.newProject');

      project.save();
    }
  }
});
