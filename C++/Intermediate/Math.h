#pragma once

class Math
{
    public:
            static int pow(int b, int exp);

};

int Math::pow(int b,int exp){

    int result = 1;
    for(int i=0;i<exp;i++){
        result = result * b;
    }

    return result;
}