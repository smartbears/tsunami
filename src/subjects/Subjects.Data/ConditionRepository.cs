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
    //public class ConditionRepository : IRepository<Condition>, IConditionRepository
    //{
    //    MongoCollection<Condition> _collection;
    //    IList<Condition> _conditions;

    //    public ConditionRepository(MongoDatabase _database)
    //    {
    //        this._collection = _database.GetCollection<Condition> ("conditions");
    //    }    

    //    public IList<Condition> List()
    //    {
    //        return this._collection.FindAll().ToList();
    //    }

    //    public Condition Insert(Condition entry){
    //        this._collection.Save (entry);
    //        return entry;
    //    }

    //    public void Update(Condition entry){            
    //        _collection.Update(Query<Condition>.EQ(x => x.Id, entry.Id), Update<Condition>.Replace(entry));            
    //    }

    //    public void Delete(Guid id)
    //    {
    //        this._collection.Remove(Query.EQ("_id", id));
    //    }

    //    public Condition Get(Guid id)
    //    {
    //        return this._collection.AsQueryable().FirstOrDefault(sbj => sbj.Id == id);
    //    }        
    //}
}
