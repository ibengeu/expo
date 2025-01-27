/** A union type for all integer based [`TypedArray` objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects). */
export declare type IntBasedTypedArray = Int8Array | Int16Array | Int32Array;
/** A union type for all unsigned integer based [`TypedArray` objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects). */
export declare type UintBasedTypedArray = Uint8Array | Uint8ClampedArray | Uint16Array | Uint32Array;
/** A union type for all floating point based [`TypedArray` objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects). */
export declare type FloatBasedTypedArray = Float32Array | Float64Array;
/** A [`TypedArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) describes an array-like view of an underlying binary data buffer. */
export declare type TypedArray = IntBasedTypedArray | UintBasedTypedArray | FloatBasedTypedArray;
//# sourceMappingURL=TypedArrays.types.d.ts.map