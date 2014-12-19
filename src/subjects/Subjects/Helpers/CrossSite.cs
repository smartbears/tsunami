using System;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace Subjects.Helpers
{
	public class AllowCrossSiteJsonAttribute : ActionFilterAttribute
	{
	    public override void OnActionExecuted(HttpActionExecutedContext actionExecutedContext)
		{
		    if (actionExecutedContext.Response != null)
		    {
		        actionExecutedContext.Response.Headers.Add("Access-Control-Allow-Origin", "*");
		        actionExecutedContext.Response.Headers.Add("Access-Control-Allow-Methods", "*");
		    }

		    base.OnActionExecuted(actionExecutedContext);
		}
	}
}

