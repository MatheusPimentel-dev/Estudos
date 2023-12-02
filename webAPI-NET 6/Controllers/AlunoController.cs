using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using projetowebapi.Persistence;
using projetowebapi.Models;
using Microsoft.EntityFrameworkCore;

namespace projetowebapi.Controllers
{
    [ApiController]
    [Route("v1/alunos")]
    public class AlunoController : ControllerBase
    {
        [HttpGet]
        [Route("")]
        public async Task<ActionResult<List<Aluno>>> Get([FromServices] Context context)
        {
            var alunos = await context.Alunos.ToListAsync();
            return Ok(alunos);
        }

        [HttpPost]
        [Route("")]
        public async Task<ActionResult<Aluno>> Post([FromServices] Context context, [FromBody] Aluno aluno)
        {
            if (ModelState.IsValid)
            {
                context.Alunos.Add(aluno);
                await context.SaveChangesAsync();
                return aluno;
            }
            else
            {
                return BadRequest(ModelState);
            }
        }
    }
}