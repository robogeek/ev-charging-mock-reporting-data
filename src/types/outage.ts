
import { datetime  } from './common.js';

export type Outage = {


    /**
     * Unique identifier for an individual outage on an individual port.
     */
    outage_id: string;   // default=no	part 680=yes


    /**
     * Unique identifier for specified port. (For NEVI or other Part 680 project, 
     * port_id must be same as the permanent station identifier provided
     * to third parties pursuant to CFR 23 § 680.116(c)(8)(iii).)
     */
    port_id:  string;   // default=no	part 680=yes

    /**
     * Unique identifier for the station where specific port is located.
     * (For NEVI or other Part 680 project, station_id must be same as
     * the permanent station identifier provided to third parties pursuant
     * to CFR 23 § 680.116(c)(1)).
     */
    station_id:  string;   // default=no	part 680=yes
    
    /**
     * Date and time when outage started or was first detected.
     */
    outage_start: datetime; // datetime	default=no	part 680=no

    /**
     * Date and time when outage was resolved.
     */
    outage_end: datetime; // datetime	default=no	part 680=no

    /**
     * Duration of outage in minutes (including partial minutes)
     */
    outage_duration: number;  // float(2)	default=no	part 680=yes

    /**
     * Cause of outage (e.g. equipment failure, power failure, vandalism).
     */
    outage_cause:  string;   // default=no	part 680=yes

    /**
     * Is outage exempted under program rules?
     */
    exempted_outage: boolean;  // default=no	part 680=yes
};
