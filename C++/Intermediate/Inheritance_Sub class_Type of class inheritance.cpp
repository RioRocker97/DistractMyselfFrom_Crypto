#include<iostream>
#include"TankWithSub.h"
int main()
{
    Tank standard;
    heavy T29;
    std::cout<<T29.getTankName()<<std::endl;
    T29.setName("T29");
    standard.setName("Default");

    std::cout<<T29.getTankName()<<" "<<T29.showTypeTank()<<std::endl;
    std::cout<<standard.getTankName()<<" "<<standard.showTypeTank()<<std::endl;

    return 0;    
}