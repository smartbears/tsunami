using MongoDB.Driver;
using Protocols.Core;
using Protocols.Core.Persistence;
using SharedKernel.Data;

namespace Protocols.Data
{
    public class ProtocolRepository : MongoDbRepository<Protocol>, IProtocolRepository
    {
        public ProtocolRepository(MongoDatabase database) : base(database, "protocols")
        {
        }
    }
}
