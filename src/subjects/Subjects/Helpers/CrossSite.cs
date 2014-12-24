using System;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace Subjects.Helpers
{
	public class BaseController : ApiController{

		//Preflight Optionsrequest
		[AllowCrossSiteJson]
		public string Options()
		{
			return null; // HTTP 200 response with empty body
		}
	}

	public class AllowCrossSiteJsonAttribute : ActionFilterAttribute
	{
	    public override void OnActionExecuted(HttpActionExecutedContext actionExecutedContext)
		{

		    actionExecutedContext.Response.Headers.Add("Access-Control-Allow-Origin", "*");
		    

			actionExecutedContext.Response.Headers.Add("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
			actionExecutedContext.Response.Headers.Add("Access-Control-Request-Method", "*");
			actionExecutedContext.Response.Headers.Add("Access-Control-Allow-Methods", "POST, PUT, DELETE, GET, OPTIONS");
			actionExecutedContext.Response.Headers.Add("Access-Control-Max-Age", "1728000");

		    base.OnActionExecuted(actionExecutedContext);
		}
	}
}

