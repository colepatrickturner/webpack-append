module.exports = function(source, map) {
  this.cacheable();
  
  var callback = this.async();
  var query = this.query;
  
  if(typeof query == 'string')
  {
    query = { 'append' : query };
  }
  
  if(typeof query.prepend != 'undefined' && typeof query.prepend == 'string')
  {
    query.prepend = [query.prepend];
  }

  if(typeof query.append != 'undefined' && typeof query.append == 'string')
  {
    query.append = [query.append];
  }
  
  if(typeof query.prepend != 'undefined')
  {
    query.prepend.forEach(function(str)
    {
      source = str + source;
    });
  }
  
  if(typeof query.append != 'undefined')
  {
    query.append.forEach(function(str)
    {
      source += str;
    });
  }

  callback(null, source, map)
};
