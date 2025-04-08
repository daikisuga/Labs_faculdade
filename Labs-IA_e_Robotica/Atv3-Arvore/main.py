#pip install 
#pip install matplotlib
#pip install pandas

import pandas as pd
import numpy as np
from sklearn import tree, metrics
from sklearn.tree import DecisionTreeClassifier
import matplotlib.pyplot as plt
from scipy.io import arff


data,meta = arff.loadarff('./CriterioProvas.arff')

att = meta.names()
data_value = np.asarray(data)

notas1 = np.asarray(data[att[0]]).reshape(-1,1)
notas2 = np.asarray(data[att[1]]).reshape(-1,1)
percFalta = np.asarray(data[att[2]]).reshape(-1,1)

features = np.concatenate((notas1, notas2, percFalta),axis=1)
target = data[att[-1]]


Arvore = DecisionTreeClassifier(criterion='entropy').fit(features, target)

plt.figure(figsize=(10, 6.5))
tree.plot_tree(Arvore,feature_names=[att[0],att[1],att[2]],class_names=['Aprovado', 'Reprovado'],
                   filled=True, rounded=True)
plt.show()

fig, ax = plt.subplots(figsize=(25, 10))
metrics.ConfusionMatrixDisplay.from_estimator(Arvore,features,target,display_labels=['Aprovado', 'Reprovado'], values_format='d', ax=ax)
plt.show()
