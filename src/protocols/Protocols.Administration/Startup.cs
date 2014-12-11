using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;
using Owin;
using System.Web.Http.Dispatcher;
using Protocols.Administration;
using Castle.Windsor;
using Protocols.Administration.Helpers;
using Castle.Windsor.Installer;
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

            //config.EnableCors(new EnableCorsAttribute("*", "*", "*"));

            app.UseWebApi(config);

            //Json by Default
            config.Formatters.XmlFormatter.SupportedMediaTypes.Clear();
            var jsonFormatter = config.Formatters.JsonFormatter;
            jsonFormatter.SerializerSettings.Converters.Add(new IsoDateTimeConverter());
            jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            jsonFormatter.SerializerSettings.Converters.Add(new Newtonsoft.Json.Converters.StringEnumConverter());
            jsonFormatter.SerializerSettings.Converters.Add(new Newtonsoft.Json.Converters.KeyValuePairConverter());
            jsonFormatter.SerializerSettings.Converters.Add(new Newtonsoft.Json.Converters.BsonObjectIdConverter());


            var container = new WindsorContainer();
			container.Install (FromAssembly.This ());

			config.Services.Replace(
				typeof(IHttpControllerActivator),
				new WindsorCompositionRoot(container));

        }
    }


}
