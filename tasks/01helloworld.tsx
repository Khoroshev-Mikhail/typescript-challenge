//https://github.com/type-challenges/type-challenges/blob/main/questions/00013-warm-hello-world/README.md

/* _____________ Your Code Here _____________ */

type HelloWorld = string // expected to be a string

/* _____________ Test Cases _____________ */
import type { Equal, Expect, NotAny } from '@type-challenges/utils'

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]