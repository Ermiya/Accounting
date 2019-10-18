using ERP.Accounting.Business;
using ERP.Accounting.Data;
using ERP.Accounting.Data.Contexts;
using ERP.Accounting.Facade.Filters;
using Sigma.Filters;
using Sigma.Filters.Log;
using Sigma.Filters.Security;
using Sigma.Filters.Security.AntiDos;
using Sigma.Filters.Security.Authenticate;
using Sigma.Filters.Security.IP;
using Sigma.Filters.Security.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace ERP.Accounting.Facade
{
    public class AccountingController
    {
        private AccountingBusiness business;


        private Authenticator auth;
        private AuthFilter authFilter = new AuthFilter();
        private LogFilter logFilter = new LogFilter(new Logger());
        private SecurityFilter securityFilter = new SecurityFilter();
        private AntiDosFilter antiDosFilter = new AntiDosFilter();
        private IPFilter ipFilter = new IPFilter();
        private FilterCollection<IFilter> filters = new FilterCollection<IFilter>();
        private string ConnectionString
        {
            get
            {
                return "data source=.;initial catalog=DB;persist security info=True;user id=User;password=Pass;MultipleActiveResultSets=True;App=EntityFramework";
            }
        }
        private AccountingBusiness Business
        {
            get
            {
                if (business == null)
                {
                    business = new AccountingBusiness(new DataAdapter(new AccountingDbContext(ConnectionString)));
                }
                return business;
            }
        }
        public AccountingController()
        {
            filters.Add(authFilter);
            filters.Add(logFilter);

            antiDosFilter.AttributeEnable = true;
            securityFilter.Filters.Add(antiDosFilter);
            securityFilter.Filters.Add(ipFilter);

            filters.Add(securityFilter);
        }
        public void RegisterSecurity(HttpRequestBase request)
        {
            securityFilter.ClientInfo = new ClientInfo(request);
        }
        public void RegisterAuthenticator(string token)
        {
            auth = new Authenticator() { Token = token };
            authFilter.SetAuthenticator(auth);
        }

        private T Run<T>(Func<T> func, bool saveChanges = false, object[] arguments = null)
        {
            filters.BeginExecute(frameBack: 2, arguments: arguments);
            try { return func(); }
            finally { filters.EndExecute(); if (saveChanges) Business.SaveChanges(); }
        }
        //------------------------------ CRUD ------------------------------
        #region CRUD
        public IQueryable<T> Set<T>() where T : class => Business.Set<T>();
        public T GetById<T>(object id) where T : class => Business.GetById<T>(id);
        public List<T> GetAll<T>() where T : class => Business.GetAll<T>();
        public int Count<T>() where T : class => Business.Count<T>();
        public T Add<T>(T entity) where T : class { try { return Business.Add(entity); } finally { Business.SaveChanges(); } }
        public T Change<T>(T entity) where T : class { try { return Business.Change(entity); } finally { Business.SaveChanges(); } }
        public T Remove<T>(T entity) where T : class { try { return Business.Remove(entity); } finally { Business.SaveChanges(); } }
        public T Remove<T>(object id) where T : class { try { return Business.Remove(GetById<T>(id)); } finally { Business.SaveChanges(); } }
        #endregion

    }
}
