App.Subject = DS.Model.extend({
    name: DS.attr('string'),
    age:  DS.attr('number')
});

App.SubjectSerializer = DS.RESTSerializer.extend({
    primaryKey: 'id',

    //// ember-data-1.0.0-beta2 does not handle embedded data like they once did in 0.13, so we've to update individually if present
    //// once embedded is implemented in future release, we'll move this back to WebAPISerializer.
    //// see https://github.com/emberjs/data/blob/master/TRANSITION.md for details
    extractArray: function (store, primaryType, payload) {
        return payload;
    },

    extractSingle: function (store, primaryType, payload, recordId, requestType) {
        var primaryTypeName = primaryType.typeKey;
        var typeName = primaryTypeName;
        var data = {};
        data[typeName] = payload;
        data.todos = [];

        if(payload.todos != null){
            payload.todos.map(function (todo) {
                todo.id = todo.todoItemId;
                todo.type = App.Todo;
                data.todos.push(todo);
            });
            payload.todos = payload.todos.mapProperty('id');
        }
        else {
            payload.todos = [];
        }

        payload = data;
        return this._super.apply(this, arguments);
    },

    normalizeHash: {
        id: function (hash) {
            hash.id = hash.id;
            return hash;
        }
    }

});


/*
App.Subject.reopenClass({
  FIXTURES:[
    {id:1, name:"Jorge", age: 25},
    {id:2, name:"Javier", age: 30}
  ]
});
*/
