using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GeneralInsuranceAPI.Models;

namespace GeneralInsurance.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClaimTablesController : ControllerBase
    {
        private readonly GeneralInsuranceContext _context;

        public ClaimTablesController(GeneralInsuranceContext context)
        {
            _context = context;
        }

        // GET: api/ClaimTables
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClaimTable>>> GetClaimTable()
        {
            return await _context.ClaimTable.ToListAsync();
        }

        // GET: api/ClaimTables/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ClaimRequestTable[]>> GetClaimTable(int id)
        {
            //var claimTable = await _context.ClaimTable.FindAsync(id);

            //return Ok(_context.ClaimRequestTable.Where(x => x.PolicyNoNavigation.Application.UserId == id && x.ClaimStatus == "Approved").Select(y=>new { y.PolicyNo, y.RequestCreatedDate, y.ClaimTable });
            //return Ok(_context.ClaimTable.Where(x => x.ClaimRequest.PolicyNoNavigation.Application.UserId == id && x.ClaimRequest.ClaimStatus == "Approved").
            //  Select(y => new { y.ClaimRequest.PolicyNo, y.ClaimRequest.RequestCreatedDate, y.ClaimAmount }));

            //return Ok(_context.ClaimTable.Where(x => x.ClaimRequest.PolicyNoNavigation.Application.UserId == id ).
            //Select(y => new { y.ClaimRequest.PolicyNo, y.ClaimRequest.RequestCreatedDate, y.ClaimAmount, y.ClaimRequest.ClaimStatus }));

            //return Ok(_context.ClaimRequestTable.Where(x => x.PolicyNoNavigation.Application.UserId == id).
            //    Select(y => new { y.PolicyNo, y.RequestCreatedDate, y.PolicyNoNavigation.Application.PolicyTable
            //    , y.ClaimStatus }));)

            var claim = from c in _context.ClaimRequestTable
                        join ct in _context.ClaimTable on c.ClaimRequestId equals ct.ClaimRequestId
                        where
c.PolicyNoNavigation.Application.UserId == id
                        select new { ct.ClaimAmount, c.RequestCreatedDate, c.PolicyNo, c.ClaimStatus, c.ClaimRequestId };
            return Ok(claim);


           // return Ok(_context.ClaimRequestTable.Where(x => x.PolicyNoNavigation.Application.UserId == id));


            //if (claimTable == null)
            //{
            //    return NotFound();
            //}

            //return claimTable;
        }

        // PUT: api/ClaimTables/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClaimTable(int id, ClaimTable claimTable)
        {
            if (id != claimTable.ClaimNo)
            {
                return BadRequest();
            }

            _context.Entry(claimTable).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClaimTableExists(id))
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

        // POST: api/ClaimTables
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ClaimTable>> PostClaimTable(ClaimTable claimTable)
        {
            _context.ClaimTable.Add(claimTable);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClaimTable", new { id = claimTable.ClaimNo }, claimTable);
        }

        // DELETE: api/ClaimTables/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ClaimTable>> DeleteClaimTable(int id)
        {
            var claimTable = await _context.ClaimTable.FindAsync(id);
            if (claimTable == null)
            {
                return NotFound();
            }

            _context.ClaimTable.Remove(claimTable);
            await _context.SaveChangesAsync();

            return claimTable;
        }

        private bool ClaimTableExists(int id)
        {
            return _context.ClaimTable.Any(e => e.ClaimNo == id);
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
//using GeneralInsuranceAPI.Models;

//namespace GeneralInsuranceAPI.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class ClaimTablesController : ControllerBase
//    {
//        private readonly GeneralInsuranceContext _context;

//        public ClaimTablesController(GeneralInsuranceContext context)
//        {
//            _context = context;
//        }

//        // GET: api/ClaimTables
//        [HttpGet]
//        public async Task<ActionResult<IEnumerable<ClaimTable>>> GetClaimTable()
//        {
//            return await _context.ClaimTable.ToListAsync();
//        }

//        // GET: api/ClaimTables/5
//        [HttpGet("{id}")]
//        public async Task<ActionResult<ClaimTable>> GetClaimTable(int id)
//        {
//            var claimTable = await _context.ClaimTable.FindAsync(id);

//            if (claimTable == null)
//            {
//                return NotFound();
//            }

//            return claimTable;
//        }

//        // PUT: api/ClaimTables/5
//        // To protect from overposting attacks, enable the specific properties you want to bind to, for
//        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
//        [HttpPut("{id}")]
//        public async Task<IActionResult> PutClaimTable(int id, ClaimTable claimTable)
//        {
//            if (id != claimTable.ClaimNo)
//            {
//                return BadRequest();
//            }

//            _context.Entry(claimTable).State = EntityState.Modified;

//            try
//            {
//                await _context.SaveChangesAsync();
//            }
//            catch (DbUpdateConcurrencyException)
//            {
//                if (!ClaimTableExists(id))
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

//        // POST: api/ClaimTables
//        // To protect from overposting attacks, enable the specific properties you want to bind to, for
//        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
//        [HttpPost]
//        public async Task<ActionResult<ClaimTable>> PostClaimTable(ClaimTable claimTable)
//        {
//            _context.ClaimTable.Add(claimTable);
//            await _context.SaveChangesAsync();

//            return CreatedAtAction("GetClaimTable", new { id = claimTable.ClaimNo }, claimTable);
//        }

//        // DELETE: api/ClaimTables/5
//        [HttpDelete("{id}")]
//        public async Task<ActionResult<ClaimTable>> DeleteClaimTable(int id)
//        {
//            var claimTable = await _context.ClaimTable.FindAsync(id);
//            if (claimTable == null)
//            {
//                return NotFound();
//            }

//            _context.ClaimTable.Remove(claimTable);
//            await _context.SaveChangesAsync();

//            return claimTable;
//        }

//        private bool ClaimTableExists(int id)
//        {
//            return _context.ClaimTable.Any(e => e.ClaimNo == id);
//        }
//    }
//}
