using System;
using Castle.MicroKernel.Registration;
using MongoDB.Driver;
using Subjects.Core.Persistence;
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
            _database.GetStats(); //this is to check that mongodb is up and running.

			container.Register(Component.For<MongoDatabase>()
				.Instance(_database)
			);

			container.Register(Component.For<ISubjectRepository>()
                .ImplementedBy<SubjectRepository>()
				.LifestyleSingleton());

            container.Register(Classes.FromAssemblyContaining(typeof(AlergyRepository))
                .BasedOn<AlergyRepository>()
                .LifestyleSingleton());

            //container.Register(Classes.FromAssemblyContaining(typeof(ConditionRepository))
            //    .BasedOn<ConditionRepository>()
            //    .LifestyleSingleton());

            ////container.Register(Classes.FromAssemblyContaining(typeof(GuardianRepository))
            ////   .BasedOn<GuardianRepository>()
            ////   .LifestyleSingleton());

            //container.Register(Classes.FromAssemblyContaining(typeof(ImmunizationRepository))
            //  .BasedOn<ImmunizationRepository>()
            //  .LifestyleSingleton());

            container.Register(Classes.FromAssemblyContaining(typeof(MedicationRepository))
              .BasedOn<MedicationRepository>()
              .LifestyleSingleton());
        }
	}
}

