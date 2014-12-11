using Subjects.Core;
using System.Web.Http;
using Subjects.Data;
using MongoDB.Driver.Builders;
using MongoDB.Driver.Linq;
using System.Collections.Generic;
using System.Web.Http;
using System.Linq;
using System;
using MongoDB.Bson;
using Subjects.Helpers;

namespace Subjects.Controllers
{
	public class SubjectController : ApiController
	{
		public IRepository<Subject> Repository{ get; set; }

		[AllowCrossSiteJson]
		public object Get()
		{
			return new {
				subjects = Repository.GetAll().ToList()
			};

		}
			
		[AllowCrossSiteJson]
		public Subject Get(Guid id)
		{
			return Repository.FindBy(id);
		}

		[AllowCrossSiteJson]
		public List<Subject> Get(string pattern)
		{
			//This has to be changed
			//The IRepository pattern cannot be bound with a searchbyName method
			//Most likely other implementations than Subject wont have a Name
			return this.Repository.SearchByName(pattern);
		}

		[HttpPost]
		[AllowCrossSiteJson]
		public Guid Post(Subject subject)
		{
			return Repository.Insert (subject);
		}
			


        [HttpDelete]
		[AllowCrossSiteJson]        
        public void Delete(Guid id)
        {
			Repository.Remove(id);
        }

    }
}
