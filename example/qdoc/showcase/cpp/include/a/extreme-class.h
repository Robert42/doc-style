#include "base.h"

namespace A
{
  void globalFunction__();
  
  class Extreme : public Base
  {
  protected:
    typedef Base ProtectedParent;
    
  public:
    typedef Base Parent;
    
    class InnerClass;
    
    friend class Parent;
    friend globalFunction__;
    friend void Base::baseMemberFunction1();
    friend void Base::baseStaticMemberFunction1();
    friend void Extreme::extremeStaticFunction(int);
    
  public:
    int memberVariable1;
    static int memberVariableStatic1;
    
  protected:
    int memberVariable2;
    static int memberVariableStatic2;
    
  public:
    Extreme();
    ~Extreme();
    Extreme(const Extreme& other);
    
    Extreme& operator=(const Extreme& other);
    Extreme operator+(const Extreme& other) const;
    
  public:
    void abstractBaseMemeberFunction1() override;
    void abstractBaseMemeberFunction1(int) final override;
    
    void virtualBaseMemberFunction1(int) const override;
    
    static void extremeStaticFunction(int);
    
    void baseMemberFunction1();
    
  protected:
    void extremeProtectedFunction(int) const;
    static void extremeProtectedStaticFunction(int);
    
  signals:
    void extremeSignal(int);
    
  public slots:
    void extremePublicSlot(int);
    
  protected slots:
    void extremeProtectedSlot(int);
    
  private slots:
    void extremePrivateSlot(int);
    
  protected:
    void virtualProtecetdBaseMemberFunction1(int) const override;
    void virtualProtecetdBaseMemberFunction2(int) const override;
    
  protected slot:
    void virtualProtecetdSlotBaseMemberFunction1(int) const override;
    void virtualProtecetdSlotBaseMemberFunction2(int) const override;
  };
  
  class Extreme::InnerClass
  {
  public:
    void hello();
  };
  
}