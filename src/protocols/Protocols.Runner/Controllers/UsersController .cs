using MongoDB.Driver.Builders;
using Protocols.Runner.Models;
using System.Collections.Generic;
using System.Web.Http;

namespace Protocols.Runner.Controllers
{
    public class UsersController : ApiController
    {
        public List<User> Get()
        {            
            return new List<User>(){new User{name = "jorge"}};
        }

    }
}
