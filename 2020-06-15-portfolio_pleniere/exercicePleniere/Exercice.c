#include <stdio.h>
#include <stdlib.h>

int main(){
  int * tab;
  int e;
  int count = 0;
  
  tab = malloc(sizeof(int));

  do {
    tab = realloc(tab, (count+1)*sizeof(int));
    scanf("%d",&e);
    tab[count]=e;
    count++;
  } while(e>=0);

  for(int i=0; i<count; i++){
    printf("%d ", tab[i]);
  }

  free(tab);
  return 0;
}
