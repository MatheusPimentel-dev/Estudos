using System.ComponentModel.DataAnnotations;

namespace projetowebapi.Models
{
    public class Aluno
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "O campo nome é obrigatório.")]
        [MaxLength(50, ErrorMessage = "O campo nome deve conter no máximo 50 caracteres")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "O campo RA é obrigatório.")]
        [MaxLength(10, ErrorMessage = "O campo RA deve conter entre 5 e 10 caracteres")]
        [MinLength(5, ErrorMessage = "O campo RA deve conter entre 5 e 10 caracteres")]
        public string Ra { get; set; }
    }
}