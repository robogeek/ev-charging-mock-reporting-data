
import { accessType, operatingStatus, derType } from './common.js';

export type Station = {

    /**
     * Unique identity specific to the physical location of the station (site) funded by the project.
     * (For NEVI/Part 680 programs, Station ID must be same as the permanent station identifier
     * provided to third parties pursuant to CFR 23 § 680.116(c)(1).
     */
    station_id: 	string;   // default=yes	part 680=yes

    /**
     * Descriptive name of charging site (e.g., Mercy Hospital).
     */
    station_name: 	string;   // default=yes	part 680=no

    /**
     * Street address of charging station.
     */
    station_address: string;   // default=yes	part 680=yes

    /**
     * City where charging station is located.
     */
    station_city: string;   // default=yes	part 680=yes

    /**
     * Valid state code of state where station or territory where the station is located.
     */
    station_state: string;   // default=yes	part 680=yes

    /**
     * Valid ZIP code of where station is located.
     */
    station_zip:  string;   // string(5) default=yes	part 680=yes

    /**
     * Station county (or county analogue)
     */
    station_county: string;   // default=no	part 680=yes

    /**
     * Station center WSG84-encoded longitude in decimal degrees to at least 4 decimal places.
     * Valid longitudes are between -180 and 180
     */
    station_lon:  number;   // float(>3) default=no	part 680=yes

    /**
     * Station center WSG84 encoded latitude in decimal degrees to at least 4 decimal places.
     * Valid latitudes are between -90 and 90.
     */
    station_lat:  number;   // float(>3) default=no	part 680=yes

    /**
     * Name of entity responsible for operation and maintenance of the funded charging station.
     */
    operator_name:  string;   // default=yes	part 680=yes

    /**
     * Street address of entity responsible for operation and maintenance of the funded charging station.
     */
    operator_address:  string;   // default=yes	part 680=yes

    /**
     * City of entity responsible for operation and maintenance of the funded charging station.
     */
    operator_city:  string;   // default=yes	part 680=yes

    /**
     * 	Valid state code of entity responsible for operation and maintenance of the funded charging station.
     */
    operator_state:  string;   // default=yes	part 680=yes

    /**
     * 	Valid ZIP Code of entity responsible for operation and maintenance of the of the funded charging station.
     */
    operator_zip:  string;   // string(5) default=yes	part 680=yes

    /**
     * Valid Operating Status.
     */
    operating_status:  operatingStatus;   // default=yes	part 680=no

    /**
     * Valid Access Type.
     */
    access_type:  accessType;   // default=yes	part 680=no

    /**
     * Type of site host for the charging station. (e.g. public, workplace, MUD)
     */
    site_host_type:  string;   // default=yes	part 680=no

    /**
     * Additional detail on site host land use. (e.g. hospital, hotel, parking garage, etc.)
     */
    site_host_type_detail:  string;   // default=no	part 680=no

    /**
     * 	Station host point of contact first name
     */
    host_first_name:  string;   // default=yes	part 680=no

    /**
     * Station host point of contact last name
     */
    host_last_name:  string;   // default=yes	part 680=no

    /**
     * Station host point of contact email address
     */
    host_email:  string;   // default=yes	part 680=no

    /**
     * Station has distributed energy resource.
     */
    onsite_der: boolean;   // default=yes	part 680=yes

    /**
     * Valid Distributed Energy Resource Type
     */
    onsite_der_type:  derType;   // default=?? not given ?? 	part 680=no

    /**
     * Nameplate capacity of onsite energy generation in kW
     */
    der_power:  number;   // float(2) default=no	part 680=yes

    /**
     * Combined nameplate capacity of onsite energy generation and/or
     * maximum battery discharge capacity in kilowatts (kW).
     */
    der_energy:  number;   // float(2) default=no	part 680=yes

};

