#include<iostream>
#include"Tank.h"
// this is how you created Namespace for reducing time to code
// very useful but could be confusing if i use it too much
namespace Move
{
    int add_Speed(Tank t,int add)
        {
            return t.GetSpeed() + add ;
        }
} 
// declare to use namespace Move
using namespace Move;
int main()
{
    /* i have declared new object in my program and tell the memory to reserve 
    place for my objects by using pointer
    */
    Tank *MyTank = new Tank();
    Tank *Tank2 = new Tank("Walker Bulldog","M19a7");
    Tank *AnotherTank = new Tank("Tiger I","Pak 88",50);

    Tank t = Tank("M4 Sherman","M98A4");
    Tank &refTank = t;
    // using -> equal (*MyTank).GetName which is basically how to call method in pointer 
    std::cout << MyTank->GetName() << std::endl;
    std::cout << Tank2->GetName() << std::endl;
    std::cout << AnotherTank->GetName() << std::endl;
    //t.name = "M18 Hellcat"; // test encapsulation
    std::cout << refTank.GetName() << std::endl;


    std::cout << add_Speed(t,20) << std::endl;

    delete MyTank;
    delete Tank2;
    delete AnotherTank;

    return 0;
}

