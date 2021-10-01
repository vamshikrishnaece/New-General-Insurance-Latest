using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;

namespace GeneralInsurance.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ForgotController : ControllerBase
    {
        [HttpGet("{To}")]
        public IActionResult SendMail(string To)
        {
            string from = "testemailforinsurance@gmail.com";
            string Subject = "This is verification mail";
            string code = GetVerificationCode(6);
            string Body = "Your verification code is:\n" + code;
            MailMessage mail = new MailMessage(from, To);
            mail.Subject = Subject;
            mail.Body = Body;

            //Attachment attachment = new Attachment(@"");
            //mail.Attachments.Add(attachment);
            SmtpClient client = new SmtpClient("smtp.gmail.com", 587);

            client.Credentials = new System.Net.NetworkCredential()
            {
                UserName = "testemailforinsurance@gmail.com",
                Password = "Abcd@123"

            };
            client.EnableSsl = true;
            client.Send(mail);
            return Ok(code);
        }
        public static string GetVerificationCode(int length)
        {
            char[] chArray = "1234567890".ToCharArray();
            string str = string.Empty;
            Random random = new Random();
            for (int i = 0; i < length; i++)
            {
                int index = random.Next(1, chArray.Length);
                if (!str.Contains(chArray.GetValue(index).ToString()))
                {
                    str = str + chArray.GetValue(index);
                }
                else
                {
                    i--;
                }
            }
            return str;
        }
    }
}
