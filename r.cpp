#include<iostream>
#include<vector>
using namespace std;

int main(){
  
    int n, m;
    cout << "Enter the value of n and m: " << endl;
    cin >> n >> m;

    vector<vector<int>> grid(n, vector<int>(m));
    for(int i = 0; i < n; i++){
        for(int j = 0; j < m; j++){
            cin >> grid[i][j];
        }
    }

    for(int i = 0; i < n; i++){
        for(int j = 0; j < m; j++){
            cout << grid[i][j] << " ";
        }cout << endl;
    }
    
  return 0;
}