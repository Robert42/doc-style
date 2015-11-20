#include <my-class.h>

/*! \namespace MyNamespace

\brief This is a small namespace thought for the examle.

This is a namespace. A small litte namespace. It doesn't need any detailed documentation,
because it's so small. But also, because nobody will every use it.

But hey, don't be sad. That's, what an example is for. Just showcasing useful stuff.

*/

/*! \class MyNamespace::MyClass

\brief This is a small class thought for the examle.

This is a class. A small litte class. It doesn't need any detailed documentation,
because it's so small. But also, because nobody will every use it.

But hey, don't be sad. That's, what an example is for. Just showcasing useful stuff.

*/

namespace MyNamespace
{
  /*!
  \brief This is a small function thought for the examle.

  This is a function. A small litte function. It doesn't need any detailed documentation,
  because it's so small. But also, because nobody will every use it.

  But hey, don't be sad. That's, what an example is for. Just showcasing useful stuff.
  */
  int MyClass::myFunction(int x) const
  {
    char letter = '4' + std::string("2");
  
    return myVar - x + 42;
  }
}
