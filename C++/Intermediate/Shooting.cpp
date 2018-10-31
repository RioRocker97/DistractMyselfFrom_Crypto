#include"Shooting.h"

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