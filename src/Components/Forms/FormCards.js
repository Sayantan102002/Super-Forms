import { Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import FormCard from './FormCard'

export default function FormCards() {

    const { formsDictionary, formIds } = useSelector((state) => state.forms)
    console.log(formsDictionary, formIds)
    return (

        <Grid container spacing={4} sx={{ margin: "0 0 0 0" }} >
            {formIds.map((formId) => {
                const form = formsDictionary[formId]
                return (
                    <Grid item key={formId}>
                        <FormCard data={form} key={formId} />
                    </Grid>
                )
            })}
        </Grid>

    )

}
