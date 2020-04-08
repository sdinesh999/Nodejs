//calculate the hash (sha1 and md5)


// md5
const crypto = require('crypto');
const fss = require('fs');
const algorithm = 'md5';
const cal = crypto.createHash(algorithm);

const file = './file-test.js';
const stream = fss.ReadStream(file);
stream.on('data', function(d) { 
    cal.update(d);
 });
stream.on('end', function() {
  const d = cal.digest('hex');
  console.log(d);
});
fss.writeFile('result.js', '0e38560fb55727d227773a25fefd0eca', function (err) {
    if (err)
      throw err;
});


//sha1

const crypto = require('crypto');
const fss = require('fs');
const algorithm = 'sha1';
const shasum = crypto.createHash(algorithm);

const file = './hello.js';
const stream = fss.ReadStream(file);
stream.on('data', function(d) { shasum.update(d); });
stream.on('end', function() {
  var d = shasum.digest('hex');
  console.log(d);
});
fss.writeFile('result.js', 'sha1 = 1097e0f6d57f485cca733b93e02903e1969f9e86', function (err) {
    if (err)
      throw err;
});