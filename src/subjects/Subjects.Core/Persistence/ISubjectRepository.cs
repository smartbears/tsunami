using System.Collections.Generic;

namespace Subjects.Core.Persistence
{
    public interface ISubjectRepository
    {
        IList<Subject> SearchByName(string name);

        IList<Subject> SearchByAge(int age);
    }
}
