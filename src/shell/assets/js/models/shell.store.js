/*App.ApplicationAdapter = App.ShellRestAdapter.extend({
    host: 'http://localhost:8082/api',
});*/

App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:8082/api'
});
//use this adapter if you want to work with fixture data.
//App.ApplicationAdapter = DS.FixtureAdapter;


App.Store = DS.Store.extend({
    //adapter: DS.RESTAdapter.create({ bulkCommit: false, url: "http://localhost:8082"})
});
