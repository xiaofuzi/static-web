var fs = require('fs'),
  yaml = require('js-yaml'),
  log = require('./lib/log');

log.error("yangshengfu");
log.warn("yangshengfu");
log.notice("yangshengfu");
log.info("yangshengfu");

try {
    var config = yaml.safeLoad(fs.readFileSync(process.cwd() + '/config.yml', 'utf8'));
    log.info(config);
} catch (e) {
    log.error(e);
}
