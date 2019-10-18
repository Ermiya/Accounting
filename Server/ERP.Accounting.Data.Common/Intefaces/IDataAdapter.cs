using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.Accounting.Data.Common.Intefaces
{
    public interface IDataAdapter
    {
        T GetById<T>(object id) where T : class;
        IQueryable<T> Select<T>() where T : class;
        List<T> GetAll<T>() where T : class;
        int Count<T>() where T : class;
        //----------------------Insert------------------------------------
        T Insert<T>(T entity) where T : class;
        T InsertAndSave<T>(T entity) where T : class;
        //-----------------------Update-----------------------------------------
        T Update<T>(T entity) where T : class;
        T UpdateAndSave<T>(T entity) where T : class;
        //----------------------Delete-------------------------------------------
        T Delete<T>(T entity) where T : class;
        T DeleteAndSave<T>(T entity) where T : class;

        DbContextTransaction BeginTransaction();
        void SaveChanges();
        void SaveChanges<T>();
    }
}
