cube(`ServiceRequest311`, {
  sql: `SELECT * FROM dashboard.service_request_311`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [incidentAddress, city, dueDate, parkFacilityName, bridgeHighwayName, resolutionActionUpdatedDate, bridgeHighwayDirection, streetName, bridgeHighwaySegment, agencyName, createdDate, closedDate]
    }
  },
  
  dimensions: {
    incidentAddress: {
      sql: `${CUBE}."Incident Address"`,
      type: `string`
    },
    
    city: {
      sql: `city`,
      type: `string`
    },
    
    taxiCompanyBorough: {
      sql: `${CUBE}."Taxi Company Borough"`,
      type: `string`
    },
    
    bbl: {
      sql: `bbl`,
      type: `string`
    },
    
    borough: {
      sql: `borough`,
      type: `string`
    },
    
    communityBoard: {
      sql: `${CUBE}."Community Board"`,
      type: `string`
    },
    
    vehicleType: {
      sql: `${CUBE}."Vehicle Type"`,
      type: `string`
    },
    
    dueDate: {
      sql: `${CUBE}."Due Date"`,
      type: `string`
    },
    
    intersectionStreet2: {
      sql: `${CUBE}."Intersection Street 2"`,
      type: `string`,
      title: `Intersection Street 2`
    },
    
    openDataChannelType: {
      sql: `${CUBE}."Open Data Channel Type"`,
      type: `string`
    },
    
    complaintType: {
      sql: `${CUBE}."Complaint Type"`,
      type: `string`
    },
    
    location: {
      sql: `${CUBE}."Location"`,
      type: `string`
    },
    
    yCoordinateStatePlane: {
      sql: `${CUBE}."Y Coordinate (State Plane)"`,
      type: `string`,
      title: `Y Coordinate (state Plane)`
    },
    
    parkFacilityName: {
      sql: `${CUBE}."Park Facility Name"`,
      type: `string`
    },
    
    locationType: {
      sql: `${CUBE}."Location Type"`,
      type: `string`
    },
    
    descriptor: {
      sql: `${CUBE}."Descriptor"`,
      type: `string`
    },
    
    bridgeHighwayName: {
      sql: `${CUBE}."Bridge Highway Name"`,
      type: `string`
    },
    
    resolutionActionUpdatedDate: {
      sql: `${CUBE}."Resolution Action Updated Date"`,
      type: `string`
    },
    
    bridgeHighwayDirection: {
      sql: `${CUBE}."Bridge Highway Direction"`,
      type: `string`
    },
    
    crossStreet1: {
      sql: `${CUBE}."Cross Street 1"`,
      type: `string`,
      title: `Cross Street 1`
    },
    
    taxiPickUpLocation: {
      sql: `${CUBE}."Taxi Pick Up Location"`,
      type: `string`
    },
    
    landmark: {
      sql: `landmark`,
      type: `string`
    },
    
    parkBorough: {
      sql: `${CUBE}."Park Borough"`,
      type: `string`
    },
    
    latitude: {
      sql: `latitude`,
      type: `string`
    },
    
    streetName: {
      sql: `${CUBE}."Street Name"`,
      type: `string`
    },
    
    xCoordinateStatePlane: {
      sql: `${CUBE}."X Coordinate (State Plane)"`,
      type: `string`,
      title: `X Coordinate (state Plane)`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    bridgeHighwaySegment: {
      sql: `${CUBE}."Bridge Highway Segment"`,
      type: `string`
    },
    
    facilityType: {
      sql: `${CUBE}."Facility Type"`,
      type: `string`
    },
    
    roadRamp: {
      sql: `${CUBE}."Road Ramp"`,
      type: `string`
    },
    
    agencyName: {
      sql: `${CUBE}."Agency Name"`,
      type: `string`
    },
    
    crossStreet2: {
      sql: `${CUBE}."Cross Street 2"`,
      type: `string`,
      title: `Cross Street 2`
    },
    
    longitude: {
      sql: `longitude`,
      type: `string`
    },
    
    intersectionStreet1: {
      sql: `${CUBE}."Intersection Street 1"`,
      type: `string`,
      title: `Intersection Street 1`
    },
    
    resolutionDescription: {
      sql: `${CUBE}."Resolution Description"`,
      type: `string`
    },
    
    agency: {
      sql: `agency`,
      type: `string`
    },
    
    addressType: {
      sql: `${CUBE}."Address Type"`,
      type: `string`
    },
    
    createdDate: {
      sql: `created_date`,
      type: `time`
    },
    
    closedDate: {
      sql: `closed_date`,
      type: `time`
    }
  }
});
