(function ($) {
  module('jQuery#feedbackjs', {
    setup: function () {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function () {
    expect(1);
    strictEqual(this.elems.feedbackjs(), this.elems, 'should be chainable');
  });

  test('is feedbackjs', function () {
    expect(1);
    strictEqual(this.elems.feedbackjs().text(), 'feedbackjs0feedbackjs1feedbackjs2', 'should be feedbackjs');
  });

}(jQuery));
