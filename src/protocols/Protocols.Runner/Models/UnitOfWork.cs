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

        MongoCollection<User> _users;


        public UnitOfWork()
        {
            var connectionString = "mongodb://localhost";
            var client = new MongoClient(connectionString);

            _server = client.GetServer();
            _database = _server.GetDatabase("mydb");            
        }

        public MongoCollection<User> Users
        {
            get
            {
                if(_users == null)                
                    _users = _database.GetCollection<User>("users");
                return _users;
            }
        }

    
    }
}
