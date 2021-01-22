import React, { useState } from "react";
import { createUseStyles } from 'react-jss';

import Topic from "../../components/Topic";
import InputText from "../../components/InputText";
import InputChoose from "../../components/InputChoose";
import TypeOfWaste from "../../components/TypeOfWaste";
import ChooseTypeOfWaste from "../../components/ChooseTypeOfWaste";
import Button from "../../components/Buttons/Button";

const useStyles = createUseStyles({
    container: {
        padding: "30px 10rem",
        display: "flex",
        flexDirection: "column",
    },
    imageContainer: {
        display: "flex",
        width: 100,
        height: 100,
        backgroundColor: "#525252",
        borderRadius: 100,
    },
    image: {
        margin: "auto",
    },
    upload: {
        margin: "0 auto",
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        alignItems: "center",
    },
    input: {
        display: "none",
    },
    inputLabel: {
        color: "#25BA00",
        fontSize: 18,
        "&:hover": {
            cursor: "pointer",
        }
    },
    grayLine: {
        border: "1px solid #E3E3E3",
        width: "100%",
    },
    typesContainer: {
        display: "flex",
        flexWrap: "wrap",
        gap: 5,
        marginBottom: 20, // asd
    },
});

function Registration() {
    const classes = useStyles();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [organisationName, setOrganisationName] = useState("");
    const [descriptionOrg, setDescriptionOrg] = useState("");
    const [types, setTypes] = useState([]);
    const [street, setStreet] = useState("");
    const [house, setHouse] = useState("");
    const [office, setOffice] = useState("");
    const [telephoneNumber, setTelephoneNumber] = useState("");
    const [site, setSite] = useState("");

    const onChoose = (type) => {
        let temp = types.slice();
        temp.push(type);
        setTypes(temp);
    }

    const onUnChoose = (type) => {
        let temp = types.slice();
        let index = temp.indexOf(type);
        temp.splice(index, 1);
        setTypes(temp);
    }

    console.log(types)

    return(
        <div className={classes.registration}>
            <Topic text="РЕГИСТРАЦИЯ" />
            
            <div className={classes.container}>
                <div className={classes.upload}>
                    <div className={classes.imageContainer}>
                        <img className={classes.image} src="./resycArrows.png" />
                    </div>
                
                    <input className={classes.input} type="file" id="uploadPhoto" accept="image/*" />
                    <label className={classes.inputLabel} for="uploadPhoto">Загрузить фото</label>
                </div>

                <br />

                <InputText label="Логин *" onChange={setLogin} />
                <br />
                <InputText label="Пароль *" onChange={setPassword} />

                <hr className={classes.grayLine} />

                <InputText label="Название огранизации *" onChange={setOrganisationName} />
                <br />
                <InputText label="Описание организации" onChange={setDescriptionOrg} type="textarea" />
                <br />
               
                    <div className={classes.typesContainer}>
                     

                        {["PET-1 Полиэтилентерефталат","PE-HD-2 Полиэтилен высокой плотности","PVC-3 Поливинилхлорид","PE-LD-4 Полиэтилен низкой плотности", "PP-5 Полипропилен", "PS-6 Полистирол", "O-7  Прочие пластмассы", "ABS Акрилонитрилбутадиенстирол", "PAP-20 Гофрокартон", "PAP-21 Картон", 
                          "PAP-22 Бумага", "FE-40 Сталь", "ALU-41 Аллюминий", "FOR-50 Древесина", "FOR-51 Пробка", "TEX-60 Одежда", "TEX-61 Джут", "PapPet-81 Комбинированные материалы", "C/PAP-84 Комбинированные материалы"]
                          .map((type) =>  <ChooseTypeOfWaste type={type}
                                                onChoose={(type) => onChoose(type)} 
                                                onUnChoose={(type) => onUnChoose(type)}>
                                                    <TypeOfWaste text={type} color="#25BA00" />
                                            </ChooseTypeOfWaste>
                          )}

                    </div>
                
                <br />
                
                    <InputText label="Улица *" onChange={(v) => setStreet(v)} />
                    <InputText label="Дом *" onChange={(v) => setHouse(v)} />
                    <InputText label="Офис" onChange={(v) => setOffice(v)} />
                    <InputText label="Телефон" onChange={(v) => setTelephoneNumber(v)} />
                    <InputText label="Сайт" onChange={(v) => setSite(v)} />
                
                
                <br />
                <Button text="Сохранить" onClick={() => console.log()} style={{backgroundColor: "#25BA00", color: "white", width: "100%", textAlign: "center",marginTop:"10",marginBottom:"10",paddingBottom:"10"}} />
            </div>
        </div>
    );
}

export default Registration;