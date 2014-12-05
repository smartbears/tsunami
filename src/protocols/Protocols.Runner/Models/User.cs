using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Protocols.Runner.Models
{
    public class User
    {
        public ObjectId Id { get; set; }

        public string name { get; set; }

        public int age { get; set; }

    }
}
