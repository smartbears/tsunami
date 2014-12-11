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
        }

        public MongoCollection<Subject> Subjects
        {
            get
            {
                if(_users == null)                
                    _users = _database.GetCollection<Subject>("subects");
                return _users;
            }
        }

    
    }
}
