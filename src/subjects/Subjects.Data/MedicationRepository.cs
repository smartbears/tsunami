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
    //public class MedicationRepository: IRepository<Medication>, IMedicationRepository
    //{
    //    MongoCollection<Medication> _collection;
    //    IList<Medication> _medications;

    //    public MedicationRepository(MongoDatabase _database)
    //    {
    //        this._collection = _database.GetCollection<Medication> ("medications");
    //    }    

    //    public IList<Medication> List()
    //    {
    //        return this._collection.FindAll().ToList();
    //    }

    //    public Medication Insert(Medication entry){
    //        this._collection.Save (entry);
    //        return entry;
    //    }

    //    public void Update(Medication entry){            
    //        _collection.Update(Query<Medication>.EQ(x => x.Id, entry.Id), Update<Medication>.Replace(entry));            
    //    }

    //    public void Delete(Guid id)
    //    {
    //        this._collection.Remove(Query.EQ("_id", id));
    //    }

    //    public Medication Get(Guid id)
    //    {
    //        return this._collection.AsQueryable().FirstOrDefault(sbj => sbj.Id == id);
    //    }        
    //}
}
