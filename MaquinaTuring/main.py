palavra = str(input())

p = ["_"]*(len(palavra)+2)

for i in range(len(p)-1):
  p[0] = "q1"
  p[i] = palavra[i-1]


print(*p, sep= " ")

e = ["q1", "q2", "q3", "q4", "q5", "q6","q7", "q8", "aceita"]
aceitacao = e[8]
  
atual = e[0]

dic = {
      "q1": {"1": ("q3", "x", "D"),
            "0": ("q2", "x", "D"),
            "#": ("q8", None, "D")},
      
      "q2": {"0": ("q2", None, "D"),
            "1": ("q2", None, "D"),
            "#":("q4", None, 'D')},
      
      "q3": {"0": ("q3", None, "D"),
            "1": ("q3", None, "D"),
            "#":("q5", None, 'D')},
      
      "q4": {"x":("q4", None, 'D'),
            "0": ("q6", "x", "E"),
            "1": ("rejeita", None, None)},
      
      "q5":{"x": ("q5", None, "D"),
            "1": ("q6", "x", "E"),
            "0": ("rejeita", None, None)},
      
      "q6": {"0" : ("q6", None, "E"),
            "1": ("q6", None, "E"),
            "x": ("q6", None, "E"),
            "#": ("q7", None, "E")},
      
      "q7":{"0": ("q7", None, "E"),
            "1": ("q7", None, "E"),
            "x": ("q1", None, "D")},
      
      "q8" :{"_": ("aceita", None, "D"), 
            "x": ("q8", None, "D"),}
  
}


pos = 1
pos_e = 0

while True:
      
      #captura tupla do dic (estado_novo, troca, direcao)
      tup = dic[atual][p[pos]]
      
      atual = tup[0]
      p[pos_e] = atual
      troca = tup[1]
      
      if troca is not None:
            p[pos] = troca
            
     

      if tup[2] == "D":
            aux1, aux2 = p[pos], p[pos_e]
            p[pos], p[pos_e] = aux2, aux1
            pos += 1
            pos_e += 1

      elif tup[2] == "E":
            aux1, aux2 = p[pos_e-1], p[pos_e]
            p[pos_e-1], p[pos_e] = aux2, aux1
            pos -= 1
            pos_e -= 1
                  
      if atual =="aceita" or atual == "rejeita":
            print(atual)
            break



      print(*p, sep= " ")
