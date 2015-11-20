#include <QTextEncoder>
#include "include/a/extreme-class.h"

//! [0]

class MyClass : public QObject
{
Q_OBJECT
public:
  QTextEncoder te;
  A::Extreme extreme;
  Extreme extreme2;
  
  MyClass()
  {
    lookAFriend();
  }
};

//! [0]
