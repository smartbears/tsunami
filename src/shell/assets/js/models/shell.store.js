App.ApplicationAdapter = DS.RESTAdapter.extend({
    host: 'http://localhost:8082/api', 
});


App.Store = DS.Store.extend({
    //adapter: DS.RESTAdapter.create({ bulkCommit: false, url: "http://localhost:8082"})
});
