import './Degree.css';

import { Button } from 'primereact/button';
import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';


const Degree = ({ degree, handleRemoveDegree, index, handleDegreeChange }) => {
    return (
        <section className="degree-section flex flex-column surface-100 border-2 border-200">
            <div className="degree-header flex justify-content-between align-items-center surface-200">
                <h3>Graduação {index + 1}</h3>
                <Button
                    icon="pi pi-trash"
                    className="grad-remove bg-red-500 border-red-500"
                    label=""
                    onClick={handleRemoveDegree}
                    type="button"
                />
            </div>
            <div className="form-row flex">
                {/* Campo para o NOME DO CURSO da graduação. */}
                <div className="form-item flex flex-column align-items-start">
                    <label htmlFor="degreeCourseName">Nome do curso:</label>
                    <InputText
                        aria-describedby="degreeCourseName-help"
                        className="w-full text-overflow-ellipsis"
                        id="degreeCourseName"
                        onChange={(e) => handleDegreeChange(e, index)}
                        name="degreeCourseName"
                        value={degree.degreeCourseName}
                    />
                    <small id="degreeCourseName-help">Curso de graduação.</small>
                </div>

                {/* Campo para a DATA DE CONCLUSÃO da graduação. */}
                <div className="w-9rem form-item-date flex flex-column align-items-start">
                    <label htmlFor="degreeConclusionDate">Conclusão:</label>
                    <InputMask
                        aria-describedby="degreeConclusionDate-help"
                        className="w-full text-overflow-ellipsis"
                        id="degreeConclusionDate"
                        mask="99/99/9999"
                        onChange={(e) => handleDegreeChange(e, index)}
                        name="degreeConclusionDate"
                        slotChar="dd/mm/aaaa"
                        value={degree.degreeConclusionDate}
                    />
                    <small id="degreeConclusionDate-help">Data de conclusão.</small>
                </div>
            </div>

            <div className="form-row flex">
                {/* Campo para o LOCAL da graduação. */}
                <div className="form-item flex flex-column align-items-start">
                    <label htmlFor="degreeCourseLocation">Local da Graduação:</label>
                    <InputText
                        aria-describedby="degreeCourseLocation-help"
                        className="w-full text-overflow-ellipsis"
                        id="degreeCourseLocation"
                        onChange={(e) => handleDegreeChange(e, index)}
                        name="degreeCourseLocation"
                        value={degree.degreeCourseLocation}
                    />
                    <small id="degreeCourseLocation-help">Local onde a graduação foi realizada.</small>
                </div>
            </div>
        </section>
    );
};

export default Degree;