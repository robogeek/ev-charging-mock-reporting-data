

/**
 * float/(n) – A floating point number. Float fields with a number in parenthesis (n) must contain exactly n decimal places. Example 1.2345.
 */

/**
 * string/(n) – A string of UTF-8 characters. String fields with a number in parenthesis (n) must contain exactly n characters.
 */

/**
 * A timestamp in ISO 8601/RFC 3339 format (YYYY-MM-DDThh–mm–ss.sssZ) and
 * in coordinated universal time (UTC). For dates without time information,
 * HH–mm–ss may be omitted.
 * 
 * Example 2022-01-01T01–01–00Z represents January 1, 2022 at 12–01 UTC.
 */
export type datetime = string;

/**
 * ISO 8601 duration string.
 */
export type duration = string;

/**
 * Four-digit string representing a year.
 */
export type year = string;

/**
 * float(2) related to a cost for something.
 */
export type cost = number;

export type paymentMethod = 'cash' | 'credit_card_terminal'
    | 'membership' | 'application' | 'phone'
    | 'plug-charge' | 'roaming' | 'other';

export type chargerType = 'level_1' | 'level_2' | 'DCFC';

export type connectorType = 'CCS' | 'CHAdeMO' | 'J1772' | 'NACS';

// The spec only lists the connector types used in North America.
// This is an attempt to name more connector types used around the world.
export type connectorTypeGlobal = 'CCS1' | 'CCS2' | 'CHAdeMO'
    | 'IEC-Type-1' | 'IEC-Type-2' | 'NACS';

export type accessType = 'public' | 'private' | 'semi_public' | 'commercial_only';

export type operatingStatus = 'operational'
    | 'under_construction' | 'planned' | 'decommissioned';

export type derType = 'solar' | 'stationary_battery'
    | 'wind' | 'fuel_cell' | 'other';
