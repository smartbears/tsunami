using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;

namespace Protocols.Repository
{
	public interface IRepository<T>
	{
		IList<T> GetAll();
        WriteConcernResult Insert(T entry);
        WriteConcernResult Remove(T entry);
        T FindById(ObjectId id);
    }

}

