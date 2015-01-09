//using MongoDB.Driver;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;
//using Subjects.Core;
//using MongoDB.Driver.Builders;
//using MongoDB.Driver.Linq;
//using MongoDB.Bson;
//using Subjects.Core.Persistence;


//namespace Subjects.Data
//{
//    public class GuardianRepository: IRepository<Guardian>, IGuardianRepository
//    {
//        MongoCollection<Guardian> _collection;
//        IList<Guardian> _guardians;

//        public GuardianRepository(MongoDatabase _database)
//        {
//            this._collection = _database.GetCollection<Guardian> ("guardians");
//        }    

//        public IList<Guardian> List()
//        {
//            return this._collection.FindAll().ToList();
//        }

//        public Guardian Insert(Guardian entry){
//            this._collection.Save (entry);
//            return entry;
//        }

//        public void Update(Guardian entry){            
//            _collection.Update(Query<Guardian>.EQ(x => x.Id, entry.Id), Update<Guardian>.Replace(entry));            
//        }

//        public void Delete(Guid id)
//        {
//            this._collection.Remove(Query.EQ("_id", id));
//        }

//        public Guardian Get(Guid id)
//        {
//            return this._collection.AsQueryable().FirstOrDefault(sbj => sbj.Id == id);
//        }        
//    }
//}
