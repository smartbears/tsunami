using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using Protocols.Core;
using Protocols.Core.Persistence;

namespace Protocols.Controllers
{
	public class ProtocolsController : BaseController
    {
        public IProtocolRepository Repository { get; set; }
		public IProcedureRepository Procedures { get; set; }

        public IEnumerable<Protocol> Get()
        {
            return Repository.List();
        }

		public Protocol Get(Guid id)
		{
			var protocol = Repository.Get (id);
			//protocol.Procedures = Procedures.List ();
			return protocol;
		}
			
		public Protocol Post(Protocol protocol)
		{
			return Repository.Insert(protocol);
		}
    }
}
