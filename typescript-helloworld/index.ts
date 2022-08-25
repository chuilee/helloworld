// TypeScript 中如何联合枚举类型的 Key?
enum str {
    A,
    B,
    C
 }

 type strEnum = keyof typeof str; // "A" | "B" | "C"