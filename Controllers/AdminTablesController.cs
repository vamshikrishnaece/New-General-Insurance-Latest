using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GeneralInsurance.Models;

namespace GeneralInusrance.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminTablesController : ControllerBase
    {
        private readonly GeneralInsuranceContext _context;

        public AdminTablesController(GeneralInsuranceContext context)
        {
            _context = context;
        }

        // GET: api/AdminTables
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AdminTable>>> GetAdminTable()
        {
            return await _context.AdminTable.ToListAsync();
        }

        // GET: api/AdminTables/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AdminTable>> GetAdminTable(int id)
        {
            var adminTable = await _context.AdminTable.FindAsync(id);

            if (adminTable == null)
            {
                return NotFound();
            }

            return adminTable;
        }

        // PUT: api/AdminTables/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAdminTable(int id, AdminTable adminTable)
        {
            if (id != adminTable.AdminId)
            {
                return BadRequest();
            }

            _context.Entry(adminTable).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AdminTableExists(id))
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

        // POST: api/AdminTables
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<AdminTable>> PostAdminTable(AdminTable adminTable)
        {
            var s = _context.AdminTable.Where(x => x.Email == adminTable.Email && x.AdminPassword == adminTable.AdminPassword).FirstOrDefault();
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

        // DELETE: api/AdminTables/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<AdminTable>> DeleteAdminTable(int id)
        {
            var adminTable = await _context.AdminTable.FindAsync(id);
            if (adminTable == null)
            {
                return NotFound();
            }

            _context.AdminTable.Remove(adminTable);
            await _context.SaveChangesAsync();

            return adminTable;
        }

        private bool AdminTableExists(int id)
        {
            return _context.AdminTable.Any(e => e.AdminId == id);
        }
    }
}
