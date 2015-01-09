using System.Collections.Generic;

namespace Subjects.Core.Persistence
{
    public interface ISubjectRepository : IRepository<Subject>
    {
        IList<Subject> SearchByName(string name);

        IList<Subject> SearchByAge(int age);
    }
}
