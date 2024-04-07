
import { datetime, cost, chargerType, connectorType, paymentMethod  } from './common.js';

export type Port = {

    /**
     * Unique identifier for specified port. (For NEVI or other Part 680 project, 
     * port_id must be same as the permanent station identifier provided
     * to third parties pursuant to CFR 23 § 680.116(c)(8)(iii).)
     */
    port_id:  string;   // default=yes	part 680=yes

    /**
     * Unique identification code specific to individual funding application or contract.
     * Project ID is supplied by administrator upon approval of funding.
     */
    project_id:  string;   // default=yes	part 680=yes

    /**
     * Unique identifier for the station where specific port is located.
     * (For NEVI or other Part 680 project, station_id must be same as
     * the permanent station identifier provided to third parties pursuant
     * to CFR 23 § 680.116(c)(1)).
     */
    station_id:  string;   // default=yes	part 680=yes

    /**
     * Data provider organization name.
     */
    data_provider_org:  string;   // default=yes	part 680=no

    /**
     * Email address for data provider point of contact.
     */
    data_provider_poc_email:  string;   // default=yes	part 680=no

    /**
     * Port operational status.
     */
    is_active:  boolean;   // default=yes	part 680=no

    /**
     * Maximum charging power level of the port (in kW)
     */
    power_level_kw:  number;   // float  default=yes	part 680=no

    /**
     * Port WSG84-encoded longitude in decimal degrees to at least 4 decimal places.
     * Valid longitudes are between -180 and 180	
     */
    port_latitude:  number;   // float(>3)  default=yes	part 680=no

    /**
     * Port WSG84 encoded latitude in decimal degrees to at least 4 decimal places.
     * Valid latitudes are between -90 and 90.
     */
    port_longitude:  number;   // float(>3)  default=yes	part 680=no

    /**
     * The first (full or partial) day where the station is fully operable
     * and accessible for its intended purpose
     */
    station_activation_date: datetime;   // date  default=yes	part 680=no

    /**
     * Charging station type (level)
     */
    charger_type: chargerType;   //  default=yes	part 680=yes

    /**
     * Valid Connector Type. Multiple connector types should be separated by commas.
     */
    connector_type: connectorType;   //  default=yes	part 680=yes

    /**
     * Fee charged to user per kWh (in USD).
     */
    energy_fee:  cost;   // float(2)	  default=no	part 680=no

    /**
     * Fee charged to user per session (in USD).
     */
    session_fee:  cost;   // float(2)	  default=no	part 680=no

    /**
     * Fee charged to users per minute (in USD).
     */
    time_fee:  cost;   // float(2)	  default=no	part 680=no

    /**
     * Fee charged for parking if separate from time_fee (in USD).
     */
    parking_fee:  cost;   // float(2)	  default=no	part 680=no

    /**
     * Fee charged for minutes not charging if separate from time fee (in USD).
     */
    idle_fee:  cost;   // float(2)	  default=no	part 680=no

    /**
     * Number of hours station is open per day—e.g., a station that is always open
     * has a value of 24 whereas a station that is open from 6 am to 6 pm has a value of 12.
     */
    operating_hours:  number;   // float	  default=no	part 680=no

    /**
     * Charging equipment or system manufacturer name.
     */
    equipment_manufacturer:  string;   // default=no	part 680=no

    /**
     * Charging equipment or system model number.
     */
    model_number:  string;   // default=no	part 680=no

    /**
     * serial number of charging equipment or system.
     */
    equipment_serial:  string;   // default=no	part 680=no

    /**
     * Last name of the data provider point of contact.
     */
    data_provider_poc_last:  string;   // default=no	part 680=no

    /**
     * First name of the data provider point of contact.
     */
    data_provider_poc_first:  string;   // default=no	part 680=no

    /**
     * Name of network service provider.
     */
    network:  string;   // default=no	part 680=no

    /**
     * Email address for network service provider.
     */
    network_contact:  string;   // default=no	part 680=no

    /**
     * Charging equipment manufacturer name.
     */
    evse_manufacturer:  string;   // default=no	part 680=no

    /**
     * Port located on pull through stall that can accommodate a vehicle and trailer
     */
    trailer_accessible:   boolean;   // default=no	part 680=yes

    /**
     * Valid Payment Type.
     */
    payments_accepted:   paymentMethod;   // default=no	part 680=yes
};

