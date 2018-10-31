#pragma once
#include<iostream>
class Tank
{
    public:
            //std::string name; // test encapsulation
            
            Tank();
            Tank(std::string n,std::string gun);
            Tank(std::string n,std::string gun,int s );
            ~Tank();
            std::string GetName(){ return "This is my " + name ; }
            int GetSpeed(){ return speed ; }
    private:
            std::string name; // test encapsulation
            std::string Gun_Name;
            int speed ;
            
};
Tank::Tank()
{
    name = "Default";
    Gun_Name = "Default";
    speed = 0;
}
Tank::Tank(std::string n,std::string gun)
{
    name = n;
    Gun_Name = gun;
    speed = 0;
}
Tank::Tank(std::string n,std::string gun,int s )
{
    name = n;
    Gun_Name = gun;
    speed = s;
}
Tank::~Tank()
{

}
