using System;
using Castle.MicroKernel.Registration;
using MongoDB.Driver;
using Protocols.Core.Persistence;
using Protocols.Data;

namespace Protocols.WindsorInstallers
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
		    _database.GetStats(); //this is to check that mongodb is up and running.

			container.Register(Component.For<MongoDatabase>()
				.Instance(_database)
			);

		    container.Register(
                Component.For<IProtocolRepository>()
                .ImplementedBy<ProtocolRepository>()
                .LifestyleSingleton());

			container.Register(
				Component.For<IProcedureRepository>()
				.ImplementedBy<ProcedureRepository>()
				.LifestyleSingleton());
		}
	}
}

