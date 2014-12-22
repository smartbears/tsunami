using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Subjects.Core;
using MongoDB.Driver.Builders;
using MongoDB.Driver.Linq;
using MongoDB.Bson;
using Subjects.Core.Persistence;


namespace Subjects.Data
{
	public class AlergyRepository: IRepository<Alergy>, IAlergyRepository
	{
		MongoCollection<Alergy> _collection;
		IList<Alergy> _alergies;

		public AlergyRepository(MongoDatabase _database)
		{
			this._collection = _database.GetCollection<Alergy> ("alergies");
		}    

	    public IList<Alergy> List()
	    {
            return this._collection.FindAll().ToList();
	    }

	    public Guid Insert(Alergy entry){
			this._collection.Save (entry);
			return entry.Id;
		}

		public void Update(Alergy entry){            
            _collection.Update(Query<Alergy>.EQ(x => x.Id, entry.Id), Update<Alergy>.Replace(entry));            
        }

	    public void Delete(Guid id)
		{
			this._collection.Remove(Query.EQ("_id", id));
		}

        public Alergy Get(Guid id)
        {
            return this._collection.AsQueryable().FirstOrDefault(sbj => sbj.Id == id);
        }        
	}
}
