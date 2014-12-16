using System;
using System.Collections.Generic;

namespace Subjects.Core.Persistence
{
	public interface IRepository<T>
	{
		IList<T> List();
	    T Get(Guid id);
		Guid Insert(T entry);
		void Update(T entry);
		void Delete(Guid id);
    }

}

