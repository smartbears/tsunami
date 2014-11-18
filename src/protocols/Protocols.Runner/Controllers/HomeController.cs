using System.Web.Http;

namespace Protocols.Runner.Controllers
{
    public class HomeController : ApiController
    {
        public string Get()
        {
            return "Hello protocols";
        }
    }
}
