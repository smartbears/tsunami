using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;

namespace Protocols.Repository
{
	public interface IRepository<T>
	{
		IList<T> GetAll();
		Guid Insert(T entry);
		void Remove(Guid id);
        void Remove(T entry);


		//Still thinking what to do with this, doesnt belong here, so far.
		//T FindBy(Guid id); 
    }

}

