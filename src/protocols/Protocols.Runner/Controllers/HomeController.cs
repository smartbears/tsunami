using MongoDB.Driver.Builders;
using Protocols.Runner.Models;
using System.Collections.Generic;
using System.Web.Http;

namespace Protocols.Runner.Controllers
{
    public class HomeController : ApiController
    {
        UnitOfWork unit = new UnitOfWork();

        public List<User> Get()
        {            
            var x= unit.Users.FindAllAs<User>().ToList();
            return unit.Users.FindAllAs<User>().ToList();
            //return "Hello protocols";
        }

    }
}
