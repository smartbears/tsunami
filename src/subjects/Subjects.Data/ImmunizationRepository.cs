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
	public class ImmunizationRepository: IRepository<Immunization>, IImmunizationRepository
	{
		MongoCollection<Immunization> _collection;
		IList<Immunization> _immunizations;

		public ImmunizationRepository(MongoDatabase _database)
		{
			this._collection = _database.GetCollection<Immunization> ("immunizations");
		}    

	    public IList<Immunization> List()
	    {
            return this._collection.FindAll().ToList();
	    }

	    public Guid Insert(Immunization entry){
			this._collection.Save (entry);
			return entry.Id;
		}

		public void Update(Immunization entry){            
            _collection.Update(Query<Immunization>.EQ(x => x.Id, entry.Id), Update<Immunization>.Replace(entry));            
        }

	    public void Delete(Guid id)
		{
			this._collection.Remove(Query.EQ("_id", id));
		}

        public Immunization Get(Guid id)
        {
            return this._collection.AsQueryable().FirstOrDefault(sbj => sbj.Id == id);
        }        
	}
}
