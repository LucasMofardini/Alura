import React, { useState } from 'react'
// import Button from '@mui/material/Button'
import { TextField, Button, Switch, FormControlLabel } from '@mui/material'

function DadosUsuario() {
  return (
    <form>
      <TextField id="email" label="email" type="email" margin="normal" fullWidth />
      <TextField id="senha" label="senha" type="password" margin="normal" fullWidth />
      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  )
}

export default DadosUsuario
