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
    public class PolicyTablesController : ControllerBase
    {
        private readonly GeneralInsuranceContext _context;

        public PolicyTablesController(GeneralInsuranceContext context)
        {
            _context = context;
        }

        // GET: api/PolicyTables
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PolicyTable>>> GetPolicyTable()
        {
            return await _context.PolicyTable.ToListAsync();
        }

        // GET: api/PolicyTables/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<PolicyTable>> GetPolicyTable(int id)
        //{

        //    //return Ok(_context.UserTable.Select(x=>x.InsuranceTable.Select
        //    //(y=>y.PolicyTable.Where(z=>z.PolicyNo==id).Select
        //    //    (z=>new { x.ContactNo }))));



        //    var policyTable = await _context.PolicyTable.FindAsync(id);

        //    if (policyTable == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(_context.PolicyTable.Where(x => x.PolicyNo == id));
        //    //return policyTable;
        //}
        [HttpGet("{id}")]
        public async Task<ActionResult<PolicyTable>> GetPolicyTable(int id)
        {

            //return Ok(_context.UserTable.Select(x=>x.InsuranceTable.Select
            //(y=>y.PolicyTable.Where(z=>z.PolicyNo==id).Select
            //    (z=>new { x.ContactNo }))));



            var policyTable = await _context.PolicyTable.FindAsync(id);

            if (policyTable == null)
            {
                return NotFound();
            }

            //return Ok(_context.PolicyTable.Where(x => x.PolicyNo == id));
            return policyTable;
        }
        // PUT: api/PolicyTables/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutPolicyTable(int id, string status)
        //{
        //    var policytable = _context.PolicyTable.Where(x => x.ApplicationId == id).FirstOrDefault();
        //    if (policytable == null)
        //    {
        //        return BadRequest();
        //    }
        //    policytable.PolicyStatus = status;
        //    _context.Entry(policytable).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!PolicyTableExists(id))
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

        [HttpPut("{id}/{status}")]
        public async Task<IActionResult> PutPolicyTable(int id, string status, PolicyTable policytable1)
        {
            var policytable = _context.PolicyTable.Where(x => x.PolicyNo == id && x.PolicyStatus == "Active").FirstOrDefault();
            if (policytable == null)
            {
                return BadRequest();
            }
            policytable.PolicyStatus = "Expired";
            _context.Entry(policytable).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PolicyTableExists(id))
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

        // POST: api/PolicyTables
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<PolicyTable>> PostPolicyTable(PolicyTable policyTable)
        {
            _context.PolicyTable.Add(policyTable);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPolicyTable", new { id = policyTable.PolicyNo }, policyTable);
        }

        // DELETE: api/PolicyTables/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<PolicyTable>> DeletePolicyTable(int id)
        {
            var policyTable = await _context.PolicyTable.FindAsync(id);
            if (policyTable == null)
            {
                return NotFound();
            }

            _context.PolicyTable.Remove(policyTable);
            await _context.SaveChangesAsync();

            return policyTable;
        }

        private bool PolicyTableExists(int id)
        {
            return _context.PolicyTable.Any(e => e.PolicyNo == id);
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
//    public class PolicyTablesController : ControllerBase
//    {
//        private readonly GeneralInsuranceContext _context;

//        public PolicyTablesController(GeneralInsuranceContext context)
//        {
//            _context = context;
//        }

//        // GET: api/PolicyTables
//        [HttpGet]
//        public async Task<ActionResult<IEnumerable<PolicyTable>>> GetPolicyTable()
//        {
//            return await _context.PolicyTable.ToListAsync();
//        }

//        // GET: api/PolicyTables/5
//        [HttpGet("{id}")]
//        public async Task<ActionResult<PolicyTable>> GetPolicyTable(int id)
//        {
//            var policyTable = await _context.PolicyTable.FindAsync(id);

//            if (policyTable == null)
//            {
//                return NotFound();
//            }

//            return policyTable;
//        }

//        // PUT: api/PolicyTables/5
//        // To protect from overposting attacks, enable the specific properties you want to bind to, for
//        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
//        [HttpPut("{id}")]
//        public async Task<IActionResult> PutPolicyTable(int id, PolicyTable policyTable)
//        {
//            if (id != policyTable.PolicyNo)
//            {
//                return BadRequest();
//            }

//            _context.Entry(policyTable).State = EntityState.Modified;

//            try
//            {
//                await _context.SaveChangesAsync();
//            }
//            catch (DbUpdateConcurrencyException)
//            {
//                if (!PolicyTableExists(id))
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

//        // POST: api/PolicyTables
//        // To protect from overposting attacks, enable the specific properties you want to bind to, for
//        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
//        [HttpPost]
//        public async Task<ActionResult<PolicyTable>> PostPolicyTable(PolicyTable policyTable)
//        {
//            _context.PolicyTable.Add(policyTable);
//            await _context.SaveChangesAsync();

//            return CreatedAtAction("GetPolicyTable", new { id = policyTable.PolicyNo }, policyTable);
//        }

//        // DELETE: api/PolicyTables/5
//        [HttpDelete("{id}")]
//        public async Task<ActionResult<PolicyTable>> DeletePolicyTable(int id)
//        {
//            var policyTable = await _context.PolicyTable.FindAsync(id);
//            if (policyTable == null)
//            {
//                return NotFound();
//            }

//            _context.PolicyTable.Remove(policyTable);
//            await _context.SaveChangesAsync();

//            return policyTable;
//        }

//        private bool PolicyTableExists(int id)
//        {
//            return _context.PolicyTable.Any(e => e.PolicyNo == id);
//        }
//    }
//}
