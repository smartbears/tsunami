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
		public string Post(Subject subject)
		{
			Repository.Insert (subject);
			return "OK";
		}

        [HttpDelete]
        [AllowCrossSiteJsonAttribute]        
        public string DeleteSubject(ObjectId subject)
        {
            var to_delete = Repository.FindById(subject);
            var result = Repository.Remove(to_delete);

            if (result.Ok)
                return "OK";
            else return "FAIL";
        }

    }
}
