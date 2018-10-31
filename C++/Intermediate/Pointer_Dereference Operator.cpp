#include<iostream>
using namespace std;

int main(){
    int num = 4;
    int* pNum = &num; // this is pointer
    
    int num2 = 25; 
    int &refNum = num2; //this is a reference type

    cout << pNum <<endl;
    cout << *pNum << endl;
    cout << num << endl;
    
    *pNum = 10; // this is a dereference opearator to indirectly change the value of num
    cout << *pNum <<endl;
    cout << num << endl; //spooky, Isn't it ?
    /* using Pointer to change value indirectly and improve efficiency for 
    application performance
    */
    cout << num2 << endl; 
    cout << refNum << endl;
    refNum++; //use reference type refNum can change value of num2 indirectly by passing with value
    cout << num2 << endl;
    cout << refNum << endl;
    return 0;
}