#include <nan.h>

namespace backEnd {

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;

NAN_METHOD(Method) {

  // Check the argument types
  if (!info[0]->IsString() || !info[1]->IsString()) {
    Nan::ThrowTypeError("Wrong arguments");
    return;
  }

  v8::String::Utf8Value str0(info[0]->ToString());
  v8::String::Utf8Value str1(info[1]->ToString());
  info.GetReturnValue().Set(Nan::True());
}   

NAN_MODULE_INIT(Initialize)
{
    NAN_EXPORT(target, Method);
}

NODE_MODULE(addon, Initialize);

}
