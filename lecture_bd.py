#!/usr/bin/python
# -*- coding: utf-8 -*-
#Etape I: Lire un fichier csv sur mon terminal

import csv
#
with open('bd_dromy_avril_autre_format.csv', newline='') as csvfile:
   spamreader = csv.reader(csvfile, delimiter=' ', quotechar='|')
   for row in spamreader:
       print(', '.join(row))

#Etape II: lire un fichier XLs sur mon terminal

#import pandas as pd
#import numpy as np
#import xlrd 

#xls = pd.ExcelFile("bd_dromy-avril.xls")
#my_xls = xlrd.open_workbook('bd_dromy-avril.xls',encoding_override="gb2312")
#sheetX = xls.parse(2) #2 is the sheet number
#xls.parse('Index Constituents Data', index_col=None, na_values=[’NA’])
# 
# var1 = sheetX['ColumnName']
# 
#print(var1[1]) #1 is the row number...
 
