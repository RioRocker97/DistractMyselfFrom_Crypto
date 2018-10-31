#include<iostream>
#pragma once  
class Shooting{
    public:
            // regular implementation method in header file
            /*Shooting(){
                name = "Default";
                Gun_name = "Default Gun";
            }
            */
           /*
            Shooting(std::string n,std::string gun){
                name = n;
                Gun_name = gun;
            }
            */
           // i'll try this implementation method in c++ project
            Shooting();
            Shooting(std::string n,std::string gun);

            std::string showGun(){return "This is " + Gun_name;}

    private:
           std::string name;
           std::string Gun_name; 
};

// this is how you implement class within the header file
// use :: (scope resolution) operator to declare what kind scope we going to declare
Shooting::Shooting()
{
    name = "Default";
    Gun_name = "Default Gun";
}
Shooting::Shooting(std::string n,std::string gun)
{
    name = n;
    Gun_name = gun;
}

