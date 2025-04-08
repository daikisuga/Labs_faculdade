progenitor(pietro, joao).
progenitor(pietro, clara).
progenitor(pietro, francisco).
progenitor(pietro, valeria).
progenitor(pietro, ana).

progenitor(antonita, joao).
progenitor(antonita, clara).
progenitor(antonita, francisco).
progenitor(antonita, valeria).
progenitor(antonita, ana).

progenitor(ana, helena).
progenitor(ana, joana).

progenitor(joao, mario).

progenitor(helena, carlos).
progenitor(mario, carlos).

progenitor(clara, pietro2).
progenitor(clara, enzo).

progenitor(jacynto, francisca).
progenitor(jacynto, antonia).
progenitor(claudia, francisca).
progenitor(claudia,antonia).

progenitor(luzia, jacynto).
progenitor(pablo, jacynto).

sexo(pietro,masculino).
sexo(joao,masculino).
sexo(pietro2,masculino).
sexo(francisco,masculino).
sexo(mario,masculino).
sexo(carlos,masculino).
sexo(enzo,masculino).
sexo(jacynto,masculino).
sexo(pablo,masculino).

sexo(clara,feminino).
sexo(valeria,feminino).
sexo(ana,feminino).
sexo(antonita,feminino).
sexo(helena,feminino).
sexo(joana,feminino).
sexo(clara2,feminino).
sexo(francisca,feminino).
sexo(antonia,feminino).
sexo(claudia,feminino).
sexo(luzia,feminino).

avof(X, Y):- progenitor(Z, Y), progenitor(X, Z), sexo(X, feminino), not(X=Y).
avom(X, Y):- progenitor(Z, Y), progenitor(X, Z), sexo(X, masculino), not(X=Y).

tio(X, Y):- progenitor(Z, Y), progenitor(P, Z), progenitor(P, X), sexo(X, masculino), not(X=Z), not(X= Y).
tia(X, Y):- progenitor(Z, Y), progenitor(P, Z), progenitor(P, X), sexo(X, feminino), not(X=Z), not(X= Y).
 
primo(X, Y):- progenitor(T,Y), tio(T,X), sexo(X, masculino), not(X=Y).
primo(X, Y):- progenitor(T,Y), tia(T,X), sexo(X, masculino), not(X=Y).

prima(X, Y):- progenitor(T,Y), tio(T,X), sexo(X, feminino), not(X=Y).
prima(X, Y):- progenitor(T,Y), tia(T,X), sexo(X, feminino), not(X=Y).

descendente(X, Y):- progenitor(Y, X), not(Y=X).
descendente(X, Y):- progenitor(Y, A), descendente(X, A).

ascendente(X, Y):- progenitor(X, Y), not(Y=X).
ascendente(X, Y):- progenitor(X, A), ascendente(A, Y).
