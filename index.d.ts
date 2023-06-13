type Option = {
  strict?: boolean;
  storeAsString?: boolean;
  alwaysParseAsBig?: boolean;
  useNativeBigInt?: boolean;
  protoAction?: 'error' | 'ignore' | 'preserve';
  constructorAction?: 'error' | 'ignore' | 'preserve';
};

type JSONbigAPI = {
  stringify: typeof JSON.stringify;
  parse: typeof JSON.parse;
} & ((option?: Option) => {
  stringify: typeof JSON.stringify;
  parse: typeof JSON.parse;
});


declare const api: JSONbigAPI;
export = api;
