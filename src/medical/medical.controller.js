export class MedicalController {
  static getMedicalHistory (req, res) {
    const { id } = req.params
    console.log(`Todo el historial médico de la mascotora con ID ${id} `)
    res.send('this is getMedicalHistory method')
  }

  static getMedicalRecord (req, res) {
    const { id, recordId } = req.params
    console.log(`El registro médico de ID ${recordId} pertenece a la mascotora con ID ${id} `)
    res.send('this is getMedicalRecord method')
  }

  static addMedicalRecord (req, res) {
    const { id } = req.params
    console.log(`Registro médico añadido al historial de la mascota con ID ${id} `)
    res.send('this is addMedicalRecord method')
  }

  static updateMedicalRecord (req, res) {
    const { id, recordId } = req.params
    console.log(`El registro médico de ID ${recordId} de la mascotora con ID ${id} se ha actualizado`)
    res.send('this is updateMedicalRecord method')
  }

  static deleteMedicalRecord (req, res) {
    const { id, recordId } = req.params
    console.log(`El registro médico de ID ${recordId} de la mascotora con ID ${id} se ha eliminado`)
    res.send('this is deleteMedicalRecord method')
  }
}
