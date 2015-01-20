using System.Collections.Generic;
using System.Web.Http;
using Protocols.Core;
using Protocols.Core.Persistence;

namespace Protocols.Controllers
{
	public class ProtocolsController : BaseController
    {
        public IProtocolRepository Repository { get; set; }

        public IEnumerable<Protocol> Get()
        {
            return Repository.List();
        }
			
		public Protocol Post(Protocol protocol)
		{
			return Repository.Insert(protocol);
		}
    }
}
