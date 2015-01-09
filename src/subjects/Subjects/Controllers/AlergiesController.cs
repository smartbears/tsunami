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
		//public AlergyRepository Repository{ get; set; }

		[AllowCrossSiteJson]
		public IEnumerable<Allergy> Get()
		{
		    return null;
		    //return Repository.List();
		}
			
		[AllowCrossSiteJson]
		public Allergy Get(Guid id)
		{
		    return null;
		    //return Repository.Get(id);
		}        

        [HttpPost]
		[AllowCrossSiteJson]
		public Allergy Post(Allergy allergy)
        {
            return null;
            //return Repository.Insert (allergy);
        }

		[HttpPut]
		[AllowCrossSiteJson]
		public Guid Put(Allergy allergy)
		{
            //Repository.Update(allergy);
            //return allergy.Id;
            return Guid.Empty;
		}

        [HttpDelete]
		[AllowCrossSiteJson]     
        public void Delete(Guid id)
        {
			//Repository.Delete(id);
        }

    }
}
