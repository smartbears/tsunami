using System;


namespace Protocols.Core
{
    public class Procedure
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public DateTime PerformedOn { get; set; }
        public string Comments { get; set; }
    }
}
