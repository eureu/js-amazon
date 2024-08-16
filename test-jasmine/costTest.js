import formatCurrency from "../scripts/utils/cost.js";

describe('test suite: formatCurrency', () => {
  it('convers cents into dollars', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('works with 0', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('a', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });
});

