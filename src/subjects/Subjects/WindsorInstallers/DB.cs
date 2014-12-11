﻿using System;
using Castle.MicroKernel.Registration;
using MongoDB.Driver;
using Subjects.Data;

namespace Subjects.WindsorInstallers
{
	public class DBInstaller : IWindsorInstaller
	{
		public void Install(Castle.Windsor.IWindsorContainer container, Castle.MicroKernel.SubSystems.Configuration.IConfigurationStore store)
		{
			if (container == null)
			{
				throw new ArgumentNullException("container");
			}

			var connectionString = System.Configuration.ConfigurationSettings.AppSettings["ServerAddress"];
			var client = new MongoClient(connectionString);

			var _server = client.GetServer();
			var _database = _server.GetDatabase(System.Configuration.ConfigurationSettings.AppSettings["DbName"]);   

			container.Register(Component.For<MongoDatabase>()
				.Instance(_database)
			);

			container.Register(Classes.FromAssemblyContaining(typeof(IRepository<>))
				.BasedOn(typeof(IRepository<>))
				.WithServiceAllInterfaces());
		}
	}
}
