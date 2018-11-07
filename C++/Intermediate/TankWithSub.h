#pragma once
#include<iostream>
class Tank // this is main class
{
    private:
        std::string Name;
        int type;
    public:
        Tank();
        void setName(std::string s);
        void setType(int n);
        std::string getTankName();
        std::string showTypeTank();
};
//public mean subclass heavy can gain access in main class Tank
//private mean subclass heavy cannot gain access in main class Tank
class heavy: public Tank // this is sub class . heavy class is in Tank class
{
    private:
        int power;
        int Armor;
    public:
        heavy();
};

std::string Tank::getTankName()
{
    return "This is " + Name ;
}
void Tank::setName(std::string s)
{
    Name = s;
}
Tank::Tank()
{
    Name = "Default Tank";
    type = 0;
}
heavy::heavy():Tank()
{
    setType(1);
    power = 0;
    Armor = 10;
}
std::string Tank::showTypeTank()
{
    switch(type)
    {
        case 1 : return "This Tank is heavy";
        case 2 : return "This Tank is medium";
        case 3 : return "This Tank is light";
        default : return "Undecided Type";
    }
}
void Tank::setType(int n)
{
    type = n;
}