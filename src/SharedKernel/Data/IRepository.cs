using System;
using System.Collections.Generic;
using System.Linq;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using MongoDB.Driver.Linq;

namespace SharedKernel.Data
{
	public interface IRepository<T>
	{
		IList<T> List();
	    T Get(Guid id);
		T Insert(T entry);
		void Update(T entry);
		void Delete(Guid id);
    }

    public class MongoDbRepository<T> : IRepository<T> where T : Entity
    {
        protected MongoCollection<T> Collection;

        public MongoDbRepository(MongoDatabase _database, string collectionName)
		{
            this.Collection = _database.GetCollection<T>(collectionName);
		}    

	    public IList<T> List()
	    {
            return this.Collection.FindAll().ToList();
	    }

	    public T Insert(T entry){
            this.Collection.Save(entry);
			return entry;
		}

		public void Update(T entry) { 
            Collection.Update(Query<T>.EQ(x => x.Id, entry.Id), Update<T>.Replace(entry));            
        }

	    public void Delete(Guid id)
		{
            this.Collection.Remove(Query.EQ("_id", id));
		}

        public T Get(Guid id)
        {
            return this.Collection.AsQueryable().FirstOrDefault(sbj => sbj.Id == id);
        }     
    }

}

