using System;
using MongoDB.Bson.Serialization;

namespace SharedKernel
{
    public class GuidIdGenerator : IIdGenerator
    {
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