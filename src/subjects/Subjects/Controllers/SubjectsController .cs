using Subjects.Core;
using System.Web.Http;
using Subjects.Core.Persistence;
using System.Collections.Generic;
using System;
using Subjects.Helpers;

namespace Subjects.Controllers
{
    //[AllowCrossSiteJson]
	public class SubjectsController : BaseController
	{
		public ISubjectRepository Repository{ get; set; }
		
		public IEnumerable<Subject> Get()
		{
			return Repository.List();
		}
			
		public Subject Get(Guid id)
		{
			return Repository.Get(id);
		}

		public IEnumerable<Subject> Get(string name)
		{
            return Repository.SearchByName(name);
		}

        public IEnumerable<Subject> Get(int age)
        {
            return Repository.SearchByAge(age);
        }

        [HttpPost]
		public Subject Post(Subject subject)
		{
			return Repository.Insert(subject);
		}
			
		public Guid Put(Guid id, Subject subject)
		{
			//Ember doesnt send the id along with the model
			//gotta be obtained from the URL. 
			//MVC binding works flawlessly here
			subject.Id = id;
            Repository.Update(subject);
            return subject.Id;
		}
			   
        public void Delete(Guid id)
        {
			Repository.Delete(id);
        }

    }
}
