module.exports = {
  100: {
    name: 'CONTINUE',
    description: 'Client should continue with request.',
    standard: true
  },
  101: {
    name: 'SWITCHING PROTOCOLS',
    description: 'Requester has asked the server to switch protocols.',
    standard: true
  },
  102: {
    name: 'PROCESSING (WEBDAV)',
    description: 'WebDAV request is executing sub-requests.',
    standard: true
  },
  200: {
    name: 'OK',
    description: 'Standard response for successful HTTP requests.',
    standard: true
  },
  201: {
    name: 'CREATED',
    description: 'The request has been fulfilled and resulted in a new resource being created.',
    standard: true
  },
  202: {
    name: 'ACCEPTED',
    description: 'The request has been accepted for processing, but the processing has not been completed.',
    standard: true
  },
  203: {
    name: 'NON-AUTHORITATIVE INFORMATION',
    description: 'The server successfully processed the request, but is returning information that may be from another source.',
    standard: true
  },
  204: {
    name: 'NO CONTENT',
    description: 'The server successfully processed the request, but is not returning any content. Usually used as a response to a successful delete request.',
    standard: true
  },
  205: {
    name: 'RESET CONTENT',
    description: 'The server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view.',
    standard: true
  },
  206: {
    name: 'PARTIAL CONTENT',
    description: 'The server is delivering only part of the resource due to a range header sent by the client.',
    standard: true
  },
  207: {
    name: 'MULTI STATUS (WEBDAV)',
    description: 'The message body that follows is an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.',
    standard: true
  },
  208: {
    name: 'ALREADY REPORTED (WEBDAV)',
    description: 'The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again.',
    standard: true
  },
  226: {
    name: 'IM USED',
    description: 'The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.',
    standard: true
  },
  300: {
    name: 'MULTIPLE CHOICES',
    description: 'Indicates multiple options for the resource that the client may follow. It, for instance, could be used to present different format options for video.',
    standard: true
  },
  301: {
    name: 'MOVED PERMANENTLY',
    description: 'This and all future requests should be directed to the given URI.',
    standard: true
  },
  302: {
    name: 'FOUND',
    description: 'The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect (the original describing phrase was "Moved Temporarily"), but popular browsers implemented 302 with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish between the two behaviours.',
    standard: true
  },
  303: {
    name: 'SEE OTHER',
    description: 'The response to the request can be found under another URI using a GET method.',
    standard: true
  },
  304: {
    name: 'NOT MODIFIED',
    description: 'Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match.',
    standard: true
  },
  305: {
    name: 'USE PROXY',
    description: 'The requested resource is only available through a proxy, whose address is provided in the response.',
    standard: true
  },
  306: {
    name: 'SWITCH PROXY',
    description: 'No longer used. Originally meant "Subsequent requests should use the specified proxy."',
    standard: false
  },
  307: {
    name: 'TEMPORARY REDIRECT',
    description: 'In this case, the request should be repeated with another URI; however, future requests should still use the original URI.',
    standard: true
  },
  308: {
    name: 'PERMANENT REDIRECT',
    description: 'The request, and all future requests should be repeated using another URI. This parallel the behaviours of 302 and 301, but do not allow the HTTP method to change.',
    standard: true
  },
  400: {
    name: 'BAD REQUEST',
    description: 'Request cannot be fulfilled due to bad syntax.',
    standard: true
  },
  401: {
    name: 'UNAUTHORIZED',
    description: 'Specifically for use when authentication is required and has failed or has not yet been provided.',
    standard: true
  },
  402: {
    name: 'PAYMENT REQUIRED',
    description: 'Reserved for future use.',
    standard: true
  },
  403: {
    name: 'FORBIDDEN',
    description: 'The request was a valid request, but the server is refusing to respond to it.',
    standard: true
  },
  404: {
    name: 'NOT FOUND',
    description: 'The requested resource could not be found but may be available again in the future.',
    standard: true
  },
  405: {
    name: 'METHOD NOT ALLOWED',
    description: 'A request was made of a resource using a request method not supported by that resource.',
    standard: true
  },
  406: {
    name: 'NOT ACCEPTABLE',
    description: 'The requested resource is only capable of generating content not acceptable according to the Accept headers sent in the request.',
    standard: true
  },
  407: {
    name: 'PROXY AUTHENTICATION REQUIRED',
    description: 'The client must first authenticate itself with the proxy.',
    standard: true
  },
  408: {
    name: 'REQUEST TIMEOUT',
    description: 'The server timed out waiting for the request.',
    standard: true
  },
  409: {
    name: 'CONFLICT',
    description: 'Indicates that the request could not be processed because of conflict in the request, such as an edit conflict in the case of multiple updates.'
  },
  410: {
    name: 'GONE',
    description: 'Indicates that the resource requested is no longer available and will not be available again.',
    standard: true
  },
  411: {
    name: 'LENGTH REQUIRED',
    description: 'The request did not specify the length of its content, which is required by the requested resource.',
    standard: true
  },
  412: {
    name: 'PRECONDITION FAILED',
    description: 'The server does not meet one of the preconditions that the requester put on the request.',
    standard: true
  },
  413: {
    name: 'REQUEST ENTITY TOO LARGE',
    description: 'The request is larger than the server is willing or able to process.',
    standard: true
  },
  414: {
    name: 'REQUEST URI TOO LONG',
    description: 'The URI provided was too long for the server to process.',
    standard: true
  },
  415: {
    name: 'UNSUPPORTED MEDIA TYPE',
    description: 'The request entity has a media type which the server or resource does not support.',
    standard: true
  },
  416: {
    name: 'REQUESTED RANGE NOT SATISFIABLE',
    description: 'The client has asked for a portion of the file, but the server cannot supply that portion.',
    standard: true
  },
  417: {
    name: 'EXPECTATION FAILED',
    description: 'The server cannot meet the requirements of the Expect request-header field.',
    standard: true
  },
  418: {
    name: 'I\'M A TEAPOT',
    description: 'This code was defined in 1998 as one of the traditional IETF April Fools\' jokes.',
    standard: false
  },
  419: {
    name: 'AUTHENTICATION TIMEOUT',
    description: 'Not a part of the HTTP standard, 419 Authentication Timeout denotes that previously valid authentication has expired.',
    standard: false
  },
  420: {
    name: 'METHOD FAILURE / ENHANCE YOUR CALM',
    description: 'Not part of the HTTP standard, but defined by Spring in the HttpStatus class to be used when a method failed. This status code is deprecated by Spring. Also,  returned by version 1 of the Twitter Search and Trends API when the client is being rate limited.',
    standard: false
  },
  422: {
    name: 'UNPROCESSABLE ENTITY',
    description: 'The request was well-formed but was unable to be followed due to semantic errors.',
    standard: true
  },
  423: {
    name: 'LOCKED',
    description: 'The resource that is being accessed is locked.',
    standard: true
  },
  424: {
    name: 'FAILED DEPENDENCY',
    description: 'The request failed due to failure of a previous request.',
    standard: true
  },
  426: {
    name: 'UPGRADE REQUIRED',
    description: 'The client should switch to a different protocol such as TLS/1.0.',
    standard: true
  },
  428: {
    name: 'PRECONDITION FAILED',
    description: 'The origin server requires the request to be conditional.',
    standard: true
  },
  429: {
    name: 'TOO MANY REQUESTS',
    description: 'The user has sent too many requests in a given amount of time.',
    standard: true
  },
  431: {
    name: 'REQUEST HEADER FIELD TOO LARGE',
    description: 'The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.',
    standard: true
  },
  440: {
    name: 'LOGIN TIMEOUT',
    description: 'A Microsoft extension. Indicates that your session has expired.',
    standard: false
  },
  444: {
    name: 'NO RESPONSE',
    description: 'Used in Nginx logs to indicate that the server has returned no information to the client and closed the connection.',
    standard: false
  },
  449: {
    name: 'RETRY WITH',
    description: 'A Microsoft extension. The request should be retried after performing the appropriate action.',
    standard: false
  },
  450: {
    name: 'BLOCKED BY WINDOWS PARENTAL CONTROLS',
    description: 'A Microsoft extension. This error is given when Windows Parental Controls are turned on and are blocking access to the given webpage.',
    standard: false
  },
  451: {
    name: 'UNAVAILABLE FOR LEGAL REASONS / REDIRECT',
    description: 'Defined in the internet draft "A New HTTP Status Code for Legally-restricted Resources". Also, used in Exchange ActiveSync if there either is a more efficient server to use or the server cannot access the users\' mailbox.',
    standard: false
  },
  494: {
    name: 'REQUEST HEADER TOO LARGE',
    description: 'Nginx internal code similar to 431 but it was introduced earlier in version 0.9.4.',
    standard: false
  },
  495: {
    name: 'CERT ERROR',
    description: 'Nginx internal code used when SSL client certificate error occurred to distinguish it from 4XX in a log and an error page redirection.',
    standard: false
  },
  496: {
    name: 'NO CERT',
    description: 'Nginx internal code used when client didn\'t provide certificate to distinguish it from 4XX in a log and an error page redirection.',
    standard: false
  },
  497: {
    name: 'HTTP TO HTTPS',
    description: 'Nginx internal code used for the plain HTTP requests that are sent to HTTPS port to distinguish it from 4XX in a log and an error page redirection.',
    standard: false
  },
  498: {
    name: 'TOKEN EXPIRED OR INVALID',
    description: 'Returned by ArcGIS for Server. A code of 498 indicates an expired or otherwise invalid token.',
    standard: false
  },
  499: {
    name: 'CLIENT CLOSED REQUEST / TOKEN EXPIRED',
    description: 'Used in Nginx logs to indicate when the connection has been closed by client while the server is still processing its request. Also, Returned by ArcGIS for Server. A code of 499 indicates that a token is required (if no token was submitted).',
    standard: false
  },
  500: {
    name: 'INTERNAL SERVER ERROR',
    description: 'Generic error message.',
    standard: true
  },
  501: {
    name: 'NOT IMPLEMENTED',
    description: 'The server either does not recognize the request method, or it lacks the ability to fulfil the request.',
    standard: true
  },
  502: {
    name: 'BAD GATEWAY',
    description: 'The server was acting as a gateway or proxy and received an invalid response from the upstream server.',
    standard: true
  },
  503: {
    name: 'SERVICE UNAVAILABLE',
    description: 'The server is currently unavailable (because it is overloaded or down for maintenance).',
    standard: true
  },
  504: {
    name: 'GATEWAY TIMEOUT',
    description: 'The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.',
    standard: true
  },
  505: {
    name: 'HTTP VERSION NOT SUPPORTED',
    description: 'The server does not support the HTTP protocol version used in the request.',
    standard: true
  },
  506: {
    name: 'VARIANT ALSO NEGOTIATES',
    description: 'Transparent content negotiation for the request results in a circular reference.',
    standard: true
  },
  507: {
    name: 'INSUFFICIENT STORAGE',
    description: 'The server is unable to store the representation needed to complete the request.',
    standard: true
  },
  508: {
    name: 'LOOP DETECTED',
    description: 'The server detected an infinite loop while processing the request.',
    standard: true
  },
  509: {
    name: 'BANDWITH LIMIT EXCEEDED',
    description: 'Used by Apache. This status code is not specified in any RFCs. Its use is unknown.',
    standard: false
  },
  510: {
    name: 'NOT EXTENDED',
    description: 'Further extensions to the request are required for the server to fulfil it.',
    standard: true
  },
  511: {
    name: 'NETWORK AUTHENTICATION REQUIRED',
    description: 'The client needs to authenticate to gain network access.',
    standard: true
  },
  520: {
    name: 'ORIGIN ERROR',
    description: 'This status code is not specified in any RFCs, but is used by CloudFlare\'s reverse proxies to signal an "unknown connection issue".',
    standard: false
  },
  521: {
    name: 'WEB SERVER IS DOWN',
    description: 'This status code is not specified in any RFCs, but is used by CloudFlare\'s reverse proxies to indicate that the origin webserver refused the connection.',
    standard: false
  },
  522: {
    name: 'CONNECTION TIMED OUT',
    description: 'This status code is not specified in any RFCs, but is used by CloudFlare\'s reverse proxies to signal that a server connection timed out.',
    standard: false
  },
  523: {
    name: 'PROXY DECLINED REQUEST',
    description: 'This status code is not specified in any RFCs, but is used by CloudFlare\'s reverse proxies to signal a resource that has been blocked by the administrator of the website or proxy itself.',
    standard: false
  },
  524: {
    name: 'A TIMEOUT OCCURRED',
    description: 'This status code is not specified in any RFCs, but is used by CloudFlare\'s reverse proxies to signal a network read timeout behind the proxy to a client in front of the proxy.',
    standard: false
  },
  598: {
    name: 'NETWORK READ TIMEOUT ERROR',
    description: 'This status code is not specified in any RFCs, but is used by Microsoft HTTP proxies to signal a network read timeout behind the proxy to a client in front of the proxy.',
    standard: false
  },
  599: {
    name: 'NETWORK CONNECTION TIMEOUT ERROR',
    description: 'This status code is not specified in any RFCs, but is used by Microsoft HTTP proxies to signal a network connect timeout behind the proxy to a client in front of the proxy.',
    standard: false
  }
};
