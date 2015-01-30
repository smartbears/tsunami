using MongoDB.Driver;
using Protocols.Core;
using Protocols.Core.Persistence;
using SharedKernel.Data;

namespace Protocols.Data
{
	public class ProcedureRepository : MongoDbRepository<Procedure>, IProcedureRepository
    {
		public ProcedureRepository(MongoDatabase database) : base(database, "procedures")
        {
        }
    }
}
