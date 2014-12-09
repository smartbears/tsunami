using MongoDB.Bson.Serialization;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Protocols.Runner.Models
{
    public class UnitOfWork
    {
        MongoDatabase _database;
        MongoServer _server;

        MongoCollection<Subject> _users;


        public UnitOfWork()
        {
            var connectionString = System.Configuration.ConfigurationSettings.AppSettings["ServerAddress"];
            var client = new MongoClient(connectionString);

            _server = client.GetServer();
            _database = _server.GetDatabase(System.Configuration.ConfigurationSettings.AppSettings["DbName"]);

            InitializeClasses();
        }

        private void InitializeClasses()
        {
            // Registering Subject Class
            if (!BsonClassMap.IsClassMapRegistered(typeof(Subject)))
            {
                BsonClassMap.RegisterClassMap<Subject>(cm =>
                {
                    cm.MapIdField(c => c.Id);
                    cm.MapProperty(c => c.Name);
                    cm.MapProperty(c => c.Age);

                    cm.AutoMap();
                    cm.MapCreator(s => new Subject(s.Name, s.Age));
                });
            }

        }

        public MongoCollection<Subject> Subjects
        {
            get
            {
                if (_users == null)
                    _users = _database.GetCollection<Subject>("subjects");
                return _users;
            }
        }


    }
}
