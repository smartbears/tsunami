﻿//using MongoDB.Driver;
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
//    public class AlergyRepository: IRepository<Allergy>, IAlergyRepository
//    {
//        MongoCollection<Allergy> _collection;
//        IList<Allergy> _alergies;

//        public AlergyRepository(MongoDatabase _database)
//        {
//            this._collection = _database.GetCollection<Allergy> ("alergies");
//        }    

//        public IList<Allergy> List()
//        {
//            return this._collection.FindAll().ToList();
//        }

//        public Allergy Insert(Allergy entry){
//            this._collection.Save (entry);
//            return entry;
//        }

//        public void Update(Allergy entry){            
//            _collection.Update(Query<Allergy>.EQ(x => x.Id, entry.Id), Update<Allergy>.Replace(entry));            
//        }

//        public void Delete(Guid id)
//        {
//            this._collection.Remove(Query.EQ("_id", id));
//        }

//        public Allergy Get(Guid id)
//        {
//            return this._collection.AsQueryable().FirstOrDefault(sbj => sbj.Id == id);
//        }        
//    }
//}
