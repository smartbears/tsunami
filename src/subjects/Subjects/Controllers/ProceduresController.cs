using Subjects.Core;
using System.Web.Http;
using Subjects.Data;
using System.Collections.Generic;
using System;
using Subjects.Helpers;

namespace Subjects.Controllers
{
	public class ProceduresController : ApiController
	{
		public ProcedureRepository Repository { get; set; }

		[AllowCrossSiteJson]
		public IEnumerable<Procedure> Get()
		{
			return Repository.List();
		}
			
		[AllowCrossSiteJson]
		public Procedure Get(Guid id)
		{
			return Repository.Get(id);
		}        

        [HttpPost]
		[AllowCrossSiteJson]
		public Procedure Post(Procedure procedure)
		{
			return Repository.Insert (procedure);
		}

		[HttpPut]
		[AllowCrossSiteJson]
		public Guid Put(Procedure procedure)
		{
            Repository.Update(procedure);
            return procedure.Id;
		}

        [HttpDelete]
		[AllowCrossSiteJson]     
        public void Delete(Guid id)
        {
			Repository.Delete(id);
        }

    }
}
