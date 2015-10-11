namespace A
{
  class Base
  {
  public:
    virtual void abstractBaseMemberFunction1() = 0;
    virtual void abstractBaseMemberFunction1(int xyz) = 0;
    virtual void abstractBaseMemberFunction1(int) const = 0;
    virtual void abstractBaseMemberFunction2() = 0;
    virtual void abstractBaseMemberFunction2(int) = 0;
    virtual void abstractBaseMemberFunction2(int) const = 0;
    virtual void abstractBaseMemberFunction3(int) const = 0;
    virtual void abstractBaseMemberFunction4(int) const = 0;
    virtual void abstractBaseMemberFunction5(int) const = 0;
    virtual void virtualBaseMemberFunction1(int) const;
    
    void baseMemberFunction1();
    
  protected:
    virtual void virtualProtecetdBaseMemberFunction1(int) const;
    virtual void virtualProtecetdBaseMemberFunction2(int) const = 0;
    
  protected slot:
    virtual void virtualProtecetdSlotBaseMemberFunction1(int) const;
    virtual void virtualProtecetdSlotBaseMemberFunction2(int) const = 0;
  };
}