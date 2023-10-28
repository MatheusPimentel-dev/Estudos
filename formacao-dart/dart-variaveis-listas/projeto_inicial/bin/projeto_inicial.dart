import 'package:projeto_inicial/projeto_inicial.dart' as projeto_inicial;

void main() {
  int idade = 22;
  double altura = 1.86;
  double expone = 780e6;
  bool geek = (idade < 20);

  String nome = 'Matheus Pimentel';
  String apelido = 'Pimentel';

  String frase = 'Eu sou $apelido'
      'mas meu nome completo é: $nome. \n'
      'Tenho $altura de altura e'
      'tenho $idade anos de idade';

  List<String> listanomes = ['Ricarth', 'Natália', 'Alex', 'Ândriu', 'André'];

  // print(idade);
  // print(altura);
  // print(expone);
  // print(geek);
  print(listanomes.length);
}
