export declare type JSONbigOption = {
  strict?: boolean;
  storeAsString?: boolean;
  alwaysParseAsBig?: boolean;
  useNativeBigInt?: boolean;
  protoAction?: 'error' | 'ignore' | 'preserve';
  constructorAction?: 'error' | 'ignore' | 'preserve';
};

declare function JSONbig(option?: JSONbigOption): {
  stringify: typeof JSON.stringify;
  parse: typeof JSON.parse;
};

export declare const stringify: typeof JSON.stringify;
export declare const parse: typeof JSON.parse;
export default JSONbig;
