#include<iostream> 
using namespace std;

union OnlyYours {
    int num;
    double k;
};

struct yours {
    string name;
    int date ;
};

enum WorldWar {
    War1 = 1,
    War2,
    cold_war,
    Beyond
};

int main(){
    WorldWar war = cold_war;
    OnlyYours Hisname;
    yours Myname = {"chang",25};
    Hisname.num = 5;
    Hisname.k = 4.5;

    cout << war <<endl ; // use for scoped variable
    cout << Hisname.num << Hisname.k << Myname.name << Myname.date ;
    return 0;
}


