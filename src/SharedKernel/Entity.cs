using System;

namespace SharedKernel
{
    public class Entity
    {
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
