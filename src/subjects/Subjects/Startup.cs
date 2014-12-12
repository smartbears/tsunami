﻿using System.Web.Http;
using System.Web.Http.Cors;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;
using Owin;
using System.Web.Http.Dispatcher;
using Castle.Windsor;
using Castle.Windsor.Installer;
using Subjects.Helpers;

namespace Subjects
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

			//Below line Breaks Mono, Data Binder.
			//Please do not enable for now, or attempt to the consequences
			//Zeus rage!
            config.EnableCors(new EnableCorsAttribute("*", "*", "*"));

            //Json by Default
            config.Formatters.XmlFormatter.SupportedMediaTypes.Clear();
            var jsonFormatter = config.Formatters.JsonFormatter;
            jsonFormatter.SerializerSettings.Converters.Add(new IsoDateTimeConverter());
            jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            jsonFormatter.SerializerSettings.Converters.Add(new Newtonsoft.Json.Converters.StringEnumConverter());
            jsonFormatter.SerializerSettings.Converters.Add(new Newtonsoft.Json.Converters.KeyValuePairConverter());
            jsonFormatter.SerializerSettings.Converters.Add(new Newtonsoft.Json.Converters.BsonObjectIdConverter());

			app.UseWebApi(config);

            var container = new WindsorContainer();
			container.Install (FromAssembly.This ());

			config.Services.Replace(
				typeof(IHttpControllerActivator),
				new WindsorCompositionRoot(container));

        }
    }


}
