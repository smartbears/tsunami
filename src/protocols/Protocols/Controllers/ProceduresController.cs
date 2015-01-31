using Protocols.Core;
using System.Web.Http;
using Protocols.Data;
using System.Collections.Generic;
using System;
using Protocols.Helpers;
using Protocols.Core.Persistence;

namespace Protocols.Controllers
{
	public class ProceduresController : BaseController
	{
		public IProcedureRepository Repository { get; set; }

		public IEnumerable<Procedure> Get()
		{
			return Repository.List();
		}
			
		public Procedure Get(Guid id)
		{
			return Repository.Get(id);
		}        
			
		public Procedure Post(Procedure procedure)
		{
			return Repository.Insert (procedure);
		}
			
        //public Guid Put(Procedure procedure)
        //{
        //    Repository.Update(procedure);
        //    return procedure.Id;
        //}
			
        public void Delete(Guid id)
        {
			Repository.Delete(id);
        }

    }
}
