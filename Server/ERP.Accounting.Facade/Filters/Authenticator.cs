using Sigma.Filters.Security.Authenticate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.Accounting.Facade.Filters
{
    class Authenticator : IAuthenticator
    {
        public string Token { get; set; }

        public string GetToken()
        {
            return Token;
        }

        public bool HasPermission(string policy)
        {
            return true;
        }

        public bool IsTokenValid()
        {
            return true;
        }
    }
}
