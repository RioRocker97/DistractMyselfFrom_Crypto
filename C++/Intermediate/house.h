#pragma once
#include<string>

class family
{
    public:
        family();

    private:
        std::string family_name ;
       // int num;
    protected:  //this line show that protected keyword has take effect for class inheritance
        int num;
};

family::family()
{
    family_name = "Default";
    num = 0;
}