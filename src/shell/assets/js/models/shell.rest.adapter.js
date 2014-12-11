App.ShellRestAdapter = DS.RESTAdapter.extend({

    pathForType: function(type) {
        return type;
    },

    /**
    Called by the store in order to fetch the JSON for a given
    type and ID.
    The `find` method makes an Ajax request to a URL computed by `buildURL`, and returns a
    promise for the resulting payload.
    This method performs an HTTP `GET` request with the id provided as part of the query string.
    @method find
    @param {DS.Store} store
    @param {subclass of DS.Model} type
    @param {String} id
    @param {DS.Model} record
    @return {Promise} promise
    */
    find: function(store, type, id, record) {
        return this.ajax(this.buildURL(type.typeKey + "/get", id, record), 'GET');
    },

    /**
    Called by the store in order to fetch a JSON array for all
    of the records for a given type.
    The `findAll` method makes an Ajax (HTTP GET) request to a URL computed by `buildURL`, and returns a
    promise for the resulting payload.
    @private
    @method findAll
    @param {DS.Store} store
    @param {subclass of DS.Model} type
    @param {String} sinceToken
    @return {Promise} promise
    */
    findAll: function(store, type, sinceToken) {
        var query;

        if (sinceToken) {
            query = { since: sinceToken };
        }
        return this.ajax(this.buildURL(type.typeKey + "/list"), 'GET', { data: query });
    },
});
