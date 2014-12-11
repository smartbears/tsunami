﻿using System;
using Castle.MicroKernel.Registration;
using Castle.Windsor;
using Castle.Windsor.Installer;
using System.Web.Http.Controllers;
using System.Web.Http;

namespace Subjects.WindsorInstallers
{
	public class ControllersInstaller : IWindsorInstaller
	{
		public void Install(Castle.Windsor.IWindsorContainer container, Castle.MicroKernel.SubSystems.Configuration.IConfigurationStore store)
		{
			if (container == null)
			{
				throw new ArgumentNullException("container");
			}

			container.Register(Types.FromThisAssembly()
				.BasedOn<ApiController>()
				.If(t => t.Name.EndsWith("Controller", StringComparison.Ordinal))
				.Configure(c => c.LifestyleTransient()));
		}
	}
}

