using GeneralInsurance.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GeneralInsurance.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly GeneralInsuranceContext _context;
        public UserProfileController(GeneralInsuranceContext context)
        {
            _context = context;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<PolicyTable[]>> GetUserTable(int id)
        {
            //var userTable = await _context.UserTable.FindAsync(email);
            var user = _context.UserTable.Where(x => x.UserId == id).FirstOrDefault();

            if (user == null)
            {
                return NotFound();
            }

            return Ok(_context.PolicyTable.Where(x => x.Application.User == user));


            ////return Ok((_context.PolicyTable.Where(x => x.Application.User.UserId == id)));
            //return Ok(_context.UserTable.Where(x=>x.Email==email).Select(x=>x.Name));
            //return Ok(user);
        }
    }
}
