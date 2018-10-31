#include<iostream>
using namespace std;
/* passByValue function show that when you pass num though this function 
the value of i is changing but num still stay the same coz the function just copy 
value one to another sending num which is 3 to i 
*/
void passByValue(int i){
    i++;
    cout << "In passByValue()" << endl;
    cout << "i is now " << i << " it address is " << &i << endl;
}
/* passByRef function show that when you pass num with reference type
it will allow i to pass value directly to num in memory. if we add 1 to i in this function,
it will pass value of i through num too .
*/
void passByRef(int &i){
    i++;
    cout << "In passByRef()" << endl;
    cout << "i is now " << i << " it address is " << &i << endl;
}
int main(){
     int num = 3;
    cout << "In main()" << endl;
    cout << "Value of num is " << num << endl;

    passByValue(num);

    cout << "Back in main and the value of num is  " << num  << "it address is " << &num << endl;
    // as the result , the address of i and num is different coz they are two different obj.
    passByRef(num);

    cout << "Back in main and the value of num is  " << num << "it address is " << &num << endl;
    // as the result , the address of i and num is the same coz i is a reference type of num
    return 0;
}