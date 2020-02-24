import * as utf8 from '@protobufjs/utf8'

//js字符串转换为uint8array
export function str2uint8array(str: string): Uint8Array {
    const len = utf8.length(str)
    let u8a = new Uint8Array(len)
    utf8.write(str, u8a, 0)
    return u8a
  }
  
  //uint8array 转换为js 字符串
  export function uint8array2str(u8a: Uint8Array): string {
    return utf8.read(u8a, 0, u8a.length)
  }