$(function() {
  $.feedback({
      html2canvasURL: 'html2canvas.js',
      onClose: function() { window.location.reload(); }
  });
});
