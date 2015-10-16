namespace EnumTest
{
  
  enum PlainSimpleEnum
  {
    SimpleA,SimpleB,SimpleC
  };
  
  enum ByteEnum : unsigned char
  {
    ByteA, ByteB, ByteC,
  };
  
  enum class StrongEnum
  {
    A, B, C
  };
  
  enum class StrongIntEnum : int
  {
    A, B, C
  };
  
  enum class StrongByteEnum : ByteEnum
  {
    A, B, C
  };
  
}