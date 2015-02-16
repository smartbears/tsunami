using System;
using System.Web.Http;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;
using Owin;
using Protocols.Configs;
using System.Collections.Generic;
using System.Web.Http.Dispatcher;
using Protocols;
using Castle.Windsor;
using Protocols.Helpers;
using Castle.Core;
using Castle.Windsor.Installer;
using System.Web.Http.Cors;

namespace Protocols
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

            if(Environment.OSVersion.Platform != PlatformID.MacOSX)
                config.EnableCors(new EnableCorsAttribute("*", "*", "*"));


			config.Formatters.Insert(0, new MyEmberJsonMediaTypeFormatter());
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
