import 'package:projeto_inicial/projeto_inicial.dart' as projeto_inicial;

void main() {
  /// Comentário de Documentação

  int idade = 22;
  double altura = 1.86;
  double expone = 780e6;
  bool geek = true;
  const String nome = 'Matheus Pimentel';
  final String apelido = 'Pimentel';
  bool maiorDeIdade;
  int energia = 100;

  //Verificando se o usuário é maior de idade
  if (idade >= 18) {
    maiorDeIdade = true;
  } else {
    maiorDeIdade = false;
  }

  //Quantas linhas podemos imprimir
  for (int i = 0; i < 5; i++) {
    print('Total de linhas: $i');
  }

  //Quantas repetições pode ser feita
  while (energia > 0) {
    print('Mais uma repetição');
    energia = energia - 10;
  }

  //Lista de String
  //List<String> listanomes = ['Ricarth', 'Natália', 'Alex', 'Ândriu', 'André'];
  //TODO: Fazer outras repetições

  //Lista dos usuários
  List<dynamic> matheus = [idade, altura, geek, nome, apelido];

  String frase = 'Eu sou ${matheus[4]} '
      'mas meu nome completo é: ${matheus[3]}. \n'
      'Tenho ${matheus[1]} de altura e'
      ' tenho ${matheus[0]} anos de idade \n'
      'Eu sou maior de idade? $maiorDeIdade';

  print(frase);
}
