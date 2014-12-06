using MongoDB.Driver.Builders;
using Protocols.Runner.Models;
using System.Collections.Generic;
using System.Web.Http;

namespace Protocols.Runner.Controllers
{
    public class HomeController : ApiController
    {
        UnitOfWork unit = new UnitOfWork();

		[AllowCrossSiteJson]
        public List<User> Get()
        {            
			return new List<User> () {
				new User{
					name = "Louis",
					age = 19
				},
				new User {
					name = "John",
					age = 26
				}
			};
        }

        [AllowCrossSiteJson]
        [HttpPost]
        public string CreateUser(User user)
        {
            return "hello";
        }

    }
}
