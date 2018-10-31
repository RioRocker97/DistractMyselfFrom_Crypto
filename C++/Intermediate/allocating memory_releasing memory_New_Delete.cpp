#include<iostream>
//using namespace std;
// use using namespace can be quite frustrating when coding lot of namespace
// might want to practice to use it manually now
int main(){
    // this is how we allocate variable to the memory
    // using new to declare memory that we have claimed this obj to memory
    int *pint = new int ;
    double *pDouble = new double;
    // store some value to variable
    *pint = 3;
    *pDouble = 3.5; 

    std::cout << *pint << std::endl;
    std::cout << *pDouble << std::endl;

    //pint++;
    //pDouble++;
    *pint = 20;
    *pDouble = 4.5;
    // notice something different ? both address have been changed coz we add value to both var.
    std::cout << sizeof(*pint) << " " << pint << std::endl;
    std::cout << sizeof(*pDouble) << " " << pDouble << std::endl;

    //std::cout << *pint << std::endl;
    //std::cout << *pDouble << std::endl;

    delete pint;
    delete pDouble;

    std::cout << "Is my variables have been deleted ?" << std::endl;
    //std::cout << *pint << std::endl;
    //std::cout << *pDouble << std::endl;
    return 0;
}