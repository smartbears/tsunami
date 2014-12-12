using System;
using System.Collections.Generic;
using Subjects.Core;

namespace Subjects.Data
{
	public interface IRepository<T>
	{
		IList<T> GetAll();
		Guid Insert(T entry);
		void Update(T entry);
		void Remove(Guid id);
        void Remove(T entry);
		T FindBy(Guid id);
        List<Subject> SearchByName(string pattern);
    }

}

