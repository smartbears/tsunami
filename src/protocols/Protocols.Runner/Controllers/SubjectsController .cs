using MongoDB.Driver.Builders;
using Protocols.Runner.Models;
using System.Collections.Generic;
using System.Web.Http;
using System.Linq;
using MongoDB.Driver.Linq;
using MongoDB.Bson;

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
            if (subject.Name != null && subject.Age >= 0)
                unit.Subjects.Insert(subject);

            return "OK";
        }

        [HttpDelete]
        [AllowCrossSiteJsonAttribute]
        public string DeleteSubject(ObjectId subject)
        {
            var to_delete = unit.Subjects.AsQueryable<Subject>().Where(sbj => sbj.Id == subject ).FirstOrDefault();
            var result = unit.Subjects.Remove(Query.EQ("_id", to_delete.Id));

            if (result.Ok)
                return "OK";
            else return "FAIL";
        }
    }
}
