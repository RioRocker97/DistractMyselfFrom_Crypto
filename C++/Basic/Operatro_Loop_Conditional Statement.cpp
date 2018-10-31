#include<iostream>
#include<conio.h>
using namespace std;

int main(){
    int a = 12;
    int b = 10;
    int c = 0;
    cin >> c;
    cout << ( a > b ? a:b ) <<" "<< c;
    //system("cls");
    cout << endl;
    // dont forget to check for infinite loop
    // VS code has no extension for checking infintie loop so you gonna do it by yourself
    for(int i =0;i<=10;i++){
        for(int j=0;j<=i;j++){
            cout <<"**";
        }
        cout << endl;
    }
    for(int i =9;i>=0;i--){
        for(int j=0;j<=i;j++){
            cout <<"**";
        }
        cout << endl;
    }
    return 0;
}