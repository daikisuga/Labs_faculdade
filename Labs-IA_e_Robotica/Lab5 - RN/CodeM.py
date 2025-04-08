import numpy as np
import matplotlib.pyplot as plt
from sklearn.neural_network import MLPRegressor

print('Carregando Arquivo de teste')
arquivo = np.load('teste3.npy')
x = arquivo[0]
y = np.ravel(arquivo[1])
l = []

iteracoes = 50000
for i in range(10):
    regr = MLPRegressor(hidden_layer_sizes=(20,20),
                        max_iter=iteracoes,
                        activation='tanh', #{'identity', 'logistic', 'tanh', 'relu'},
                        solver='adam',
                        learning_rate = 'adaptive',
                        n_iter_no_change=iteracoes)
    print('Treinando RNA')
    regr = regr.fit(x,y)

    print('Preditor')
    y_est = regr.predict(x)

    plt.figure(figsize=[14,7])

    #plot curso original
    plt.subplot(1,3,1)
    plt.title("Original")
    plt.plot(x,y)

    #plot aprendizagem
    plt.subplot(1,3,2)
    plt.title("Erro: %f"%regr.best_loss_)
    plt.plot(regr.loss_curve_)
    print(regr.best_loss_)
    l.append(regr.best_loss_)

    #plot regressor
    plt.subplot(1,3,3)
    plt.title("Regressor")
    plt.plot(x,y,linewidth=1,color='yellow')
    plt.plot(x,y_est,linewidth=2)

print(l)

print("Media: ",(sum(l))/10)
print("Desvio Padrao: ", np.std(l))
print("Menor valor = %s na posicao %s"%(min(l),l.index(min(l))+1))
plt.show()
print("Media: ",(sum(l))/10)
print("Desvio Padrao: ", np.std(l))
print("Menor valor = %s na posicao %s"%(min(l),l.index(min(l))+1))
