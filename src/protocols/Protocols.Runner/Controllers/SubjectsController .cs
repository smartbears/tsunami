﻿using MongoDB.Driver.Builders;
using Protocols.Runner.Models;
using System.Collections.Generic;
using System.Web.Http;
using System.Linq;

namespace Protocols.Runner.Controllers
{
    public class SubjectsController : ApiController
    {
        UnitOfWork unit = new UnitOfWork();

        [AllowCrossSiteJsonAttribute]
        public List<Subject> Get()
        {
            return unit.Subjects.FindAllAs<Subject>().ToList();
        }
        
        [HttpPost]
        [AllowCrossSiteJsonAttribute]
        public string CreateSubject(Subject subject)
        {
            if(subject.name != null && subject.age > 0)
                unit.Subjects.Insert(subject);
            
            return "OK";
        }

    }
}