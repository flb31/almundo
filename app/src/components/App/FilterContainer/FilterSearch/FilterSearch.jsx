import React, { Component } from 'react';
import Input from 'Components/App/Input';
import Button from 'Components/App/Button';

class FilterSearch extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <div className={`${this.props.sharedStyles.grid} ${this.props.sharedStyles['grid-negative']}`}>
                    <div className={`${this.props.sharedStyles.grid__item} ${this.props.sharedStyles['two-thirds']}`}>
                        <Input placeholder="Ingrese el nombre del hotel" />
                    </div>

                    <div className={`${this.props.sharedStyles.grid__item} ${this.props.sharedStyles['one-third']} ${this.props.sharedStyles['p-half-h']}`}>
                        <Button>Aceptar</Button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default FilterSearch;