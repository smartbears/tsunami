using System;
using SharedKernel;

namespace Subjects.Core
{
    public class Medication:Entity
    {
        public string Name { get; set; }
        public string Dosage { get; set; }
        public DateTime From { get; set; }
        public DateTime To { get; set; }
        public string Comments { get; set; }        
    }
}
