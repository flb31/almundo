import React, { Component } from 'react';
import Accordion from 'Components/App/Accordion';
import FilterSearch from './FilterSearch';
import FilterStar from './FilterStar';
import { Search as searchIcon, Star as starIcon } from 'Components/App/Icons';

import styles from './FilterContainer.scss';

class FilterContainer extends Component {
    
    render() { 
        return (
            <Accordion
                icon={null}
                className={`${styles.container}`}
                classNameHeader={styles.header}
                title="Filtrar">

                    <Accordion
                        icon={searchIcon}
                        title="Nombre de hotel"
                        className={this.props.sharedStyles['m-quarter-t']}>

                        <FilterSearch sharedStyles={this.props.sharedStyles} />

                    </Accordion>

                    <Accordion
                        icon={starIcon}
                        title="Estrellas"
                        className={this.props.sharedStyles['m-quarter-t']}>
                        
                        <FilterStar />

                    </Accordion>

            </Accordion>
        );
    }
}
 
export default FilterContainer;
