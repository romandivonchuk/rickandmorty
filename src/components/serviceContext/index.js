import React from 'react';

import Service from '../../service/service'

const service = new Service()

const ServiceContext = React.createContext(service);
export default ServiceContext