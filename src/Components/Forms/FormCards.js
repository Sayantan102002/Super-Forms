import { Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import FormCard from './FormCard'

export default function FormCards() {

    const { formsDictionary, formIds, deleteForm } = useSelector((state) => state.forms)
    return (
        
        <Grid container spacing={4} sx={{margin: "0 0 0 0"}} >
            {formIds.map((formId) => {
                const form = formsDictionary[formId]
                return (
                    <Grid item>
                        <FormCard data={form} key={formId} formId={formId} deleteForm={deleteForm} />
                    </Grid>
                )
            })}
            </Grid>
        
    )

}
