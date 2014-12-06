using MongoDB.Driver.Builders;
using Protocols.Runner.Models;
using System.Collections.Generic;
using System.Web.Http;
using System.Linq;

namespace Protocols.Runner.Controllers
{
    public class UsersController : ApiController
    {
        UnitOfWork unit = new UnitOfWork();

        [AllowCrossSiteJsonAttribute]
        public List<User> Get()
        {
            return unit.Users.FindAllAs<User>().ToList();
        }
        
        [HttpPost]
        [AllowCrossSiteJsonAttribute]
        public string CreateUser(User user)
        {
            return "hello";
        }

    }
}
