using System.Collections.Generic;
using System.Web.Http;
using Protocols.Core;
using Protocols.Core.Persistence;

namespace Protocols.Controllers
{
    [AllowCrossSiteJson]
    public class ProtocolsController : ApiController
    {
        public IProtocolRepository Repository { get; set; }

        public IEnumerable<Protocol> Get()
        {
            return Repository.List();
        }
    }
}
