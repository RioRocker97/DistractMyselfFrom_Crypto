#include<iostream>
#include"house.h"
#include"father.h"
//using keyword protected to let subclass gain access to private member in main class 
//but close to the main world

int main()
{
    father daddy ;

    std::cout << daddy.showmember() << std::endl;
    return 0;
}