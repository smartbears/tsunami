using Subjects.Core;
using System.Web.Http;
using Subjects.Data;
using System.Collections.Generic;
using System;
using Subjects.Helpers;

namespace Subjects.Controllers
{
	public class ConditionsController : ApiController
	{
		//public ConditionRepository Repository { get; set; }

		[AllowCrossSiteJson]
		public IEnumerable<Condition> Get()
		{
			//return Repository.List();
		    return null;
		}
			
		[AllowCrossSiteJson]
		public Condition Get(Guid id)
		{
			//return Repository.Get(id);
		    return null;
		}        

        [HttpPost]
		[AllowCrossSiteJson]
		public Condition Post(Condition condition)
		{
			//return Repository.Insert (condition);
            return null;
		}

		[HttpPut]
		[AllowCrossSiteJson]
		public Guid Put(Condition condition)
		{
            /*Repository.Update(condition);
            return condition.Id;*/
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
