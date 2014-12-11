using System.Web.Http;

namespace Protocols.Runner.Controllers
{
    public class HomeController : ApiController
    {
        

        [AllowCrossSiteJsonAttribute]
        public string Get()
        {
            return "Hello Protocols";
        }
    }
}
