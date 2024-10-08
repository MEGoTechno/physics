import React from 'react'
import MakeInput from './MakeInput'
import { Form, Formik } from 'formik'
import * as Yup from "yup"
import { Alert, Box, Button } from '@mui/material'
import Loader from "../../tools/Loader"
import { sendSuccess } from '../../../style/buttonsStyles'
import { useSelector } from 'react-redux'

export default function MakeForm({ inputs, onSubmit, formOptions }) {
    let data = {}
    const validation = {}
    const { lang } = useSelector(s => s.global)

    // arrange data of input with ===> name , validation, initial value
    inputs.forEach((input, i) => {
        data[input.name] = input.value || ""

        if (input.validation) {
            validation[input.name] = input.validation
        }
    });

    const validationSchema = Yup.object().shape(validation)

    return (
        <Box width={"100%"}>
            <Formik initialValues={data} onSubmit={onSubmit} validationSchema={validationSchema}>
                {(props) => (
                    <Form style={{ display: 'flex', alignItems: 'center', flexDirection:'column' }}>

                        <Box display={"flex"} justifyContent={"space-between"} flexWrap={"wrap"} >
                            {inputs && inputs.map((input, i) => {
                                return (
                                    <MakeInput key={i} input={input} props={props} />
                                )
                            })}
                        </Box>

                        <Button
                            sx={sendSuccess}
                            type='submit'
                            disabled={formOptions?.isLoading || !props.dirty ? true : false}
                        >
                            {formOptions?.isLoading ? <Loader /> : lang.send}
                        </Button>
                    </Form>
                )}
            </Formik>
            {formOptions?.isDone &&
                <Alert severity={formOptions?.isError ? "error" : "success"}>{formOptions?.doneMessage}</Alert>
            }
        </Box>
    )
}