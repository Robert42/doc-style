#include "base.h"
#include "foo.h"

namespace A
{
  void globalFunction__();
  
  class Extreme final : public QObject, public Base
  {
    Q_OBJECT
    Q_PROPERTY(Foo foo READ foo WRITE setFoo RESET resetFoo NOTIFY fooChanged);
    Q_PROPERTY(B::Foo foo2 READ foo WRITE setFoo RESET resetFoo NOTIFY fooChanged);
  protected:
    typedef Base ProtectedParent;
    
  public:
    static_assert(sizeof(Extreme) > 0, "Check, whether qdoc misinterprets static_assert as function");
  
    typedef Base Parent;
    
    class InnerClass;
    
    template<typename T>
    class InnerTemplateClass;
    
    struct InnerStruct
    {
      void innerStructMethod();
      static InnerStruct innerStructStaticMethod();
    };
    
    friend class Parent;
    friend globalFunction__;
    friend void Base::baseMemberFunction1();
    friend void Base::baseStaticMemberFunction1();
    friend void Extreme::extremeStaticFunction(int);
    
    enum Enum1
    {
      EOh,
      EHappy,
      EDay,
      EIgnoreMe,
    };
    
    enum class Enum2 : int32
    {
      Oh,
      Happy,
      Day,
    };
    
    Q_ENUM(Enum2)
    
  public:
    int memberVariable1;
    int memberVariable3  =  42;
    static int memberVariableStatic1;
    
  protected:
    int memberVariable2;
    static int memberVariableStatic2;
    
  public:
    const Foo& foo() const;
    void setFoo(const Foo&);
    void resetFoo();
    
  public:
    Extreme();
    ~Extreme();
    Extreme(const Extreme& other);
    
    Extreme& operator=(const Extreme& other);
    Extreme operator+(const Extreme& other) const;
    
    
  
  template<typename T>
  void templateMethod(T argument);
    
  public:
    void abstractBaseMemeberFunction1() override;
    void abstractBaseMemeberFunction1(int) final override;
    
    void virtualBaseMemberFunction1(int) const override;
    
    static void extremeStaticFunction(int);
    
    void baseMemberFunction1();

    void extremeOverloadedFunction();
    void extremeOverloadedFunction(int i);
    
    template<typename T>
    void extremeTemplateMemberFunction1();
    
    void oldFunctionOnyHereForCompatibility();
    
    void internalFunction();
    
  protected:
    void extremeProtectedFunction(int) const;
    static void extremeProtectedStaticFunction(int);
    
  signals:
    void extremeSignal(int);
    void fooChanged(const Foo& foo);
    
  public slots:
    void extremePublicSlot(int);
    
  protected slots:
    void extremeProtectedSlot(int);
    
  private slots:
    void extremePrivateSlot(int);
    
  protected:
    void virtualProtecetdBaseMemberFunction1(int) const override;
    void virtualProtecetdBaseMemberFunction2(int) const override final;
    
  protected slots:
    void virtualProtecetdSlotBaseMemberFunction1(int) const override;
    void virtualProtecetdSlotBaseMemberFunction2(int) const override;
  };
  
  class Extreme::InnerClass
  {
  public:
    void hello();
  };
  
  template<typename T>
  class Extreme::InnerTemplateClass
  {
  };
  
  template<typename T>
  class TemplateClass
  {
  };
  
  class SubClassA : public Extreme{};
  class SubClassB : public Extreme{};
  class SubClassC : public Extreme{};
  class SubClassD : public Extreme{};

  static friend void lookAFriend();
  
}

A::Extreme someFunctionRelatedToExtreme (A::Extreme a, A::Extreme b);
void lookAFriend();

#include "extreme-class.inl"
