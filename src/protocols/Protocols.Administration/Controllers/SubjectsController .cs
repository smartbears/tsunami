using MongoDB.Driver.Builders;
using Protocols.Models;
using System.Collections.Generic;
using System.Web.Http;
using System.Linq;
using Protocols.Administration.Helpers;
using Protocols.Repository;
using System;
namespace Protocols.Administration.Controllers
{
	public class SubjectsController : ApiController
	{
		public IRepository<Subject> Repository{ get; set; }

		[AllowCrossSiteJsonAttribute]
		public object Get()
		{
			return new {
				subjects= Repository.GetAll()
			};
		}

		[HttpPost]
		[AllowCrossSiteJsonAttribute]
		public string Post(Subject subject)
		{
			Repository.Insert (subject);
			return "OK";
		}

	}
}
