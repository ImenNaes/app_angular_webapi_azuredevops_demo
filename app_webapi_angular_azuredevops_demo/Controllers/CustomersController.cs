using app_webapi_angular_azuredevops_demo.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace app_webapi_angular_azuredevops_demo.Controllers
{
    [Route("api/Customers")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        [HttpGet]
        [Route("GetCustomers")]
        public List<Customer> Get()
        {
            return new List<Customer>()
            {
                new Customer() {Id = 1, Name="Nadia"},
                new Customer() {Id = 2, Name="Isabella"}
            };
        }
    }
}
