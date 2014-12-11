using System;
using Microsoft.Owin.Hosting;

namespace Subjects
{
    public class ConsoleRole
    {
        public static void Main()
        {
			var url = "http://localhost:8082";
            Console.WriteLine("Initializing Protocols web server on " + url);
            using (WebApp.Start<Startup>(new StartOptions(url)))
            {
                Console.WriteLine("Press q to Quit");
                while (Console.ReadKey().KeyChar != 'q') ;
                Console.WriteLine("Protocols web server terminated.");
            }
        }
    }
}
