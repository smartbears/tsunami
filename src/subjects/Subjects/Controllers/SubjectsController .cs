using Subjects.Core;
using System.Web.Http;
using Subjects.Data;
using System.Collections.Generic;
using System;
using Subjects.Helpers;

namespace Subjects.Controllers
{
	public class SubjectsController : ApiController
	{
		public SubjectRepository Repository{ get; set; }

		[AllowCrossSiteJson]
		public IEnumerable<Subject> Get()
		{
			return Repository.List();
		}
			
		[AllowCrossSiteJson]
		public Subject Get(Guid id)
		{
			return Repository.Get(id);
		}

		[AllowCrossSiteJson]
		public IEnumerable<Subject> Get(string name)
		{
            return this.Repository.SearchByName(name);
		}

		[HttpPost]
		[AllowCrossSiteJson]
		public Guid Post(Subject subject)
		{
			return Repository.Insert (subject);
		}

		[HttpPut]
		[AllowCrossSiteJson]
		public Guid Put(Subject subject)
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
