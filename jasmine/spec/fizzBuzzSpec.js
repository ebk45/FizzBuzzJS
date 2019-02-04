describe('FizzBuzz',function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      expect(fizzBuzz._isDivisibleBy(3,3)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(fizzBuzz._isDivisibleBy(5,5)).toBe(true);
    });

    it('divisible by 15', function() {
      expect(fizzBuzz.isDivisibleByFifteen(15)).toBe(true);
    });

  });
  describe('knows when a number is NOT', function() {
    it('divisible by 3', function() {
      expect(fizzBuzz._isDivisibleBy(1,3)).toBe(false);
    });

    it('divisible by 5', function() {
      expect(fizzBuzz._isDivisibleBy(1,5)).toBe(false);
    });

    it('divisible by 15', function() {
      expect(fizzBuzz.isDivisibleByFifteen(14)).toBe(false);
    });

  });

  describe('game play says', function() {
    it('"Fizz" when a number is divisible by 3', function() {
      expect(fizzBuzz.says(3)).toEqual("Fizz");
    });

    it('"Buzz" when a number is divisible by 5', function() {
      expect(fizzBuzz.says(5)).toEqual("Buzz");
    });

    it('"FizzBuzz" when a number is divisible by 15', function() {
      expect(fizzBuzz.says(15)).toEqual("FizzBuzz");
    });

  });


});
