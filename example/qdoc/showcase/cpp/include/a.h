#include <a/foo.h>
#include <a/extreme.h>

namespace A
{
  
  typedef int32 ThisIsATypedef;
  
  const bool thisIsAVariable;
  extern int thisIsAnotherVariable;
  
  std::ostream& operator << (std::ostream& o, const Foo& foo);
  
  #define MACRO(a,x)
  #define MACRO_2(a,x)
  
  template<typename T>
  T globalTemplateFunction(const T& xyz);
  
  enum GlobalEnum{Hello,World};
  
  
}

