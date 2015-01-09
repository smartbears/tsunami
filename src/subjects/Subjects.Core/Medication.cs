using System;

namespace Subjects.Core
{
    public class Medication
    {
        public string Name { get; set; }
        public string Dosage { get; set; }
        public DateTime From { get; set; }
        public DateTime To { get; set; }
        public string Comments { get; set; }        
    }
}
