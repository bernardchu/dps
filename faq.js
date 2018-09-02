$( document ).ready( function() {
  var source = '{{#each sections}}\n' +
    '  <div class="faq-section row">\n' +
    '    <h2>{{heading}}</h2>\n' +
    '    <div class="col-xs-12 row">\n' +
    '      <div class="col-md-4 hidden-sm hidden-xs image">\n' +
    '        <img src="{{imgUrl}}" alt="">\n' +
    '      </div>\n' +
    '      <div class="col-md-8 col-sm-12">\n' +
    '        {{#each prose}}\n' +
    '        {{{this}}}\n' +
    '        {{/each}}\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <hr>\n' +
    '  {{/each}}';
  var template = Handlebars.compile(source);
  var html = template(faq);
  $( '.faq' ).append(html);
} );
