using System;
using System.Collections.Generic;

namespace Subjects.Data
{
	public interface IRepository<T>
	{
		IList<T> GetAll();
		void Insert(T entry);
	}

}

