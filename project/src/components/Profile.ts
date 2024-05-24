

interface Profile {

    // all the properties in Profile
    username: string;
    email: string;
    password: string;
    firstName: string;

    // optional middlename
    middleName?: string;
    
    lastName: string;
    measurements: {
      wrist: number;
      shoulder: number;
      waist: number;
      chest: number;
      leg: number;
    };
  }
  