export interface Car {
    make: string;
    model: string;
    year: number;
    trim: {
        doors: number;
        vehicleType: string; //sedan rest of trim contents

    };
    engine: {
        cylinder: number;
        liter: number;
    };

    horsePower: {
        watts: number;
        rpm: number;
    };

    torque: {
        watts: number;
        rpm: number;
    };
}