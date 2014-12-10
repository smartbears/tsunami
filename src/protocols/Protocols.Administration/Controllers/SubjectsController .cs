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

        [ActionName("ListSubjects")]
		[AllowCrossSiteJsonAttribute]
		public List<Subject> Get()
		{
            return Repository.GetAll().ToList();
		}

        [ActionName("GetSubject")]
        [AllowCrossSiteJsonAttribute]
		public Subject Get(Guid id)
		{
			return Repository.FindBy(id);
		}

		[HttpPost]
        [ActionName("InsertSubject")]
        [AllowCrossSiteJsonAttribute]
		public Guid Post(Subject subject)
		{
			return Repository.Insert (subject);
		}

        [ActionName("Search")]
        [AllowCrossSiteJsonAttribute]
		public Subject Search()
		{
			throw new NotImplementedException ("Not done yet!");
		}

        [HttpDelete]
        [ActionName("DeleteSubject")]
        [AllowCrossSiteJsonAttribute]        
        public void Delete(Guid id)
        {
			Repository.Remove(id);
        }

    }
}
