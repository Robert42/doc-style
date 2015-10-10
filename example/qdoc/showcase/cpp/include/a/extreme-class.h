#include "base.h"

namespace A
{
  
  class Extreme : public Base
  {
  public:
    void abstractBaseMemeberFunction1() override;
    void abstractBaseMemeberFunction1(int) final override;
    
    void virtualBaseMemberFunction1(int) const override;
  };
  
}