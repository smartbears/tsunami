/*App.ApplicationAdapter = App.ShellRestAdapter.extend({
    host: 'http://localhost:8082/api',
});
*/

App.ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'http://localhost:8082/api'
});

App.ProtocolAdapter = DS.RESTAdapter.extend({
    host: 'http://localhost:8081/api'
});
App.ProcedureAdapter = DS.RESTAdapter.extend({
    host: 'http://localhost:8081/api'
});

/*App.ApplicationAdapter = DS.WebAPIAdapter.extend({
    host: 'http://localhost:8082/api',
});*/
//App.ApplicationAdapter = DS.FixtureAdapter;

App.Store = DS.Store.extend({
    //adapter: DS.RESTAdapter.create({ bulkCommit: false, url: "http://localhost:8082"})
});

//App.Store.registerAdapter('App.Protocol', App.ProtocolsAdapter);
