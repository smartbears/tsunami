using Subjects.Core;
using System.Web.Http;
using Subjects.Data;
using System.Collections.Generic;
using System;
using Subjects.Helpers;

namespace Subjects.Controllers
{
	public class GuardiansController : ApiController
	{
		public GuardianRepository Repository { get; set; }

		[AllowCrossSiteJson]
		public IEnumerable<Guardian> Get()
		{
			return Repository.List();
		}
			
		[AllowCrossSiteJson]
		public Guardian Get(Guid id)
		{
			return Repository.Get(id);
		}        

        [HttpPost]
		[AllowCrossSiteJson]
		public Guardian Post(Guardian guardian)
		{
			return Repository.Insert (guardian);
		}

		[HttpPut]
		[AllowCrossSiteJson]
		public Guid Put(Guardian guardian)
		{
            Repository.Update(guardian);
            return guardian.Id;
		}

        [HttpDelete]
		[AllowCrossSiteJson]     
        public void Delete(Guid id)
        {
			Repository.Delete(id);
        }

    }
}
