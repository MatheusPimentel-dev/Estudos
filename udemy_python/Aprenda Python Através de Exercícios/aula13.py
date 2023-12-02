#Entra de dados
A, B, C = input().split()

#Processamento
ganhador = None
if A != B and A != C:
    ganhador = "A"
elif B != A and B != C:
    ganhador = "B"
elif C != A and C != B:
    ganhador = "C"
else:
    ganhador = "*"


#Saida do Programa
print(ganhador)