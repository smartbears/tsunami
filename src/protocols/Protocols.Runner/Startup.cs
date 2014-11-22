using System.Web.Http;
using Owin;
using Microsoft.Owin.StaticFiles;
using Protocols.Runner.Configs;

namespace Protocols.Runner
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            //app.Run((ctx=> ctx.Response.WriteAsync("This is a test")));
            var config = new HttpConfiguration();
            config.Routes.MapHttpRoute(
                "Default",
                "api/{controller}/{id}",
                new { id = RouteParameter.Optional });

            app.UseWebApi(config);
            app.Use<StaticFilesComponent>();
            //app.UseStaticFiles("/../../Views/Home/");    
        }
    }
}
