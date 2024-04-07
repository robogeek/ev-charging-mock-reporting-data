
import { datetime, cost } from './common.js';

export type Project = {

    /**
     * Unique identification code specific to individual funding application or contract.
     * Project ID is supplied by [Department] upon approval of funding.	
     */
    project_id:	string;  // default=yes	part 680=yes

    /**
     * Unique identity specific to the physical location of the station (site) funded by the project.
     * Station ID must be same as the permanent station identifier provided to third parties pursuant
     * to CFR 23 § 680.116(c)(1).
     */
    station_id: string;   // default=yes	part 680=yes

    /**
     * Organization name of the obligated party.
     */
    org_name: string; // default=yes	part 680=no

    /**
     * Street address of obligated party.
     */
    org_address: string	// default=yes	part 680=no

    /**
     * City of obligated party.
     */
    org_city: string;    // default=yes	part 680=no

    /**
     * Valid state code of obligated party.
     */
    org_state: 	string;   // default=yes	part 680=no

    /**
     * Valid ZIP Code of entity responsible for operation and maintenance of the of
     * the funded charging station.
     */
    org_zip: string;   // default=yes	part 680=no

    /**
     * Obligated party point of contact valid email address
     */
    poc_email: string;   // default=yes	part 680=no

    /**
     * Obligated party point of contact first name
     */
    poc_first_name: string;   // default=yes	part 680=no

    /**
     * Obligated party point of contact last name
     */
    poc_last_name: 	string;   // default=yes	part 680=no

    /**
     * Date when project funding was awarded
     */
    // TODO on conversion make sure to convert the
    // input data to Date
    project_award_date: 	datetime;   // default=yes	part 680=no

    /**
     * Primary public funding source for the project/application
     */
    primary_funding_source: string;   // default=yes	part 680=no

    /**
     * Total funding (in USD) station received from the primary funding source dedicated
     * to station deployment. (should not include any funding for station operation costs)
     */
    primary_funding: cost; /*	float(2) */ // default=yes	part 680=no

    /**
     * Total funding (in USD) the project received from electric utilities
     * dedicated to infrastructure make-ready
     */
    utility_makeready: cost; /*	float(2) */ // default=yes	part 680=no

    /**
     * Total funding (in USD) the project received from utility for equipment
     * or other non-make-ready costs (should not include any funding for operational costs)
     */
    utility_funding_other: cost; /*	float(2) */ // default=yes	part 680=no

    /**
     * Total funding (in USD) other public funding received dedicated to infrastructure make-ready
     */
    other_makeready: cost; /*	float(2) */ // default=yes	part 680=no

    /**
     * Amount of other public funding project received for equipment
     * or other non-make-ready costs (should not include any funding for operational costs)
     */
    other_funding_other: cost; /*	float(2) */ // default=yes	part 680=no

    /**
     * Funding amount project has received from other (private,
     * non-utility) sources when combined with primary_funding
     * and utility_funding and other_public_funding equals the total cost of the charging installation
     */
    cost_share: cost; /*	float(2) */ // default=yes	part 680=no

    /**
     * Cost (in USD) to acquire funded charging equipment.
     */
    equipment_cost: cost; /*	float(2) */ // default=no	part 680=yes

    /**
     * Cost (in USD) for all labor and materials costs (including electrical equipment)
     * necessary to necessary to install charging equipment.
     */
    install_cost: cost; /*	float(2) */ // default=no	part 680=yes

    /**
     * Cost (in USD) to acquire real property on which to install funded chargers.
     */
    property_cost: cost; /*	float(2) */ // default=no	part 680=yes

    /**
     * Cost (in USD) to acquire distributed energy resource equipment.
     */
    der_equipment_cost: cost; /*	float(2) */ // default=no	part 680=yes

    /**
     * Cost (in USD) for all labor and materials costs (including electrical equipment)
     * necessary to install distributed energy resources equipment.
     */
    der_install_cost: cost; /*	float(2) */ // default=no	part 680=yes

    /**
     * Cost (in USD) of contributions in aid of construction for line extensions
     * and upgrades necessary to install chargers.
     */
    distribution_costs: cost; /*	float(2) */ // default=no	part 680=yes

    /**
     * Cost (in USD) of contributions in aid of construction for service upgrade
     * costs for customer transformers, poles, meters, and other utility service
     * equipment necessary to install chargers.
     */
    service_costs: cost; /*	float(2) */ // default=no	part 680=yes

    /**
     * Method, model or program definition of disadvantaged community.
     * For example CEJST 1.0.
     */
    dac_type: string; // default=no	part 680=no

    /**
     * Project is located inside of disadvantaged community as specified by dac_type.
     */
    in_dac: boolean; // default=no	part 680=no

    /**
     * Project is located within a program specified distance from disadvantaged community
     * as as specified by dac_type.
     */
    dac_proximate: boolean; // default=no	part 680=no

    /**
     * The total charger power capacity (in kW) deployed by the project 
     * - if charging equipment share power supplies, only the maximum
     * simulataneous power output should be reported.
     */
    total_power: number;  // float	default=no	part 680=no

};
