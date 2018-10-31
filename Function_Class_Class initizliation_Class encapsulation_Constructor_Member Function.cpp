#include<iostream>
using namespace std;

/*
inline keyword use to declare function that it will replace your function that been declared 
in your main code with body of the function . this will save on overheard the function but 
if the body contain loop , it will waste memory space
*/

/*inline int some(int x,int y){
    return x*y;
}*/
// dont forget to initialze the object from created-class
class car{
    
    public:

        car(string n, int num) // this is a constructor with parameter [like Java]
        {
            name = n;
            type = "Type 3";
            date = num;
        }

        string get_type() { return type; } // this is a member function for class [like Method in Java]

    private:
        string name;
        string type;
        int date ;
};

int some(int x, int y){
    return x*y;
}

car testclass(string n, int num){
    car mustang(n,num);
    /*mustang.name = n;
    mustang.date = num;
    mustang.type = "type 1";
    */
    return mustang;
}

int main(){
    car Mycar = testclass("Ford",1989);
    cout << some(5,10) << endl << Mycar.get_type();
    return 0;
}