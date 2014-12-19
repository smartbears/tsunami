﻿using MongoDB.Bson.Serialization.Attributes;
using Subjects.Core.Generators;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Subjects.Core
{
    public class Medication
    {
        [BsonId(IdGenerator = typeof(SubjectIdGenerator))]
        public Guid Id { get; set; }
        public string name { get; set; }
        public string dosage { get; set; }
        public DateTime from { get; set; }
        public DateTime to { get; set; }
        public string comments { get; set; }        
    }
}