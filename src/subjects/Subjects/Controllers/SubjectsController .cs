using Subjects.Core;
using System.Web.Http;
using Subjects.Data;
using System.Collections.Generic;
using System;
using Subjects.Helpers;

namespace Subjects.Controllers
{
	public class SubjectsController : BaseController
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

        [AllowCrossSiteJson]
        public IEnumerable<Subject> Get(int age)
        {
            return this.Repository.SearchByAge(age);
        }

        [HttpPost]
		[AllowCrossSiteJson]
		public Subject Post(Subject subject)
		{
			return Repository.Insert(subject);
		}
			
		[AllowCrossSiteJson]
		public Guid Put(Guid id, Subject subject)
		{
			//Ember doesnt send the id along with the model
			//gotta be obtained from the URL. 
			//MVC binding works flawlessly here
			subject.Id = id;
            Repository.Update(subject);
            return subject.Id;
		}
			
		[AllowCrossSiteJson]     
        public void Delete(Guid id)
        {
			Repository.Delete(id);
        }

    }
}
