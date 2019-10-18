using ERP.Accounting.Data.Common.Intefaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.Accounting.Business
{
    public class AccountingBusiness
    {
        public IDataAdapter adapter;
        public AccountingBusiness(IDataAdapter adapter)
        {
            this.adapter = adapter;
        }
        //------------------------------ CRUD ------------------------------
        #region CRUD
        public IQueryable<T> Set<T>() where T : class => adapter.Select<T>();
        public T GetById<T>(object id) where T : class => adapter.GetById<T>(id);
        public List<T> GetAll<T>() where T : class => adapter.GetAll<T>();
        public int Count<T>() where T : class => adapter.Count<T>();
        public T Add<T>(T entity) where T : class => adapter.Insert(entity);
        public T AddAndSave<T>(T entity) where T : class => adapter.InsertAndSave(entity);
        public T Change<T>(T entity) where T : class => adapter.Update(entity);
        public T ChangeAndSave<T>(T entity) where T : class => adapter.UpdateAndSave(entity);
        public T Remove<T>(T entity) where T : class => adapter.Delete(entity);
        public T RemoveAndSave<T>(T entity) where T : class => adapter.DeleteAndSave(entity);
        public void SaveChanges() => adapter.SaveChanges();
        #endregion
    }
}
