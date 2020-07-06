const compose = (...funcs) => (comp) => {
  return funcs.reduceRight((prevValue, func) => func(prevValue), comp);
};

export default compose;
