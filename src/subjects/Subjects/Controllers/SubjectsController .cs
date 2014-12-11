using Subjects.Core;
using System.Web.Http;
using Subjects.Data;

namespace Subjects.Controllers
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
