#include <iostream>
#include <vector>

int main() {
	std::vector<int> tab;
	int e;
	do {
		std::cout << "entrer un entier";
		std::cin >> e;
		tab.push_back(e);
	}
	while(e>=0);

	for(int i: tab)
		std::cout << i << " ";
	return 0;
}

