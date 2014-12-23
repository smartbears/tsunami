using Subjects.Core;
using System.Web.Http;
using Subjects.Data;
using System.Collections.Generic;
using System;
using Subjects.Helpers;

namespace Subjects.Controllers
{
	public class AlergiesController : ApiController
	{
		public AlergyRepository Repository{ get; set; }

		[AllowCrossSiteJson]
		public IEnumerable<Alergy> Get()
		{
			return Repository.List();
		}
			
		[AllowCrossSiteJson]
		public Alergy Get(Guid id)
		{
			return Repository.Get(id);
		}        

        [HttpPost]
		[AllowCrossSiteJson]
		public Alergy Post(Alergy alergy)
		{
			return Repository.Insert (alergy);
		}

		[HttpPut]
		[AllowCrossSiteJson]
		public Guid Put(Alergy alergy)
		{
            Repository.Update(alergy);
            return alergy.Id;
		}

        [HttpDelete]
		[AllowCrossSiteJson]     
        public void Delete(Guid id)
        {
			Repository.Delete(id);
        }

    }
}
