using System.Collections.Generic;

namespace Protocols.Core
{
	public class Visit
	{
		public string Label{ get; set; }
		public int Number{ get; set; }
		public IList<int> ProcedureIds{ get; set; }
	}
}

