
import { datetime, duration, year, cost, paymentMethod  } from './common.js';

export type OperatingData = {

    /**
     * Unique identifier for session record
     */
    session_id:  string;   // default=yes	part 680=yes

    /**
     * Unique identifier for specified port. (For NEVI or other Part 680 project, 
     * port_id must be same as the permanent station identifier provided
     * to third parties pursuant to CFR 23 § 680.116(c)(8)(iii).)
     */
    port_id:  string;   // default=yes	part 680=yes
    
    /**
     * Date and time of session initialization (plug in)
     */
    plug_start_datetime: datetime;    //  date/time default=yes	part 680=yes

    /**
     * Date and time of session termination (plug out)
     */
    plug_end_datetime: datetime;    //  date/time default=yes	part 680=no

    /**
     * Date and time when charging began
     */
    charge_start_datetime: datetime;    //  date/time default=yes	part 680=no

    /**
     * Charging end date time
     */
    charge_end_datetime: datetime;    //  date/time default=no	part 680=no

    /**
     * 	Total duration of session (plug in to plug out)
     */
    session_duration: duration; // duration default=no	part 680=no

    /**
     * Total duration of time when electricity was actively dispensed - may not
     * always be equal to the difference between charge_start_datetime
     * and charge_end_datetime due to charge interruptions or managed charging
     */
    charging_duration: duration; // duration default=no	part 680=no

    /**
     * Electricity dispensed (in kilowatt-hours) during charging session
     */
    energy_kwh:  number; // non-negative float default=yes	part 680=yes

    /**
     * Session maximum power delivery (in kilowatts)
     */
    peak_kw:  number; // non-negative float default=yes	part 680=yes

    /**
     * The amount charged to the EV driver (in USD) where applicable - zero
     * if driver was not charged for an otherwise paid charger, NULL if charger is not paid
     */
    total_fee_charged:   cost; // float(2) default=yes	part 680=no

    /**
     * Fee (in USD) charged to user per kilowatt-hour
     */
    energy_fee:   cost; // float(2) default=yes	part 680=no

    /**
     * Fee (in USD) charged to user per session
     */
    session_fee:   cost; // float(2) default=no	part 680=no

    /**
     * Fee (in USD) charged to users per minute
     */
    time_fee:   cost; // float(2) default=no	part 680=no

    /**
     * Anonymized network-specific unique user ID
     */
    user_id:   string; // default=no	part 680=no

    /**
     * Whether or not the session ended as expected
     */
    successful_completion:   boolean; // default=no	part 680=no

    /**
     * Cause of the session to end (e.g., unplugged while charging).
     */
    ended_by:   string; // default=no	part 680=no

    /**
     * Battery state of charge at session start represented as a decimal between 0 and 1
     */
    start_soc:   number; // float(2) default=no	part 680=no

    /**
     * Battery state of charge at session end represented as a decimal between 0 and 1
     */
    end_soc:   number; // float(2) default=no	part 680=no

    /**
     * Session error code(s) if any. Separated by comma if multiple.
     */
    error_code:   string; // default=no	part 680=yes

    /**
     * Valid Payment Type
     */
    payment_type:   paymentMethod; // default=no	part 680=yes

};
