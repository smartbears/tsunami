using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using Protocols.Core;
using Protocols.Core.Persistence;

namespace Protocols.Controllers
{
    [AllowCrossSiteJsonAttribute]
	public class ProtocolsController : BaseController
    {
        public IProtocolRepository Repository { get; set; }

        public IEnumerable<Protocol> Get()
        {
            //return Repository.List();
            return new List<Protocol>{new Protocol
            {
                Id = new Guid("E7781E39-9CF9-49E1-A264-5C212D154889"),
                Name = "Test",
                Description = "descrp"
            }};
        }

        public Protocol Get(Guid id)
		{
			/*var protocol = Repository.Get (id);
			return protocol;*/
            if (id.ToString().ToUpper() != "E7781E39-9CF9-49E1-A264-5C212D154889")
                throw new Exception("Not found");

            return new Protocol
            {
                Id = new Guid("E7781E39-9CF9-49E1-A264-5C212D154889"),
                Name = "Test",
                Description = "descrp",
                Procedures = new[] { new Procedure { Id = 1, Name = "Procedure1" }, new Procedure { Id = 2, Name = "Procedure2" }, },
                Visits = new[]
                {
                    new Visit{ Label = "Enrollment", Number = 1, ProcedureIds = new []{1,2}},
                    new Visit{ Label = "Visit1", Number = 1, ProcedureIds = new []{2}},
                }
            };
		}
			
		public Protocol Post(Protocol protocol)
		{
			return Repository.Insert(protocol);
		}
    }
}
