﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class Port
    {
        public int Id { get; set; }
        public string PortCode { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }
        public string Country { get; set; }            // Added for better identification
    }
}
