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
		public Guid Post(Procedure subject)
		{
			return Repository.Insert (subject);
		}

		[HttpPut]
		[AllowCrossSiteJson]
		public Guid Put(Procedure subject)
		{
            Repository.Update(subject);
            return subject.Id;
		}

        [HttpDelete]
		[AllowCrossSiteJson]     
        public void Delete(Guid id)
        {
			Repository.Delete(id);
        }

    }
}
