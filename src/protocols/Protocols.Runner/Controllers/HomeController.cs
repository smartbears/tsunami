using MongoDB.Driver.Builders;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Protocols.Repository;

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
