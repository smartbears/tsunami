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
		public ConditionRepository Repository { get; set; }

		[AllowCrossSiteJson]
		public IEnumerable<Condition> Get()
		{
			return Repository.List();
		}
			
		[AllowCrossSiteJson]
		public Condition Get(Guid id)
		{
			return Repository.Get(id);
		}        

        [HttpPost]
		[AllowCrossSiteJson]
		public Guid Post(Condition subject)
		{
			return Repository.Insert (subject);
		}

		[HttpPut]
		[AllowCrossSiteJson]
		public Guid Put(Condition subject)
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
