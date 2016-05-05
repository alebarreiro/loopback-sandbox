module.exports = function(ServiceRequest) {


  ServiceRequest.schedule1 = function (serviceRequest, service, cb) {
    console.log(serviceRequest); //logs the model
    console.log('SERVICE ID', service); //logs undefined
    cb(null, { model: serviceRequest, service: service});
  };

  ServiceRequest.remoteMethod('schedule1', {
    description: 'Make a new schedule request',
    accepts: [
      {arg: 'serviceRequest', description: 'Service Request model', type: 'ServiceRequest',  http: {source: 'body'}},
      {arg: 'service', description: 'Service id', type: 'string'}
    ],
    returns: {arg: 'data', root: true},
    http: {
      path: '/schedule1',
      verb: 'post'
    }
  });

  ServiceRequest.schedule2 = function (serviceRequest, service, cb) {
    console.log(serviceRequest); //Does not log an object and the explorer does not shows the Model definition
    console.log('SERVICE ID', service); //logs the string
    cb(null, { model: serviceRequest, service: service});
  };

  ServiceRequest.remoteMethod('schedule2', {
    description: 'Make a new schedule request',
    accepts: [
      {arg: 'serviceRequest', description: 'Service Request model', type: 'ServiceRequest'},
      {arg: 'service', description: 'Service id', type: 'string'}
    ],
    returns: {arg: 'data', root: true},
    http: {
      path: '/schedule2',
      verb: 'post'
    }
  });

  ServiceRequest.schedule3 = function (serviceRequest, service, cb) {
    console.log(serviceRequest); //Logs an object but does not show the model definition
    console.log('SERVICE ID', service); //logs the string
    cb(null, { model: serviceRequest, service: service});
  };

  ServiceRequest.remoteMethod('schedule3', {
    description: 'Make a new schedule request',
    accepts: [
      {arg: 'serviceRequest', description: 'Service Request model', type: 'object'},
      {arg: 'service', description: 'Service id', type: 'string'}
    ],
    returns: {arg: 'data', root: true},
    http: {
      path: '/schedule3',
      verb: 'post'
    }
  });

  ServiceRequest.schedule4 = function (serviceRequest, service, cb) {
    console.log(serviceRequest); //does not work
    console.log('SERVICE ID', service); //logs the string
    cb(null, { model: serviceRequest, service: service});
  };

  ServiceRequest.remoteMethod('schedule4', {
    description: 'Make a new schedule request',
    accepts: [
      {arg: 'serviceRequest', description: 'Service Request model', type: 'ServiceRequest' , http: {source: 'body.serviceRequest'}},
      {arg: 'service', description: 'Service id', type: 'string'}
    ],
    returns: {arg: 'data', root: true},
    http: {
      path: '/schedule4',
      verb: 'post'
    }
  });

};

