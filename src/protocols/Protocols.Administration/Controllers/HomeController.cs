using System.Web.Http;

namespace Protocols.Administration.Controllers
{
    public class HomeController : ApiController
    {
        public dynamic Get()
        {
            return new {test= "Hello administration module"};
        }
    }
}
