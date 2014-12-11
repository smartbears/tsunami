using MongoDB.Driver.Builders;
using MongoDB.Driver.Linq;
using Protocols.Models;
using System.Collections.Generic;
using System.Web.Http;
using System.Linq;
using Protocols.Administration.Helpers;
using Protocols.Repository;
using System;
using MongoDB.Bson;

namespace Protocols.Administration.Controllers
{
	public class SubjectsController : ApiController
	{
		public IRepository<Subject> Repository{ get; set; }

        [ActionName("list")]
		[AllowCrossSiteJson]
		public object Get()
		{
			return new {
				subjects = Repository.GetAll().ToList()
			};

		}

        [ActionName("get")]
		[AllowCrossSiteJson]
		public Subject Get(Guid id)
		{
			return Repository.FindBy(id);
		}

		[HttpPost]
        [ActionName("insert")]
		[AllowCrossSiteJson]
		public Guid Post(Subject subject)
		{
			return Repository.Insert (subject);
		}

        [ActionName("search")]
		[AllowCrossSiteJson]
		public List<Subject> Search(string pattern)
		{
			//This has to be changed
			//The IRepository pattern cannot be bound with a searchbyName method
			//Most likely other implementations than Subject wont have a Name
            return this.Repository.SearchByName(pattern);
		}

        [HttpDelete]
        [ActionName("delete")]
		[AllowCrossSiteJson]        
        public void Delete(Guid id)
        {
			Repository.Remove(id);
        }

    }
}
