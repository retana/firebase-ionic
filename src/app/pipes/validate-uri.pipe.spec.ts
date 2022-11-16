import { ValidateUriPipe } from './validate-uri.pipe';

describe('ValidateUriPipe', () => {
  it('create an instance', () => {
    const pipe = new ValidateUriPipe();
    expect(pipe).toBeTruthy();
  });
});
