using System;
using MongoDB.Bson.Serialization.Attributes;

namespace SharedKernel
{
    public class Entity
    {
        [BsonId(IdGenerator = typeof(GuidIdGenerator))]
        public Guid Id { get; set; }

        public override bool Equals(object obj)
        {
            var entity = obj as Entity;
            if (entity != null)
                return entity.Id == Id;
            return base.Equals(obj);
        }
    }
}
