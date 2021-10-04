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
    public class ClaimRequestTablesController : ControllerBase
    {
        private readonly GeneralInsuranceContext _context;

        public ClaimRequestTablesController(GeneralInsuranceContext context)
        {
            _context = context;
        }

        // GET: api/ClaimRequestTables
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClaimRequestTable>>> GetClaimRequestTable()
        {
           return Ok(_context.ClaimRequestTable.Where(x => x.ClaimStatus == "Pending"));
           // return await _context.ClaimRequestTable.ToListAsync();
        }

        // GET: api/ClaimRequestTables/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserTable>> GetClaimRequestTable(int id)
        {
            //            var claimRequestTable = await _context.ClaimRequestTable.FindAsync(id);
            var claimRequestTable = await _context.PolicyTable.FindAsync(id);

            if (claimRequestTable == null)
            {
                return BadRequest("policy no");
            }
            else
            {

                //return Ok(_context.UserTable.Select(x => x.InsuranceTable.Select(y => y.PolicyTable.Where(z => z.PolicyNo == id).Select(z => new { x.ContactNo }))));
                //return Ok(_context.UserTable.Where(x => x.InsuranceTable.Where(y => y.PolicyTable.where(z => z.PolicyNo == id).Select(z => new { x.ContactNo }))));
                return Ok(_context.PolicyTable.Where(x => x.PolicyNo == id).Select(y => y.Application.User));
            }

        }

        // PUT: api/ClaimRequestTables/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}/{status}")]
        public async Task<IActionResult> PutClaimRequestTable(int id, string status, ClaimRequestTable claimRequestTable)
        {
            var claimRequestdata = _context.ClaimRequestTable.Where(x => x.ClaimRequestId == id).FirstOrDefault();
            if (claimRequestdata == null)
            {
                return BadRequest();
            }
            // claimRequestTable.ClaimStatus = status;
            claimRequestdata.ClaimStatus = status;
            //claimRequestdata = claimRequestTable;
            _context.Entry(claimRequestdata).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClaimRequestTableExists(id))
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


        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutClaimRequestTable(int id, string status)
        //{
        //    var claimRequestdata = _context.ClaimRequestTable.Where(x => x.ClaimRequestId == id).FirstOrDefault();
        //    if (claimRequestdata == null)
        //    {
        //        return BadRequest();
        //    }
        //    //claimRequestTable.ClaimStatus = claimRequestTable.ClaimStatus;
        //    if(claimRequestdata.ClaimStatus=="Pending")
        //    {
        //        claimRequestdata .= claimRequestTable;

        //    }

        //    _context.Entry(claimRequestTable).State = EntityState.Modified;
        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!ClaimRequestTableExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        // POST: api/ClaimRequestTables
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ClaimRequestTable>> PostClaimRequestTable(ClaimRequestTable claimRequestTable)
        {
            _context.ClaimRequestTable.Add(claimRequestTable);
            await _context.SaveChangesAsync();
            return Ok();
            //return CreatedAtAction("GetClaimRequestTable", new { id = claimRequestTable.ClaimRequestId }, claimRequestTable);
        }

        // DELETE: api/ClaimRequestTables/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ClaimRequestTable>> DeleteClaimRequestTable(int id)
        {
            var claimRequestTable = await _context.ClaimRequestTable.FindAsync(id);
            if (claimRequestTable == null)
            {
                return NotFound();
            }

            _context.ClaimRequestTable.Remove(claimRequestTable);
            await _context.SaveChangesAsync();

            return claimRequestTable;
        }

        private bool ClaimRequestTableExists(int id)
        {
            return _context.ClaimRequestTable.Any(e => e.ClaimRequestId == id);
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
//    public class ClaimRequestTablesController : ControllerBase
//    {
//        private readonly GeneralInsuranceContext _context;


//        public ClaimRequestTablesController(GeneralInsuranceContext context)
//        {
//            _context = context;
//        }

//        // GET: api/ClaimRequestTables
//        [HttpGet]
//        public async Task<ActionResult<IEnumerable<ClaimRequestTable>>> GetContact(ClaimRequestTable claimRequestTable)
//        {

//            //return Ok(_context.UserTable.Select(x => x.InsuranceTable.Select(y => y.PolicyTable.Where(z => z.PolicyNo == claimRequestTable.PolicyNo).select(DivideByZeroException => new { x.ContactNo }))));

//          //var x=_context.UserTable.Find(claimRequestTable.)




//            // var s= _context.ClaimRequestTable.
//            return await _context.ClaimRequestTable.ToListAsync();
//        }

//        // GET: api/ClaimRequestTables/5
//        [HttpGet("{id}")]
//        public async Task<ActionResult<ClaimRequestTable>> GetClaimRequestTable(int id)
//        {
//            var claimRequestTable = await _context.PolicyTable.FindAsync(id);

//            if (claimRequestTable == null)
//            {
//                return BadRequest("policy no");
//            }
//            else
//            {

//                //return Ok(_context.UserTable.Select(x => x.InsuranceTable.Select(y => y.PolicyTable.Where(z => z.PolicyNo == id).Select(z => new { x.ContactNo }))));
//                //return Ok(_context.UserTable.Where(x => x.InsuranceTable.Where(y => y.PolicyTable.where(z => z.PolicyNo == id).Select(z => new { x.ContactNo }))));
//                return Ok(_context.PolicyTable.Where(x => x.PolicyNo == id).Select(y => y.Application.User.ContactNo));
//            }

//        }

//        // PUT: api/ClaimRequestTables/5
//        // To protect from overposting attacks, enable the specific properties you want to bind to, for
//        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
//        [HttpPut("{id}")]
//        public async Task<IActionResult> PutClaimRequestTable(int id, ClaimRequestTable claimRequestTable)
//        {
//            if (id != claimRequestTable.ClaimRequestId)
//            {
//                return BadRequest();
//            }

//            _context.Entry(claimRequestTable).State = EntityState.Modified;

//            try
//            {
//                await _context.SaveChangesAsync();
//            }
//            catch (DbUpdateConcurrencyException)
//            {
//                if (!ClaimRequestTableExists(id))
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

//        // POST: api/ClaimRequestTables
//        // To protect from overposting attacks, enable the specific properties you want to bind to, for
//        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
//        [HttpPost]
//        public async Task<ActionResult<ClaimRequestTable>> ClaimRequest(ClaimRequestTable claimRequestTable)
//        {





//            _context.ClaimRequestTable.Add(claimRequestTable);
//            await _context.SaveChangesAsync();
//            return Ok();

//            //return CreatedAtAction("GetClaimRequestTable", new { id = claimRequestTable.ClaimRequestId }, claimRequestTable);
//        }

//        // DELETE: api/ClaimRequestTables/5
//        [HttpDelete("{id}")]
//        public async Task<ActionResult<ClaimRequestTable>> DeleteClaimRequestTable(int id)
//        {
//            var claimRequestTable = await _context.ClaimRequestTable.FindAsync(id);
//            if (claimRequestTable == null)
//            {
//                return NotFound();
//            }

//            _context.ClaimRequestTable.Remove(claimRequestTable);
//            await _context.SaveChangesAsync();

//            return claimRequestTable;
//        }

//        private bool ClaimRequestTableExists(int id)
//        {
//            return _context.ClaimRequestTable.Any(e => e.ClaimRequestId == id);
//        }
//    }
//}
