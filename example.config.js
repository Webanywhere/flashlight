/** Firebase Settings
 *************************************************/

// Firebase DB URL
exports.FB_URL   = 'https://<firebase_name>.firebaseio.com';

// Firebase DB search request path
exports.FB_REQ   = 'search/request';

// Firebase DB search response path
exports.FB_RES   = 'search/response';

// Firebase service account credientials
exports.FB_SERVICEACCOUNT = './service-account.json';


/** ElasticSearch Settings
 *************************************************/

// ElasticSearch server's host URL
exports.ES_HOST  = 'localhost';

// ElasticSearch server's host port
exports.ES_PORT  = '9200';

// ElasticSearch username for http auth
exports.ES_USER  = null;

// ElasticSearch password for http auth
exports.ES_PASS  = null;


/** Paths to Monitor
 *************************************************/

exports.paths = [];

// Paths from firebase DB
exports.FB_PATH = 'flashlightPaths';


/** Config Options
 ***************************************************/

// How often the script should remove unclaimed search results
exports.CLEANUP_INTERVAL = process.env.NODE_ENV === 'production' ? 3600*1000 : 60*1000;

