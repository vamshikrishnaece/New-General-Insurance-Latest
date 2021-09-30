using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GeneralInusranceAPI.Models;

namespace GeneralInsurance.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InsuranceTablesController : ControllerBase
    {
        private readonly GeneralInsuranceContext _context;

        public InsuranceTablesController(GeneralInsuranceContext context)
        {
            _context = context;
        }

        // GET: api/InsuranceTables
        [HttpGet]
        public async Task<ActionResult<IEnumerable<InsuranceTable>>> GetInsuranceTable()
        {
            return await _context.InsuranceTable.ToListAsync();
        }

        // GET: api/InsuranceTables/5
        [HttpGet("{id}")]
        public async Task<ActionResult<InsuranceTable>> GetInsuranceTable(int id)
        {
            var insuranceTable = await _context.InsuranceTable.FindAsync(id);

            if (insuranceTable == null)
            {
                return NotFound();
            }

            return insuranceTable;
        }

        // PUT: api/InsuranceTables/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInsuranceTable(int id, InsuranceTable insuranceTable)
        {
            if (id != insuranceTable.ApplicationId)
            {
                return BadRequest();
            }

            _context.Entry(insuranceTable).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InsuranceTableExists(id))
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

        // POST: api/InsuranceTables
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<InsuranceTable>> PostInsuranceTable(InsuranceTable insuranceTable)
        {
            _context.InsuranceTable.Add(insuranceTable);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInsuranceTable", new { id = insuranceTable.ApplicationId }, insuranceTable);
        }

        // DELETE: api/InsuranceTables/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<InsuranceTable>> DeleteInsuranceTable(int id)
        {
            var insuranceTable = await _context.InsuranceTable.FindAsync(id);
            if (insuranceTable == null)
            {
                return NotFound();
            }

            _context.InsuranceTable.Remove(insuranceTable);
            await _context.SaveChangesAsync();

            return insuranceTable;
        }

        private bool InsuranceTableExists(int id)
        {
            return _context.InsuranceTable.Any(e => e.ApplicationId == id);
        }
    }
}







//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;
//using GeneralInusranceAPI.Models;

//namespace GeneralInusranceAPI.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class InsuranceTablesController : ControllerBase
//    {
//        private readonly GeneralInsuranceContext _context;

//        public InsuranceTablesController(GeneralInsuranceContext context)
//        {
//            _context = context;
//        }

//        // GET: api/InsuranceTables
//        [HttpGet]
//        public async Task<ActionResult<IEnumerable<InsuranceTable>>> GetInsuranceTable()
//        {
//            return await _context.InsuranceTable.ToListAsync();
//        }

//        // GET: api/InsuranceTables/5
//        [HttpGet("{id}")]
//        public async Task<ActionResult<InsuranceTable>> GetInsuranceTable(int id)
//        {
//            var insuranceTable = await _context.InsuranceTable.FindAsync(id);

//            if (insuranceTable == null)
//            {
//                return NotFound();
//            }

//            return insuranceTable;
//        }

//        // PUT: api/InsuranceTables/5
//        // To protect from overposting attacks, enable the specific properties you want to bind to, for
//        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
//        [HttpPut("{id}")]
//        public async Task<IActionResult> PutInsuranceTable(int id, InsuranceTable insuranceTable)
//        {
//            if (id != insuranceTable.ApplicationId)
//            {
//                return BadRequest();
//            }

//            _context.Entry(insuranceTable).State = EntityState.Modified;

//            try
//            {
//                await _context.SaveChangesAsync();
//            }
//            catch (DbUpdateConcurrencyException)
//            {
//                if (!InsuranceTableExists(id))
//                {
//                    return NotFound();
//                }
//                else
//                {
//                    throw;
//                }
//            }

//            return NoContent();
//        }

//        // POST: api/InsuranceTables
//        // To protect from overposting attacks, enable the specific properties you want to bind to, for
//        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
//        [HttpPost]
//        public async Task<ActionResult<InsuranceTable>> PostInsuranceTable(InsuranceTable insuranceTable)
//        {
//            _context.InsuranceTable.Add(insuranceTable);
//            await _context.SaveChangesAsync();

//            return CreatedAtAction("GetInsuranceTable", new { id = insuranceTable.ApplicationId }, insuranceTable);
//        }

//        // DELETE: api/InsuranceTables/5
//        [HttpDelete("{id}")]
//        public async Task<ActionResult<InsuranceTable>> DeleteInsuranceTable(int id)
//        {
//            var insuranceTable = await _context.InsuranceTable.FindAsync(id);
//            if (insuranceTable == null)
//            {
//                return NotFound();
//            }

//            _context.InsuranceTable.Remove(insuranceTable);
//            await _context.SaveChangesAsync();

//            return insuranceTable;
//        }

//        private bool InsuranceTableExists(int id)
//        {
//            return _context.InsuranceTable.Any(e => e.ApplicationId == id);
//        }
//    }
//}
