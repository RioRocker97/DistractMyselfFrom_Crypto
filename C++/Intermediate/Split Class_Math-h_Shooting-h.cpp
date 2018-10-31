#include<iostream>
#include"Shooting.h"
#include"Math.h"
/*
class Shooting{
    public:
            Shooting(){
                name = "Default";
                Gun_name = "Default Gun";
            }
            Shooting(std::string n,std::string gun){
                name = n;
                Gun_name = gun;
            }
            std::string showGun(){return "This is " + Gun_name;}

    private:
           std::string name;
           std::string Gun_name; 
};
*/

int main(){
    Shooting AnotherGun = Shooting("chang","M1911");
    Shooting myGun = Shooting();

    Math res ;

    std::cout << myGun.showGun() << std::endl;
    std::cout << AnotherGun.showGun() << std::endl;

    std::cout << res.pow(2,5) << std::endl;

    return 0;
}
