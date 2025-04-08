
import numpy as np
import skfuzzy as fuzz
import matplotlib.pyplot as plt
from skfuzzy import control as ctrl

#Variaveis de Entrada (Antecedent)
comer = ctrl.Antecedent(np.arange(0, 11, 1), 'comer')
# exerc = ctrl.Antecedent(np.arange(0,25,1),'exerc')

#Variaveis de saída (Consequent)
peso = ctrl.Consequent(np.arange(0, 16, 1), 'ganhopeso')



# automf -> Atribuição de categorias automaticamente

comer['pouco'] = fuzz.trapmf(comer.universe,[-1,0,2,4])
comer['razoavel'] = fuzz.trapmf(comer.universe,[2,4,6,8])
comer['bastante'] = fuzz.trapmf(comer.universe,[4,6,16,20])

#exerc.automf(names = ["pouco","maisoumenos","bastante"],)

# atribuicao sem o automf
peso['leve'] = fuzz.trapmf(peso.universe, [-1,0,4,6])
peso['medio'] = fuzz.trapmf(peso.universe,[4,6,8,10])
peso['pesado'] = fuzz.trapmf(peso.universe, [8,10,16,20])

# peso['leve'] = fuzz.gaussmf(peso.universe, 0,2)
# peso['medio'] = fuzz.gaussmf(peso.universe,7,3)
# peso['pesado'] = fuzz.gaussmf(peso.universe, 14,2)

# peso['leve'] = fuzz.trimf(peso.universe, [-1,1,4])
# peso['medio'] = fuzz.trimf(peso.universe,[2,5,8])
# peso['pesado'] = fuzz.trimf(peso.universe, [4,10,16])




#Visualizando as variáveis
# exerc.view()
peso.view()
comer.view()




#Criando as regras
# regra_1 = ctrl.Rule(comer['pouco'] | exerc["bastante"] , peso['leve'])
# regra_2 = ctrl.Rule(comer['razoavel'] | exerc["maisoumenos"] , peso['medio'])
# regra_3 = ctrl.Rule(comer['bastante'] | exerc["pouco"], peso['pesado'])

regra_1 = ctrl.Rule(comer['pouco'] , peso['leve'])
regra_2 = ctrl.Rule(comer['razoavel'] , peso['medio'])
regra_3 = ctrl.Rule(comer['bastante'] , peso['pesado'])


controlador = ctrl.ControlSystem([regra_1, regra_2, regra_3])


#Simulando
CalculoPeso = ctrl.ControlSystemSimulation(controlador)

Qtcomida = int(input('Qt Calorias: '))
# Qtexerc = int(input("qt horas exercitadas: "))

CalculoPeso.input['comer'] = Qtcomida
# CalculoPeso.input['exerc'] = Qtexerc
CalculoPeso.compute()





# exerc.view(sim=CalculoPeso)
comer.view(sim=CalculoPeso)
peso.view(sim=CalculoPeso)

plt.show()
