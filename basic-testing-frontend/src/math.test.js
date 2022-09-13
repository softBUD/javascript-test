import { it, expect} from 'vitest';
import { add } from './math';

it('should surmmarize all number values in an array', () => {
  //test code
  const result = add([1,2,3]);
  expect(result).toBe(6);
});


 
