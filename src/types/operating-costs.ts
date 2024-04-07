
import { datetime, year, cost  } from './common.js';

export type OperatingCosts = {

    /**
     * Unique identifier for the station where specific port is located.
     * (For NEVI or other Part 680 project, station_id must be same as
     * the permanent station identifier provided to third parties pursuant
     * to CFR 23 § 680.116(c)(1)).
     */
    station_id:  string;   // default=yes	part 680=yes
    
    /**
     * Start date of operations costs reporting period
     * @datetime
     */
    oc_period_start:   datetime;   // date default=yes	part 680=no

    /**
     * End date of operations costs reporting period
     * @datetime
     */
    oc_period_end:   datetime;   // date default=yes	part 680=no

    /**
     * Year of operating cost (if reported annually)
     */
    oc_year:   year;   // string(4) date default=yes	part 680=no

    /**
     * Total maintanence and repair cost incurred (in USD) in reporting period or year
     */
    station_mr:   cost;   // float(2) date default=yes	part 680=yes

    /**
     * Total amount paid (in USD) for maintenance costs during reporting period or year
     */
    maintenance_cost:   cost;   // float(2) date default=no	part 680=no

    /**
     * Total amount paid (in USD) for repair costs during reporting period of year
     */
    repair_cost:   cost;   // float(2) date default=no	part 680=no

    /**
     * Total amount paid (in USD) for station electricity use during reporting period
     * (estimated if station is not individually metered)
     */
    electricity_cost: cost;   // float(2) date default=yes	part 680=no

    /**
     * Total amount paid (in USD) associated with network access,
     * including network service fees, communications costs, transaction fees, etc.
     */
    network_costs: cost;   // float(2) date default=yes	part 680=no

};
