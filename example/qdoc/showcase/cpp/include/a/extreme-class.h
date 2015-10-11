#include "base.h"

namespace A
{
  
  class Extreme : public Base
  {
  protected:
    typedef Base ProtectedParent;
    
  public:
    typedef Base Parent;
  
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
  
}