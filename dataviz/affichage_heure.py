#!/usr/bin/python
# -*- coding: utf-8 -*-

import pandas as pd
import matplotlib.pyplot as plt
import xlrd
import csv 


df = pd.read_excel("bd_dromy.csv","sheet1")
heurelist = df['Heure'].values.tolist()

print(Heurelist)

plt.hist(Heurelist, bins=5)
plt.title('Heure plannifiée')
plt.ylabel('')
plt.xlabel('')
plt.show()

