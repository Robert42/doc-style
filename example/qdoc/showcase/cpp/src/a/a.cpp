#include <a.h>

/*! \namespace A

\inmodule showcase
\inheaderfile a.h

\brief This is namespace \c A created to showcase doc generation.

Some other text. To be able to get a feeling for text formating, you need a lot of text to get a feeling for it.
So yeah, tadaa! Here's some text. I thnk we need a little more text. A lot more text.

Maybe a new paragraph would be also nice. This filling-text doesn't have to make sense.
It joust should be a lot of it. In this case, I prefer Quantity over Quality. That's
usually not a good idea when writing a documentation. But for a showcase I think this should be ok.

Is it already eneough filltext? I don't think so. I need more! But where can I get some ideas for a text?
I have no idea. Maybe I should tell something about my past. Well there was an apple cake my grandma used to bake.
Maybe I should search the recipe? It had a lot of of fruit, so I don't think it was very unhealthy.
I think it's time of a linebreak.
\br
Now, that we are already talking about cokkies: Have you ever wondert, why there are some sortsof candy you can
only buy for special holidays like christmas. While there are other sorts of cookies you can buy the whole year.
I wonder who decided to sell some cookies only for certain holidays. Hmm, probably it wasn't a decision of a single
person. It was was a tradicion for some cookies. But then, chockolate, coconuts and vanilla were unknown in europe
for centuries. So the tradition must have evolved in the past few centuries.

Well, I think that's eneough text for now. I probably will copy this text, even if it has no meaning for anyone.
But hey, that's the idea of it.

*/

namespace A
{
/*!
\typedef A::ThisIsATypedef

\brief This a typedef ThisIsATypedef

 Some other text. To be able to get a feeling for text formating, you need a lot of text to get a feeling for it.
So yeah, tadaa! Here's some text. I thnk we need a little more text. A lot more text.

*/


/*!
\variable A::thisIsAVariable

\brief This a variable thisIsAVariable

 Some other text. To be able to get a feeling for text formating, you need a lot of text to get a feeling for it.
So yeah, tadaa! Here's some text. I thnk we need a little more text. A lot more text.
*/

/*!
\variable A::thisIsAnotherVariable

\brief This another variable thisIsAnotherVariable

 Some other text. To be able to get a feeling for text formating, you need a lot of text to get a feeling for it.
So yeah, tadaa! Here's some text. I thnk we need a little more text. A lot more text.
*/
int thisIsAnotherVariable;

/*!
\fn std::ostream& A::operator<<(std::ostream& o, const Foo& foo)
\brief This is an overloaded operator for printing values

This has an rgumentd \a o and another \a foo.
 Some other text. To be able to get a feeling for text formating, you need a lot of text to get a feeling for it.
So yeah, tadaa! Here's some text. I thnk we need a little more text. A lot more text.
*/
std::ostream& operator << (std::ostream& o, const Foo& foo)
{
}

/*! \macro void MACRO(a,x)
\relates A::Extreme

\brief This is a macro MACRO

It has two arguments \a a and \a x.
 Some other text. To be able to get a feeling for text formating, you need a lot of text to get a feeling for it.
So yeah, tadaa! Here's some text. I thnk we need a little more text. A lot more text.
*/

/*! \macro void MACRO_2(a,x)
\relates A

\brief This is a macro MACRO_2

It has two arguments \a a and \a x.
 Some other text. To be able to get a feeling for text formating, you need a lot of text to get a feeling for it.
So yeah, tadaa! Here's some text. I thnk we need a little more text. A lot more text.
*/

/*! \fn T A::globalTemplateFunction(const T& xyz);
\brief This the docu for globalTemplateFunction

This has an \a xyz argument.
 Some other text. To be able to get a feeling for text formating, you need a lot of text to get a feeling for it.
So yeah, tadaa! Here's some text. I thnk we need a little more text. A lot more text.
*/
  
  /*! \enum A::GlobalEnum
\brief This the docu for the enum GlobalEnum

 Some other text. To be able to get a feeling for text formating, you need a lot of text to get a feeling for it.
So yeah, tadaa! Here's some text. I thnk we need a little more text. A lot more text.

\value Hello Hi there
\value World So round ans blue
*/
}