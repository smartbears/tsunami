using SharedKernel;
using System;
using System.Collections.Generic;

namespace Protocols.Core
{
    public class Protocol : Entity
    {
        public string Name { get; set; }
		public string Description { get; set; }
		public DateTime? EnrollmentWindow { get; set;}
		public IList<Visit> Visits { get; set; }
    }
}
