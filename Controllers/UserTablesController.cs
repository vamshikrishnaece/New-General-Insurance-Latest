using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GeneralInsuranceAPI.Models;

namespace GeneralInusranceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserTablesController : ControllerBase
    {
        private readonly GeneralInsuranceContext _context;

        public UserTablesController(GeneralInsuranceContext context)
        {
            _context = context;
        }

        // GET: api/UserTables
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserTable>>> GetUserTable()
        {
            return await _context.UserTable.ToListAsync();
        }
        



        // GET: api/UserTables/steve@gmail.com
        [HttpGet("{email}")]
        public async Task<ActionResult<UserTable>> GetUserTable(string email)
        {
            //var userTable = await _context.UserTable.FindAsync(email);
            var user = _context.UserTable.Where(x=>x.Email==email).FirstOrDefault();

            if (user == null)
            {
                return NotFound();
            }

            //return Ok(_context.UserTable.Where(x=>x.Email==email).Select(x=>x.Name));
            return Ok(user);
        }

        //[HttpGet("{email}")]
        //public async Task<ActionResult<UserTable>> GetUserTablebyEmail(string email)
        //{
        //    var userTable = await _context.UserTable.FindAsync(email);

        //    if (userTable == null)
        //    {
        //        return NotFound();
        //    }
        //    else
        //    {
        //        return userTable;
        //    }

        //}

        // PUT: api/UserTables/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}/{password}")]
        public async Task<IActionResult> PutUserTable(int id, string password, UserTable userTable)
        {
            var user = _context.UserTable.Where(x => x.UserId == id).FirstOrDefault();
            if (user == null)
            {
                return BadRequest();
            }

            user.Password = password;
            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserTableExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/UserTables
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<UserTable>> Register(UserTable userTable)
        {
            var s = _context.UserTable.Where(x => x.Email == userTable.Email).FirstOrDefault();
            if (s == null)
            {
                _context.UserTable.Add(userTable);
                await _context.SaveChangesAsync();
                return CreatedAtAction("GetUserTable", userTable);

                //return CreatedAtAction("GetUserTable", new { id = userTable.UserId }, userTable);

            }
            else
            {
                return BadRequest();
            }
        }

        [HttpPost("{login}")]
        public async Task<ActionResult<UserTable>> Login(Login login)
        {
            var s = _context.UserTable.Where(x => x.Email == login.email && x.Password == login.password).FirstOrDefault();
            if (s != null)
            {
                return Ok();
            }

            //return CreatedAtAction("GetUserTable", new { id = userTable.UserId }, userTable);


            else
            {
                return Unauthorized();
            }
        }

        // DELETE: api/UserTables/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<UserTable>> DeleteUserTable(int id)
        {
            var userTable = await _context.UserTable.FindAsync(id);
            if (userTable == null)
            {
                return NotFound();
            }

            _context.UserTable.Remove(userTable);
            await _context.SaveChangesAsync();

            return userTable;
        }

        private bool UserTableExists(int id)
        {
            return _context.UserTable.Any(e => e.UserId == id);
        }
    }
}