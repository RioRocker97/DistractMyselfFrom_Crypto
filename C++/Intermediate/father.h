#pragma once
#include<string>

#include"house.h"
class father:public family
{
    public:
        std::string father_name;

        father();
        std::string showmember();
};

father::father():family()
{
    father_name = "Default Dad";
    num  = 1;
}

std::string father::showmember()
{
    return "Father : "+ father_name ;
}