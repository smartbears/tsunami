using System;
using System.Collections.Generic;

namespace Protocols.Core
{
	public class Visit
	{
		public string Label{ get; set; }
		public string Number{ get; set; }
		public IList<Guid> ProcedureIds{ get; set; }
	}
}

