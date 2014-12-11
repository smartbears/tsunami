using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Protocols.Models.Generators
{
    public class SubjectIdGenerator : IIdGenerator
    {
        // implement GenerateId
        // implement IsEmpty
        public object GenerateId(object container, object document)
        {
            return Guid.NewGuid();
        }

        public bool IsEmpty(object id)
        {
            return id == null || ((Guid)id).CompareTo(Guid.Empty) == 0;
        }
    }
}
