using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using Protocols.Runner.Models;

namespace Protocols.Runner.Controllers
{
    class UsersController : ApiController
    {
        UnitOfWork unit = new UnitOfWork();

        [AllowCrossSiteJsonAttribute]
        public List<User> Get()
        {
            return unit.Users.FindAllAs<User>().ToList();
        }
    }
}
