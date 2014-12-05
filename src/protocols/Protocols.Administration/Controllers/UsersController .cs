using System.Web.Http;

namespace Protocols.Administration.Controllers
{
    public class UsersController : ApiController
    {
        public dynamic Get()
        {
            return new {test= "Hello users"};
        }
    }
}
