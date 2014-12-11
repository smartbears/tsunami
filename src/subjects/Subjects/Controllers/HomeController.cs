using System.Web.Http;

namespace Subjects.Controllers
{
    public class HomeController : ApiController
    {
        public dynamic Get()
        {
            return new {test= "Hello administration module"};
        }
    }
}
