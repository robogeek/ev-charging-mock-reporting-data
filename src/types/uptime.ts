
import { datetime } from './common.js';

export type Uptime = {


    /**
     * Unique identifier for specified port. (For NEVI or other Part 680 project, 
     * port_id must be same as the permanent station identifier provided
     * to third parties pursuant to CFR 23 § 680.116(c)(8)(iii).)
     */
    port_id:  string;   // default=yes	part 680=yes

    /**
     * Unique identifier for the station where specific port is located.
     * (For NEVI or other Part 680 project, station_id must be same as
     * the permanent station identifier provided to third parties pursuant
     * to CFR 23 § 680.116(c)(1)).
     */
    station_id:  string;   // default=no	part 680=yes
    

    /**
     * Start date of uptime reporting period.
     */
    uptime_period_start: datetime; // date default=no	part 680=no

    /**
     * End date of uptime reporting period.
     */
    uptime_period_end: datetime; // date default=no	part 680=no

    /**
     * Year and month of uptime summary in YYYYMM format if reported monthly (as required by part 680)
     */
    report_yr_mon:  string;   // string(6) default=no	part 680=yes

    /**
     * Uptime percentage (between 0-100) for Port ID in uptime period
     * or Report Year and Month. (For NEVI or other Part 680 project,
     * calculated in accordance with CFR 23 § 680.116(b)).
     */
    uptime_pct: number; // float(2)	default=no	part 680=yes

    /**
     * Total number of outage minutes (including partial minutes)
     * for Port ID in in uptime period or Report Year and Month.
     * For NEVI or other Part 680 project, calculated
     * in accordance with CFR 23 § 680.116(b)).
     */
    outage_total: number; // float(2)	default=no	part 680=yes

    /**
     * Total number of excluded outage minutes (including partial minutes)
     * for Port ID in uptime period or Report Year and Month.
     * (For NEVI or other Part 680 project, calculated in accordance with CFR 23 § 680.116(b)).
     */
    outage_excluded: number; // float(2)	default=no	part 680=yes

};
