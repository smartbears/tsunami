using Subjects.Core;
using System.Web.Http;
using Subjects.Data;
using System.Collections.Generic;
using System;
using Subjects.Helpers;

namespace Subjects.Controllers
{
	public class MedicationsController : ApiController
	{
		public MedicationRepository Repository { get; set; }

		[AllowCrossSiteJson]
		public IEnumerable<Medication> Get()
		{
			return Repository.List();
		}
			
		[AllowCrossSiteJson]
		public Medication Get(Guid id)
		{
			return Repository.Get(id);
		}        

        [HttpPost]
		[AllowCrossSiteJson]
		public Guid Post(Medication medication)
		{
			return Repository.Insert (medication);
		}

		[HttpPut]
		[AllowCrossSiteJson]
		public Guid Put(Medication medication)
		{
            Repository.Update(medication);
            return medication.Id;
		}

        [HttpDelete]
		[AllowCrossSiteJson]     
        public void Delete(Guid id)
        {
			Repository.Delete(id);
        }

    }
}
