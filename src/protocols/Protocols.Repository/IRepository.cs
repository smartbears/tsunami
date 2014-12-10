using System;
using System.Collections.Generic;

namespace Protocols.Repository
{
	public interface IRepository<T>
	{
		IList<T> GetAll();
		void Insert(T entry);
	}

}

