#include<iostream>

class TestFriend
{   
    friend void ExternalFx(TestFriend & m); // this is not a member function
    // using keyword friend let this non-member function gain access
    // to all variable in class TestFriend
    public:
        int num1;

        TestFriend(int a1,int a2,int a3);
    private:
        int num2;
    protected:
        int num3;
};

void ExternalFx(TestFriend & m)
{
    std::cout << m.num1 << std::endl;
    std::cout << m.num2 << std::endl;
    std::cout << m.num3 << std::endl;
}
TestFriend::TestFriend(int a1,int a2,int a3)
{
    num1 = a1;
    num2 = a2;
    num3 = a3;
}
int main()
{
    TestFriend hey = TestFriend(2,3,4);
    TestFriend & hey2 = hey;
     ExternalFx(hey2);
    return 0;
}