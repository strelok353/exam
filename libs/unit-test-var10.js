describe('Test suite for testing variant10.js', () => {
    describe('last', () => {
      it('should return an array with an extra dimension added at the end', () => {
        const arr = [1, 2, 3, 4]
        const result = 4
        assert.equal(last(arr), result)
      })
    })
  });