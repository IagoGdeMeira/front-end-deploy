import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';
import React, { useState } from "react";

import {
    handleAddressCEPChange,
    handleAddressNumberChange,
    handleAddressStreetChange
} from "../handlers/addressHandlers";


const AddressForm = () => {
    const [cep, setCEP] = useState('');
    const [address, setAddress] = useState({
        addressStreet: '',
        addressNumber: '',
        addressNeighborhood: '',
        addressCity: ''
    });

    return (
        <section className="border-top-2 border-yellow-800 flex flex-column">
            <h2>Endereço Residencial</h2>
            <div className="form-row flex">
                {/* Campo do CEP do endereço residencial */}
                <div className="w-7rem form-item-integer-input flex flex-column align-items-start">
                    <label htmlFor="addressCEP">CEP:</label>
                    <InputMask
                        aria-describedby="addressCEP-help"
                        className="w-full text-overflow-ellipsis"
                        id="addressCEP"
                        mask="99999-999"
                        onChange={(e) => handleAddressCEPChange(e, setCEP, address, setAddress)}
                        value={cep}
                    />
                    <small id="addressCEP-help">CEP residencial.</small>
                </div>

                {/* Campo do NÚMERO DA RESIDÊNCIA do professor */}
                <div className="w-7rem form-item-integer-input flex flex-column align-items-start">
                    <label htmlFor="addressNumber">Número:</label>
                    <InputText
                        aria-describedby="addressNumber-help"
                        className="w-full text-overflow-ellipsis"
                        id="addressNumber"
                        onChange={(e) => handleAddressNumberChange(e, address, setAddress)}
                        value={address.addressNumber}
                    />
                    <small id="addressNumber-help">Nº residencial.</small>
                </div>

                <div className="min-w-min form-item flex flex-column align-items-start">
                    <label htmlFor="addressStreet">Rua:</label>
                    <InputText
                        aria-describedby="addressStreet-help"
                        className="w-full text-overflow-ellipsis"
                        id="addressStreet"
                        onChange={(e) => handleAddressStreetChange(e, address, setAddress)}
                        value={address.addressStreet}
                    />
                    <small id="addressStreet-help">Campo da rua residencial.</small>
                </div>
            </div>
        </section>
    );
}

export default AddressForm;