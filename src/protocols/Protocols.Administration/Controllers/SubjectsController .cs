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

		[AllowCrossSiteJsonAttribute]
		public List<Subject> Get()
		{
            return Repository.GetAll().ToList();
		}

		[HttpPost]
		[AllowCrossSiteJsonAttribute]
		public Guid Post(Subject subject)
		{
			return Repository.Insert (subject);
		}

		[AllowCrossSiteJsonAttribute]
		public Subject Search()
		{
			throw new NotImplementedException ("Not done yet!");
		}

        [HttpDelete]
        [AllowCrossSiteJsonAttribute]        
        public void Delete(Guid id)
        {
			Repository.Remove(id);
        }

    }
}
