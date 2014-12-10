using System.Web.Http;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;
using Owin;
using Protocols.Runner.Configs;
using System.Collections.Generic;
using Protocols.Runner.Models;
using System.Web.Http.Cors;

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
            config.EnableCors(new EnableCorsAttribute("*", "*", "*"));

            //Json by Default
            config.Formatters.XmlFormatter.SupportedMediaTypes.Clear();
            var jsonFormatter = config.Formatters.JsonFormatter;
            jsonFormatter.SerializerSettings.Converters.Add(new IsoDateTimeConverter());
            jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            jsonFormatter.SerializerSettings.Converters.Add(new Newtonsoft.Json.Converters.StringEnumConverter());
            jsonFormatter.SerializerSettings.Converters.Add(new Newtonsoft.Json.Converters.KeyValuePairConverter());
            jsonFormatter.SerializerSettings.Converters.Add(new Newtonsoft.Json.Converters.BsonObjectIdConverter());
        }
    }
}
